<script lang="ts">
	export let array: any[];
	export let view: number;

	let example: { [id: string]: string } = {
		id: 'string',
		name: 'string',
		description: 'string',
		longDescription: 'string',
		startDate: 'string',
		endDate: 'string',
		tags: 'array',
		type: 'array'
	};

	function x(ev: Event, v: string, e: { [id: string]: string }, i: string) {
		array[view][Object.keys(example)[i]] = ev.target.value.split(',');
	}
</script>

<section>
	<h2>Editing Item: <b>{view}</b></h2>
	{#each Object.keys(example) as key, i}
		<div>
			<label for="">{key}</label>
			{#if example[key] === 'string'}
				<input type="text" bind:value={array[view][Object.keys(example)[i]]} />
			{/if}
			{#if example[key] === 'array'}
				<input type="text" on:change={(e) => x(e, view, example, i)} />
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
		width: 100%;
	}
</style>
