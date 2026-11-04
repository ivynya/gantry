<script lang="ts">
	interface Props {
		click: () => void;
		active: boolean;
		item: any;
		i: number;
		key: string;
	}

	let { click, active, item = $bindable(), i, key }: Props = $props();
</script>

<button onclick={click} class:active>
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
			font-family: 'cartograph-cf', monospace;
			padding: 1px 6px;
		}
	}
	button.active {
		background-color: slategray;
		color: white;
	}
</style>
