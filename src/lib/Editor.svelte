<script lang="ts">
	import { example } from '$lib/Skiff/schema';
	export let array: any[];
	export let view: number;

	let specialProperties = ["id", "name", "organization", "description", "startDate", "endDate", "upDate", "display", "tags", "license", "old" ]

	function x(ev: Event, v: string, e: { [id: string]: string }, i: string) {
		array[view][Object.keys($example)[i]] = ev?.target?.value?.split(',');
	}
	function y(ev: Event, key: string) {
		array[view][key] = ev?.target?.value?.split(',');
	}
</script>

<section>
	<h2>Editing Item: <b>{view}</b></h2>
	<button>Set Update to Today</button>
	<hr>
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
		<div class="row date">
			<input type="text" bind:value={array[view]["startDate"]}>
			<span>-</span>
			<input type="text" bind:value={array[view]["endDate"]}>
			<span class="spacer"></span>
			<input type="text" bind:value={array[view]["upDate"]}>
		</div>
		<div class="row">
			<input type="text" value={array[view]["tags"]?.join(',') || ''} on:change={(e) => y(e, "tags")}>
			<span class="spacer"></span>
			<input type="text" value={array[view]["license"]?.join(',') || ''} on:change={(e) => y(e, "license")}>
		</div>
	</div>
	<div class="display-type">
		<div>
			<h3>Display Type</h3>
			<input type="text" bind:value={array[view]["display"]} readonly>
		</div>
		<div>
			<button class:active={array[view]["display"] === "col"} on:click={() => { array[view]["display"] = "col" }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
					<path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
				</svg>
			</button>
			<button class:active={array[view]["display"] === ""} on:click={() => { array[view]["display"] = "" }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
					<path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
				</svg>
			</button>
			<button class:active={array[view]["display"] === "row"} on:click={() => { array[view]["display"] = "row" }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
					<path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
				</svg>
			</button>
			<button class:active={array[view]["old"]} on:click={() => { array[view]["old"] = !array[view]["old"] }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
					<path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
				</svg>
			</button>
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
			{#if $example[key] === 'boolean'}
				<input type="checkbox" name="" id="" checked={true}>
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
			padding: 3px 15px;
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
				padding-right: 3px;
			}
			.search input {
				flex: 1 1;
				margin-left: 3px;
				padding: 0px 5px;
			}
		}

		.title {
			display: flex;
			align-items: center;
			column-gap: 15px;
			margin-bottom: 5px;

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

		.row {
			display: flex;
			align-items: center;
			width: 100%;
			column-gap: 10px;
			margin-top: 5px;
		}
		.row input {
			padding: 3px 12px;
		}
		.row .spacer {
			flex: 1 1;
		}

		.row.date input {
			max-width: 58px;
		}
		.row input:last-child {
			max-width: 170px;
		}
	}

	.display-type {
		border: 1px solid slategray;
		border-radius: 5px;
		display: flex;
		align-items: center;
		column-gap: 10px;
		padding: 20px;

		> div:first-child {
			display: flex;
			flex-direction: column;
			align-items: center;
			column-gap: 10px;
			flex: 1 1;
		}

		> div:last-child {
			display: flex;
			align-items: center;
			column-gap: 10px;
			flex: 1 1;
		}

		> div h3 {
			margin: 5px;
		}

		> div input {
			border: 1px solid slategray;
			border-radius: 15px;
			width: 135px;
		}

		button {
			background-color: #1231;
			border: none;
			border-radius: 5px;
			color: #123;
			cursor: pointer;
			display: grid;
			place-items: center;

			padding: 20px;
			font-size: 2rem;
			text-transform: none;
		}
		button:hover {
			background-color: slategray;
			color: white;
		}
		button.active {
			background-color: slategray;
			color: white;
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
