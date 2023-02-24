<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];
	$: json = JSON.stringify(array);

	$: properties = Object.keys($example).map((key) => {
		return { name: key, type: $example[key] };
	});
</script>

<section>
	<h2>JSON Output</h2>
	<textarea bind:value={json} />
	<br /><br />
	<h2>Modify Schema</h2>
	{#each properties as prop}
	<div class="property">
		<input type="text" name="sc-name-1" id="sc-name-1" placeholder="Property Name" value={prop.name}>
		<select name="sc-type-1" id="sc-type-1" value={prop.type}>
			<option value="string">String</option>
			<option value="boolean">Bool</option>
			<option value="array">Array</option>
		</select>
	</div>
	{/each}
</section>

<style>
	textarea {
		min-height: 300px;
		width: 100%;
		resize: vertical;
		text-transform: none;
	}
	.in {
		min-height: 150px;
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
