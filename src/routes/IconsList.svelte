<script lang="ts">
	export let icons: { href: string; iconSrc: string }[];
</script>

<ul class="flex flex-wrap justify-center gap-x-5 gap-y-10 max-w-lg mx-auto">
	{#each icons as { href, iconSrc }}
		<li>
			<a target="_blank" rel="noreferrer" {href}>
				<img
					src={iconSrc}
					alt={href}
					class:rounded-xl={href == 'https://www.youtube.com/lexclips'}
					class="h-14 w-auto"
				/>
			</a>
		</li>
	{/each}
</ul>
