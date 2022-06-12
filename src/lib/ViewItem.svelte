<script lang="ts">
	export let active: boolean;
	export let item: any;
	export let i: number;
	export let key: string;
</script>

<button on:click class:active>
	<b>{i}</b>:
	{#if key === 'gantry--default'}
		{JSON.stringify(item)}
	{:else}
		{JSON.stringify(item[key])}
	{/if}
</button>

<style>
	button {
		display: block;

		max-width: 100%;
		width: 100%;
		text-align: left;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;

		margin: 5px 0;
		padding: 10px 20px;
	}
	button.active {
		background-color: slategray;
		color: white;
	}
</style>
