<script lang="ts">
	export let active: boolean;
	export let item: any;
	export let i: number;
</script>

<button on:click class:active>
	<b>{i}</b>: {JSON.stringify(item)}
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
