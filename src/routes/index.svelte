<script lang="ts">
	let array: any[] = [{ id: 1 }];
	$: json = JSON.stringify(array);

	const add = () => {
		array.push({});
		array = array;
		console.log(array);
	};

	let view = 0;

	let example: { [id: string]: string } = {
		id: 'string',
		name: 'string'
	};
</script>

<main>
	<section>
		<button on:click={add}>Add Item</button>
		<p>hi</p>
		{#each array as item, i}
			<p on:click={() => (view = i)}>{i}: {JSON.stringify(item)}</p>
		{/each}
	</section>
	<section>
		<h2>View: {view}</h2>
		{#each Object.keys(example) as key, i}
			<p>{key}</p>
			{#if example[key] === 'string'}
				<input type="text" bind:value={array[view][Object.keys(example)[i]]} />
			{/if}
		{/each}
	</section>
	<section>
		<h2>JSON Output</h2>
		<textarea bind:value={json} />
	</section>
</main>

<style>
	main {
		display: flex;
		column-gap: 20px;
		padding: 30px;
	}
	section {
		flex: 1 1;
	}
	button {
		padding: 10px 30px;
	}
</style>
