<script lang="ts">
	export let size = 'default';

	const sizes: any = {
		default: '1.25rem',
		small: '.75rem',
		large: '1.5rem'
	};

	const redirect = (href: string) => {
		window.open(href, '_blank');
	};
</script>

{#if $$props.href}
	<button
		on:click={() => redirect($$props.href)}
		{...$$restProps}
		style="font-size: {sizes[size]}; {$$props.style}"
		class="button"><slot></slot></button
	>
{:else}
	<button on:click {...$$restProps} style="font-size: {sizes[size]}; {$$props.style}" class="button"
		><slot></slot></button
	>
{/if}

<style>
	.button {
		background-color: #3a8ede;
		color: white;
		font-family: 'Americane', sans-serif;
		font-weight: 900;
		padding: 0.3rem 0.8rem;
		border: none;
		border-radius: 1rem;
		cursor: pointer;
		margin: 0.5rem 0;
	}
</style>
