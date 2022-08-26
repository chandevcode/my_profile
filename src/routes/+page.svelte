<script>
	import Image from '$lib/assets/myself.jpeg';
	import Card from '$lib/Card.svelte';
</script>

<main class="min-h-screen bg-gray-100">
	<div class="max-w-7xl mx-auto">
		<div>
			<figure class="p-6">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="h-40 w-40 rounded-full mx-auto" src={Image} alt="image profile" />
				<div class="pt-6 text-center space-y-4">
					<!-- svelte-ignore a11y-structure -->
					<figcaption class="font-medium">
						<div class="text-cyan-900 text-xl">Putu Chandra</div>
						<div class="text-gray-500 font-light">@chandevcode</div>
					</figcaption>
					<blockquote>
						<p class="text-lg font-medium">Front End | HTML5, CSS, JavaScript</p>
					</blockquote>
				</div>
			</figure>
		</div>
	</div>
    
    <Card name={"Instagram"} icon={"🤝"} links={"https://www.instagram.com/"} />
    <Card name={"Github"} icon={"🤪"} />
    <Card name={"LinkedIn"} links= {"https://www.linkedin.com/in/putu-chandra-3ba1941a9/"} />
</main>
