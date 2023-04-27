<script lang="ts">
	export let episodes: {
		id: number;
		title: string;
		imgUrl: string;
		characterName: string;
		youtubeUrl: string;
	}[];
</script>

<ul
	class="mx-auto flex w-9/12 max-w-7xl flex-wrap justify-center gap-x-4 gap-y-10 rounded-2xl px-10 py-20 shadow-2xl shadow-gray-400 md:w-11/12"
>
	{#each episodes as { id, title, imgUrl, characterName, youtubeUrl }}
		<li class="w-56">
			<a href={youtubeUrl} target="_blank" rel="noreferrer">
				<img
					src={imgUrl}
					width="210"
					height="118"
					alt={title}
					class="w-full rounded-t-lg"
					loading="lazy"
				/>
			</a>
			<a href={'/podcasts/' + encodeURIComponent(characterName)}>
				<span class="mt-4 block text-sm text-gray-500">
					{characterName}
				</span>
			</a>
			<span class="text-lg text-gray-700">{title}</span>
		</li>
	{/each}
</ul>
