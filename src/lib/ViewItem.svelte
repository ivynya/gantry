<script lang="ts">
	export let active: boolean;
	export let item: any;
	export let i: number;
	export let key: string;
</script>

<button on:click class:active>
	{#if key === 'gantry--default'}
	<span>
		<b>#{i}</b>
		<code>{item.id}</code>
	</span>
	{:else}
	<span>
		<b>{i}</b>:
		{JSON.stringify(item[key])}
	</span>
	{/if}
</button>

<style lang="scss">
	button {
		border-radius: 0;
		display: flex;
		flex-direction: column;

		max-width: 100%;
		width: 100%;
		text-align: left;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;

		padding: 10px 20px;

		&:not(:last-child) {
			border-bottom: none;
		}

		span {
			display: flex;
			flex-direction: row;
			align-items: center;
			column-gap: 12px;
		}

		code {
			background-color: #0001;
			border-radius: 5px;
			font-size: 0.7rem;
			font-family: "cartograph-cf", monospace;
			padding: 1px 6px;
		}
	}
	button.active {
		background-color: slategray;
		color: white;
	}
</style>
