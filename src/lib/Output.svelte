<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];
	$: json = JSON.stringify(array);

	$: schemaString =
		'{"id": "string","name": "string","description": "string","longDescription": "string","startDate": "string","endDate": "string","tags": "array","type": "array"}';
	const onSchemaChange = () => {
		$example = JSON.parse(schemaString);
	};
</script>

<section>
	<h2>JSON Output</h2>
	<textarea bind:value={json} />
	<br /><br />
	<h3>Modify Schema</h3>
	<textarea class="in" on:change={onSchemaChange} bind:value={schemaString} />
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
</style>
