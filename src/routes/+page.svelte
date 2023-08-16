<script lang="ts">

	import { publications, socialNetworks } from '$lib/data/publications';
	import { sampleEpisodes } from '$lib/data/sampleEpisodes';
	import img from '$lib/images/lex_fridman.jpg'




	let modalsRefs:HTMLDialogElement[] = []
</script>

<svelte:head>
<title>Lex Fridman</title>
<meta property="og:title" content="lex Fridman v2" />
<meta property="og:description" content="Revamp of Lex Fridman website optimizing performance & design" />
<meta property='og:video' content="https://lex-podcasts-svelte.vercel.app/testmp4video.mp4"/>
<meta property='og:video:secure_url' content="https://lex-podcasts-svelte.vercel.app/testmp4video.mp4"/>
<meta property='og:video:type' content="video/mp4" />
</svelte:head>
<ul class="grid list text-left max-w-5xl gap-x-4 w-11/12 text-lg max-sm:grid-cols-1">
	<li class="w-full">
		<img src={img} class="w-full" alt="lex fridman in front of a black board" />
	</li>
	<li>
		<strong>Lex Fridman</strong> <span class="text-gray-600">(pronounced: Freedman)</span>
	</li>
	<li>Research Scientist, MIT, 2015 - current (2023)</li>
	<li>Laboratory for Information and Decision Systems (LIDS)</li>
	<li>
		<strong>Research:</strong> Human-robot interaction and machine learning.
	</li>
	<li>
		<strong> Hiring: </strong>
		I'm <a target="_blank" href="https://lexfridman.com/hiring">hiring</a>
	</li>
	<li>
		<strong> Teaching: </strong>
		<a target="_blank" href="https://deeplearning.mit.edu/">deeplearning.mit.edu</a>
	</li>
	<li>
		<strong>Podcast: </strong>
		<a href="/podcast"> Lex Fridman Podcast</a>
	</li>
	<li>
		<strong>Sample conversations: </strong>
		<ul class="inline [&>*]:inline">
			{#each sampleEpisodes as { url, name }}
				<li><a href={url} target="_blank">{name}</a>, </li>
			{/each}
		</ul>
		etc.
	</li>

	<li class="my-8">
		Connect with me @lexfridman on <ul class="inline [&>*]:inline">
			{#each socialNetworks as { url, name }}
				<li ><a target="_blank" href={url}>{name}</a>, </li>
			{/each}
		</ul>
	</li>

	<li>
		Outside Research and teaching, I enjoy:
		<ul class="others text-base">
			<li>
				<a target="_blank" href="https://www.youtube.com/watch?v=Khf-N2f8T78">playing guitar & piano</a>
			</li>
			<li>
				<a target="_blank" href="https://www.youtube.com/watch?v=bCA54RIkpTo">practicing jiu jitsu & judo</a>
			</li>
		</ul>
	</li>
</ul>

<section>

	<h2 class="text-3xl mb-16">
		Research and Publications <span class="text-lg"
		>(<a target="_blank" href="https://scholar.google.com/citations?user=wZH_N7cAAAAJ&hl=en&oi=sra"
		>Google Scholar</a
		>)</span
		>
	</h2>
	
	<ul class="max-w-5xl grid gap-y-10 mx-auto text-left w-11/12" >
		{#each publications as  {img, title, paper,video, website, BibTex, scholar, summary}, i (title)}
		<li class="flex gap-4 max-sm:flex-wrap ">
			<img src={img.src} alt={img.alt} class="w-64 object-contain">
			<ul>
				<li>
					<h2 class="text-xl text-gray-900 font-bold">
						{title}
					</h2>
				</li>
				<li>
					<ul class="inline [&>*]:inline">
						{#if website}
						<li>
							<a target="_blank" href={website}>website</a> - 
						</li>
						{/if}

						{#if video}
						<li>
							<a target="_blank" href={video}>video</a> - 
						</li>
						{/if}

						<li >
							<a target="_blank" href={paper}>Paper</a>
						</li>
						<li >
							(cite: <ul class="inline [&>*]:inline"><li>
								<button class="text-blue-400 " on:click={() => {
									modalsRefs[i].showModal()
								}}>BibTex</button>,
							</li>
							<li><a target="_blank" href={scholar}>Scholar</a></li>
						</ul>)
					</li>
				</ul>
			</li>
			<li>
				<p class="text-gray-600 text-lg">
					
					<strong class="text-red-700 font-normal">Summary: </strong>
					{summary}
				</p>
			</li>
		</ul>
	</li>
	


	<dialog bind:this={modalsRefs[i]} class="bg-transparent backdrop:bg-black backdrop:bg-opacity-80 backdrop:backdrop-blur-2xl isolate" >
		<form method="dialog" class="fixed top-0 right-0 w-screen h-screen -z-10 ">
			<button class="w-full h-full cursor-default" tabindex="-1"></button>
			<button class="text-7xl text-gray-200 top-3 right-6 fixed">x</button>
		</form>
		<p bind:innerHTML={BibTex} contenteditable="false" class="max-w-5xl w-11/12 bg-white rounded-lg px-8 py-16 z-20 break-words ">
			google
		</p>
	</dialog>
	
	{/each}
</ul>

</section>


<style>
	ul.list {
		@media (min-width: 450px) {
			grid-template-columns: 10rem 1fr;
		
		& > :first-child {
			grid-row: 1/7;
			grid-column: 1/2;
		}
		& > :nth-child(n + 2) {
			grid-column: 2/3;
		}
		& > :nth-child(n + 8) {
			grid-column: 1/3;
		}
		}
	}

	a {
		@apply text-blue-400;
	}

	.others > li::before {
		content: '- ';
	}


</style>




