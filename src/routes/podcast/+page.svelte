<script>
	import EpisodesList from '$lib/components/EpisodesList.svelte';
import { episodes } from '$lib/data/episodes';

	const sortedEpisodes = episodes.slice(0, 60);
</script>

<EpisodesList episodes={sortedEpisodes} />
