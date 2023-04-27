<script>
	import EpisodesList from './EpisodesList.svelte';
	import { episodes } from './data';

	const sortedEpisodes = episodes.slice(0, 60);
</script>

<EpisodesList episodes={sortedEpisodes} />
