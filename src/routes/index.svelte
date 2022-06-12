<script lang="ts">
	import View from '$lib/View.svelte';
	import Editor from '$lib/Editor.svelte';
	import Output from '$lib/Output.svelte';

	let array: any[] = [{ id: 1 }];
	let view = 0;
</script>

<main>
	<View bind:array bind:view />
	<Editor bind:array bind:view />
	<Output bind:array />
</main>

<style>
	main {
		display: flex;
		column-gap: 20px;
		justify-content: space-between;
		padding: 30px;
	}
</style>
