<script lang="ts">
  export let item: { [key: string]: any };
</script>

<div class="plugins">
  <div>
    <h3>Plugins</h3>
  </div>
  <div>
    {#if item["plugins"]}
    <input type="text" bind:value={item["plugins"]["github"]} placeholder="github">
    <input type="text" bind:value={item["plugins"]["link"]} placeholder="link">
    <input type="text" bind:value={item["plugins"]["embed"]} placeholder="embed">
    <input type="text" bind:value={item["plugins"]["merch"]} placeholder="merch">
    <input type="text" bind:value={item["plugins"]["download"]} placeholder="download">
    {:else}
    <button on:click={() => { item["plugins"] = {}}}>Create Plugins</button>
    {/if}
  </div>
</div>

<style lang="scss">
	div {
		margin-bottom: 10px;
	}

	input {
    border: none;
    background-color: #1231;
    padding: 3px 15px;
		font-size: 1rem;
		text-transform: none;
		width: 100%;
	}

  .plugins {
    border: 1px solid slategray;
    border-radius: 5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    column-gap: 10px;
    padding: 20px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 5px;
      flex: 1 1;
    }

    > div h3 {
      margin: 5px;
    }
  }
</style>