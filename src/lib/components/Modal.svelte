<script>
	import Button from "./Button.svelte";

	export let visible = false;

	$: modalDisplay = visible ? "flex" : "none";

	const closeModal = () => {
		visible = false;
	};
</script>
<div class="modal-background" style="display:{modalDisplay}">
	<div class="modal">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="close-button"><a on:click={closeModal}>×</a></div>
		<div class="modal-body"><slot></slot></div>
		<div class="modal-footer"><Button on:click={closeModal} size="small">OK</Button></div>
	</div>
</div>

<style lang="scss">
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal {
		font-family: "Americane", sans-serif;
		font-weight: 700;
		padding: 0 .5rem;
		text-align: left;
		background-color: white;
		width: 50rem;
		margin: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
		.close-button {
			font-size:1.5rem;
			position: relative;
			padding-right: 1rem;
			text-align: right;
			color: #A8A8A8;
			cursor: pointer;
		}
		& > * {
			padding: .5rem;
		}
		&-footer {
			& > :global(*) {
				margin-left: .5rem;
			}
			text-align: right;
		}
	}
</style>
