<script lang="ts">
	import ViewItem from '$lib/ViewItem.svelte';
	export let array: any[];
	export let view: number;
	let prop = -1;
	$: key = array[0] && prop != -1 ? Object.keys(array[0])[prop] : 'gantry--default';

	const add = () => {
		array.push({});
		array = array;
		console.log(array);
	};

	const restore = () => {
		try {
			navigator.clipboard.readText().then((t) => (array = JSON.parse(t)));
		} catch (e) {}
	};
</script>

<section>
	<h2>View</h2>
	<button on:click={add}>New Item</button>
	<button on:click={restore}>Restore From Clipboard</button>
	<hr />
	<span>Select view property:</span>
	<select bind:value={prop}>
		<option value={-1}>Stringify</option>
		{#each Object.keys(array[0]) as key, i}
			<option value={i}>{key}</option>
		{/each}
	</select>
	<br />
	{#each array as item, i}
		<ViewItem on:click={() => (view = i)} bind:item {i} active={view === i} {key} />
	{/each}
</section>

<style>
	select {
		margin-left: 5px;
		margin-bottom: 10px;
	}
</style>
