<script>
	import Button from "./Button.svelte";

</script>
<div class="navbar">
	<div class="links">
		<!-- <a href="https://www.youtube.com/channel/UC51OKFGqiMGco1QjZQI6gOg">YTube</a>
		<a href="https://www.instagram.com/0taku.gaming/">IGram</a> -->
	</div>
	<div class="name">
		OTAKU GAMING
	</div>
	<div class="buttons">
		<!-- <Button>Join Community</Button> -->
	</div>
	
</div>

<style lang="scss">
	.navbar {
		background-color: white;
		padding: 1rem;
		position: sticky;
		top:0;
		font-family: 'Americane', sans-serif;
		
		font-weight: 900;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		color: #3a8ede;
		font-size: 1.25rem;
		a{
			text-decoration: none;
			color: #3a8ede;
		}
		.links {
			text-align: left;
			a {
				margin-right:1rem;
			}
		}
		.name {
			text-align: center;
			font-size:2rem;
		}
		.buttons {
			text-align: right;
		}
	}
</style>