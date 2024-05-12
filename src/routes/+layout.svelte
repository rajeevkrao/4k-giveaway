<script>

	import Navbar from "$lib/components/Navbar.svelte";

</script>

<svelte:head>
	<title>4k Giveaway - OTAKU GAMING</title>
</svelte:head>
<Navbar/>
<slot></slot>

<style lang='scss'>
	:global(body){
        margin: 0;
  }
	@font-face {
		font-family: 'Americane'; 
		src: url(/fonts/HvDTrial_Americane-Black-BF64939f86040ec.otf);
		font-weight: 900;
		font-style: normal;
		font-display: swap;
  }
	@font-face {
		font-family: 'Americane'; 
		src: url(/fonts/HvDTrial_Americane-Bold-BF64939f85824ae.otf);
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'Americane'; 
		src: url(/fonts/HvDTrial_Americane-Regular-BF64939f86234b5.otf);
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
</style>