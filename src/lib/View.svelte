<script lang="ts">
	export let array: any[];
	export let view: number;

	const add = () => {
		array.push({});
		array = array;
		console.log(array);
	};
</script>

<section>
	<h2>View</h2>
	<button on:click={add}>New Item</button>
	<button>Restore JSON</button>
	<button>Edit Schema</button>
	<hr />
	{#each array as item, i}
		<p on:click={() => (view = i)}>{i}: {JSON.stringify(item)}</p>
	{/each}
</section>

<style>
	section {
		flex: 1 1;
		max-width: 30%;
	}
	p {
		max-width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	button {
		padding: 10px 20px;
	}
</style>
