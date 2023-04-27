<script>
	import { page } from '$app/stores';
	import EpisodesList from '../../EpisodesList.svelte';
	import SecondaryHeader from '../../SecondaryHeader.svelte';
	import { episodes, popularEpisodes } from '../../data';
	console.log($page.params.characterName);
</script>

<EpisodesList
	episodes={episodes.filter((el) => el.characterName.includes($page.params.characterName))}
/>

<SecondaryHeader className="mb-12  mt-24 font-serif font-bold">Popular Episodes</SecondaryHeader>
<EpisodesList episodes={popularEpisodes} />
