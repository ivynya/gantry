<script lang="ts">
	import ViewItem from '$lib/ViewItem.svelte';
	interface Props {
		array: any[];
		view: number;
	}

	let { array = $bindable(), view = $bindable() }: Props = $props();
	let prop = $state(-1);
	let key = $derived(array[0] && prop != -1 ? Object.keys(array[0])[prop] : 'gantry--default');
	let old = $state(false);

	const add = () => {
		array.push({});
		array = array;
		console.log(array);
	};

	const webRestore = async () => {
		const res = await fetch('https://portfolio-i362f.ondigitalocean.app/api/portfolio/catalog');
		const data = await res.json();
		array = data;
	};
</script>

<section>
	<button onclick={add}>New Item</button>
	<button onclick={webRestore}>Restore From Catalog</button>
	<hr />
	<span
		>View:
		<select bind:value={prop}>
			<option value={-1}>Default</option>
			{#each Object.keys(array[0]) as key, i}
				<option value={i}>{key}</option>
			{/each}
		</select>
	</span>
	<span
		>Include Old
		<input type="checkbox" bind:checked={old} />
	</span>
	<br /><br />
	{#each array as item, i}
		{#if old || (!old && !item.old)}
			<ViewItem click={() => (view = i)} bind:item={array[i]} {i} active={view === i} {key} />
		{/if}
	{/each}
</section>

<style>
	span {
		background-color: #70809022;
		border-radius: 3px;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		column-gap: 5px;
		padding: 2px 5px;
	}

	select {
		background-color: transparent;
		margin-left: 5px;
	}

	input[type='checkbox'] {
		appearance: auto;
	}
</style>
