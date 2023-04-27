<script lang="ts">
	export let icons: { href: string; iconSrc: string }[];
</script>

<ul class="mx-auto flex max-w-lg flex-wrap  justify-center gap-x-5 gap-y-10 ">
	{#each icons as { href, iconSrc }}
		<li>
			<a target="_blank" rel="noreferrer" {href}>
				<img
					src={iconSrc}
					alt={href}
					class:rounded-full={iconSrc == '/logos/lexClips.jpg'}
					class="h-14 w-auto"
				/>
			</a>
		</li>
	{/each}
</ul>
