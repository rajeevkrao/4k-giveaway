<script lang="ts">
	export let prefix = '';
	
</script>
{#if prefix}
<div class="input-wrapper">
  <span class="input-prefix">{prefix}</span>
  <input class="input-field" {...$$restProps} />
</div>
{:else}
	<input class="plain" {...$$restProps}/>
{/if}


<style lang="scss" scoped>
	.input-wrapper {
    display: flex;
		justify-content: stretch;
		width: 100%;
		box-sizing: border-box;
		background-color: #f0f0f0;
		border: 1px solid #3a8ede;
		border-radius: .2rem;
		padding: .7rem .6rem;
		font-family: "Americane", sans-serif;
		font-weight: 700;
		margin: .5rem 0;
		width: 100%;
  }
  .input-prefix {
		color: #454545;
  }
  .input-field {
		padding:0 .5rem;
		width:100%;
		background-color: #f0f0f0;
		border: none;
		border-radius: .2rem;
		font-family: "Americane", sans-serif;
		font-weight: 700;
		font-size: 1rem;
  }
	.input-field:focus {
		outline: none;
		border: none;
	}
	input.plain {
		box-sizing: border-box;
		background-color: #f0f0f0;
		border: 1px solid #3a8ede;
		border-radius: .2rem;
		padding: .7rem .6rem;
		font-size: 1rem;
		font-family: "Americane", sans-serif;
		font-weight: 700;
		margin: .5rem 0;
		width: 100%;
	}
	input::after {
		border: 1px solid #3a8ede;
	}
	input:focus {
		outline: none;
		border: 1px solid #3a8ede;
	}
</style>