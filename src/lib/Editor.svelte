<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];
	export let view: number;

	let specialProperties = ["id", "name", "organization", "description", "startDate", "endDate", "upDate" ]

	function x(ev: Event, v: string, e: { [id: string]: string }, i: string) {
		array[view][Object.keys($example)[i]] = ev?.target?.value?.split(',');
	}
</script>

<section>
	<h2>Editing Item: <b>{view}</b></h2>
	<div class="box">
		<div class="header">
			<span><span class="dot green" /><span class="dot red" /></span>
			<span class="search">
				https://work.ivy.direct/project/
				<input type="text" bind:value={array[view]["id"]}>
			</span>
		</div>
		<div class="title">
			<input type="text" bind:value={array[view]["name"]}>
			<span>
				@<input type="text" bind:value={array[view]["organization"]}>
			</span>
		</div>
		<textarea class="desc" bind:value={array[view]["description"]} />
		<br><br>
		<div class="dates">
			<input type="text" bind:value={array[view]["startDate"]}>
			<span>-</span>
			<input type="text" bind:value={array[view]["endDate"]}>
			<span class="spacer"></span>
			<input type="text" bind:value={array[view]["upDate"]}>
		</div>
	</div>
	{#each Object.keys($example) as key, i}
		{#if !specialProperties.includes(key)}
		<div>
			<label for="">{key}</label>
			{#if $example[key] === 'string'}
				<input type="text" bind:value={array[view][Object.keys($example)[i]]} />
			{/if}
			{#if $example[key] === 'array'}
				<input
					type="text"
					value={array[view][Object.keys($example)[i]]?.join(',') || ''}
					on:change={(e) => x(e, view, example, i)}
				/>
			{/if}
		</div>
		{/if}
	{/each}
</section>

<style lang="scss">
	section {
		flex: 1.5 1;
		max-width: none;
		margin: 0 5vw;
	}
	.box {
		border: 1px solid slategray;
		border-radius: 5px;
		padding: 12px 15px;
		margin-bottom: 10px;

		input {
			border: none;
			background-color: #1231;
			padding: 0 5px;
		}

		.header {
			display: flex;
			align-items: center;
			column-gap: 5px;

			.dot {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				margin-right: 8px;
			}
			.dot.green {
				background-color: lightgreen;
			}
			.dot.red {
				background-color: salmon;
			}

			.search {
				border: 1px solid slategray;
				border-radius: 5px;
				display: flex;
				align-items: center;
				flex: 1 1;
				margin: 5px 0;
				padding: 3px 10px;
			}
			.search input {
				flex: 1 1;
				margin-left: 2px;
			}
		}

		.title {
			display: flex;
			align-items: center;
			column-gap: 15px;
			margin-bottom: 5px;

			input {
				padding: 5px 15px;
			}

			span {
				display: flex;
				align-items: center;
				column-gap: 5px;
			}
		}

		.desc {
			border: none;
			background-color: #1231;
			font-size: 1rem;
			text-transform: none;
			padding: 5px 15px;
			width: 100%;
		}

		.dates {
			display: flex;
			align-items: center;
			width: 100%;
			column-gap: 10px;
			margin-top: 5px;
		}
		.dates input {
			max-width: 50px;
		}
		.dates input:last-child {
			max-width: 200px;
		}
		.dates .spacer {
			flex: 1 1;
		}
	}
	label {
		display: block;
		margin-bottom: 5px;
	}
	div {
		margin-bottom: 10px;
	}
	input {
		font-size: 1rem;
		text-transform: none;
		width: 100%;
	}
</style>
