<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];

	// Generate output
	$: json = JSON.stringify(array, null, 2);
	$: rss =
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
	<title>Ivy Direct</title>
	<link>https://ivy.direct</link>
	<description>The latest updates, work, and more from Ivy's engineering portfolio.</description>` + 
array.map((item) => { return `
	<item>
		<title>${item.name}</title>
		<guid>${item.id}</guid>
		<link>https://work.ivy.direct/project/${item.id}</link>
		<source url="https://work.ivy.direct/project/${item.id}">Ivy Direct - ${item.name}</source>
		<description>${item.descriptionLong || item.description}</description>
	</item>`;
}).join('') +
`</channel>
</rss>`;

	$: properties = Object.keys($example).map((key) => {
		return { name: key, type: $example[key] };
	});
</script>

<section>
	<h2>JSON Output</h2>
	<textarea bind:value={json} />
	<h2>RSS Output</h2>
	<textarea bind:value={rss} />
	<h2>View Schema</h2>
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
		min-height: 150px;
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
