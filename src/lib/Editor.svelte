<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];
	export let view: number;

	function x(ev: Event, v: string, e: { [id: string]: string }, i: string) {
		array[view][Object.keys($example)[i]] = ev.target.value.split(',');
	}
</script>

<section>
	<h2>Editing Item: <b>{view}</b></h2>
	{#each Object.keys($example) as key, i}
		<div>
			<label for="">{key}</label>
			{#if $example[key] === 'string'}
				<input type="text" bind:value={array[view][Object.keys($example)[i]]} />
			{/if}
			{#if $example[key] === 'array'}
				<input
					type="text"
					value={array[view][Object.keys($example)[i]]?.join(',') || ''}
					on:change={(e) => x(e, view, example, i)}
				/>
			{/if}
		</div>
	{/each}
</section>

<style>
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
