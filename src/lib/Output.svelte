<script lang="ts">
	export let array: any[];
	$: json = JSON.stringify(array);
</script>

<section>
	<h2>JSON Output</h2>
	<textarea bind:value={json} />
</section>

<style>
	textarea {
		min-height: 300px;
		width: 100%;
		resize: vertical;
		text-transform: none;
	}
</style>
