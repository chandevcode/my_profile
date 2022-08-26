<!-- <div class="max-w-xs mx-auto bg-purple-600 text-white rounded-md">
    <div class="flex  items-center py-2  mx-5 justify-evenly text-center space-y-4 uppercase">
        <img class="h-6 w-6" src="https://img.icons8.com/ios-filled/100/000000/github.png" alt="photo"/>
        <a class="items-center text-center" href="https://github.com/chanlevelup">
        
        github
        </a>
    </div>
</div> -->
<script lang="ts">
	export let name = 'chandra';
	export let icon = '😎';
    export let links = "https://github.com/chanlevelup";
</script>

<div class="max-w-xs mx-auto">
	<div class="pt-6 text-center space-y-4">
		<a
			href={links}
			target="_blank"
			class="flex items-start rounded-lg border border-gray-400 uppercase bg-teal-500 text-white px-5 py-4 text-md leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
		>
			<p class="mr-3 h-6 w-6">{icon}</p>
			{name}
			<div class="ml-auto mt-0.5 pl-4">
				<svg
					class="h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</div>
		</a>
	</div>
</div>
