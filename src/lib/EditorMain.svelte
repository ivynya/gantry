
<script lang="ts">
  export let item: { [key: string]: any };

	function y(ev: Event, key: string) {
		item[key] = ev?.target?.value?.split(',');
	}
</script>

<div class="box">
  <div class="header">
    <span><span class="dot green" /><span class="dot red" /></span>
    <span class="search">
      https://work.ivy.direct/project/
      <input type="text" bind:value={item["id"]}>
    </span>
  </div>
  <div class="title">
    <input type="text" bind:value={item["name"]}>
    <span>
      @<input type="text" bind:value={item["organization"]}>
    </span>
  </div>
  <textarea class="desc" bind:value={item["description"]} />
  <br><br>
  <div class="row date">
    <input type="text" bind:value={item["startDate"]}>
    <span>-</span>
    <input type="text" bind:value={item["endDate"]}>
    <span class="spacer"></span>
    Published/updated:
    <input type="text" bind:value={item["upDate"]}>
  </div>
  <div class="row">
    <input type="text" value={item["tags"]?.join(',') || ''} on:change={(e) => y(e, "tags")}>
    <span class="spacer"></span>
    <input type="text" value={item["license"]?.join(',') || ''} on:change={(e) => y(e, "license")} placeholder="no license">
  </div>
</div>

<style lang="scss">
  div {
    margin-bottom: 10px;
  }

  input {
    font-size: 1rem;
    text-transform: none;
    width: 100%;
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
</style>