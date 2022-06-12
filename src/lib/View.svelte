<script lang="ts">
	import ViewItem from '$lib/ViewItem.svelte';
	export let array: any[];
	export let view: number;

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
	<button>Edit Schema</button>
	<hr />
	<br />
	{#each array as item, i}
		<ViewItem on:click={() => (view = i)} bind:item {i} active={view === i} />
	{/each}
</section>

<style>
</style>
