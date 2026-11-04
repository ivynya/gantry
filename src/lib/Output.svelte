<script lang="ts">
	import { example } from '#lib/schema.js';
	import { generateRSS } from './rss';
	interface Props {
		array: any[];
	}

	let { array }: Props = $props();

	// Generate output
	let json = $derived(JSON.stringify(array, null, 2));
	let rss = $state("");

	async function triggerGenerateRSS() {
		rss = await generateRSS(array);
	}

	let properties = $derived(Object.keys($example).map((key) => {
		return { name: key, type: $example[key] };
	}));
</script>

<section>
	<h2>JSON Output</h2>
	<textarea bind:value={json}></textarea>
	<h2>RSS Output</h2>
	<button onclick={triggerGenerateRSS}>Generate RSS</button>
	<br><br>
	<textarea bind:value={rss}></textarea>
	<h2>View Schema</h2>
	{#each properties as prop}
	<div class="property">
		<input type="text" name="sc-name-1" id="sc-name-1" placeholder="Property Name" value={prop.name}>
		<select name="sc-type-1" id="sc-type-1" value={prop.type}>
			<option value="string">String</option>
			<option value="boolean">Bool</option>
			<option value="array">Array</option>
			<option value="object">Object</option>
		</select>
	</div>
	{/each}
</section>

<style>
	textarea {
		min-height: 150px;
		width: 100%;
		resize: vertical;
		text-transform: none;
	}

	.property {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		column-gap: 5px;

		margin-bottom: 8px;
	}

	.property input {
		flex: 1 1;
	}

	.property input, .property select {
		font-size: 0.7rem;
		padding: 5px 10px;
	}
</style>
