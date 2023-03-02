<script lang="ts">
	import { example } from '$lib/schema';
	import EditorDisplay from './EditorDisplay.svelte';
	import EditorMain from './EditorMain.svelte';
	import EditorPlugins from './EditorPlugins.svelte';
	export let array: any[];
	export let view: number;

	let specialProperties = ["id", "name", "organization", "description", "startDate", "endDate", "upDate", "display", "tags", "license", "old", "plugins" ]

	function x(ev: Event, i: number) {
		array[view][Object.keys($example)[i]] = ev?.target?.value?.split(',');
	}
	function up() {
		array[view].upDate = new Date().toISOString().split('T')[0];
	}
</script>

<section>
	<h2>Editing Item: <b>{view}</b></h2>
	<button on:click={up}>Set Update to Today</button>
	<hr><br>
	<EditorMain bind:item={array[view]} />
	<br>
	<EditorDisplay bind:item={array[view]} />
	<br>
	<EditorPlugins bind:item={array[view]} />
	<br>
	{#each Object.keys($example) as key, i}
		{#if !specialProperties.includes(key)}
		<div>
			<label for="">{key}</label>
			{#if $example[key] === 'string'}
				<input type="text" bind:value={array[view][Object.keys($example)[i]]} />
			{/if}
			{#if $example[key] === 'array'}
				<input
					type="text"
					value={array[view][Object.keys($example)[i]]?.join(',') || ''}
					on:change={(e) => x(e, i)}
				/>
			{/if}
		</div>
		{/if}
	{/each}
</section>

<style lang="scss">
	section {
		flex: 1.5 1;
		max-width: none;
		margin: 0 5vw;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}
	div {
		margin-bottom: 10px;
	}
	input {
		font-size: 1rem;
		text-transform: none;
		width: 100%;
	}
</style>
