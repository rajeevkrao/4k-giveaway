<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { ActionData } from './$types';

	export let form:ActionData;

	let successModal = false;

	if (form?.success) successModal = true;
</script>

<main>
	<h3>Enter to win free <br />Valorant Battle Pass!</h3>
	<p>
		Once our channel hits 4,000 subscribers, we're giving away Valorant Battle Pass for this act!
		So, Subscribe now, get registered, join our community, and get a chance to win free battle pass!
	</p>
	{#if form?.errorMessage}
	<p class="error-message">{form?.errorMessage}</p>
	{/if}
	<form method="POST">
		<Input type="text" name="name" value={form?.values?.name ?? ''} required placeholder="Name" />
		<Input prefix="+91" name="phone" value={form?.values?.phone ?? ''} required type="tel" placeholder="Whatsapp Number" />
		<Input type="text" name="ign" value={form?.values?.ign ?? ''} placeholder="In Game Name(Optional)" />
		<Button style="width:100%; padding:.5rem; border-radius: 10rem;">Enter Giveaway</Button>
	</form>

	<Modal visible={successModal}
		>Thanks for registering yourself for the giveaway. Don't forget to subscribe to your channel.
		Also don't forget to join our community to get more updates about the giveaway.
		<div class="modal-links">
			<Button href="https://www.youtube.com/channel/UC51OKFGqiMGco1QjZQI6gOg">Youtube</Button>
			<Button href="https://valo.rkrao.me">Join Community</Button>
		</div>
	</Modal>
</main>

<style lang="scss">
	.error-message {
		color: red;
	}
	main {
		margin: 0 auto;
		padding-top: 2.5rem;
		padding-bottom: 5rem;
		font-family: 'Americane', sans-serif;
		text-align: center;
		max-width: 20rem;
		h3 {
			font-size: 1.5rem;
			font-weight: 900;
			color: #3a8ede;
		}
	}
	.modal-links {
		text-align: center;
		& > :global(*) {
			margin: 0 0.5rem;
			margin-top: 1rem;
		}
	}
</style>
