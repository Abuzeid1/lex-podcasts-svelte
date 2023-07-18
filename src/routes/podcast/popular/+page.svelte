<script>
	import EpisodesList from '$lib/components/EpisodesList.svelte';
	import { popularEpisodes } from '$lib/data/episodes';
</script>

<EpisodesList episodes={popularEpisodes} />
