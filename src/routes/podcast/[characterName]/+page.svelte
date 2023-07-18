<script>
	import { page } from '$app/stores';
	import EpisodesList from '$lib/components/EpisodesList.svelte';
	import SecondaryHeader from '$lib/components/SecondaryHeader.svelte';
	import { episodes, popularEpisodes } from '$lib/data/episodes';
</script>

<EpisodesList
	episodes={episodes.filter((el) => el.characterName.includes($page.params.characterName))}
/>

<SecondaryHeader className="mb-12  mt-24 font-serif font-bold">Popular Episodes</SecondaryHeader>
<EpisodesList episodes={popularEpisodes} />
