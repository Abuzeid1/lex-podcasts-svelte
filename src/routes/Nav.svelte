<script>
	import { page } from '$app/stores';

	const links = [
		{ href: '/', title: 'Recent' },
		{ href: '/all', title: 'All' },
		{ href: '/popular', title: 'Popular' }
	];
</script>

<ul
	class="mx-auto mb-14 flex w-max overflow-clip rounded-2xl bg-gray-200 text-xl max-sm:flex-col sm:rounded-full"
>
	{#each links as { title, href }}
		<li>
			<a
				class={'block px-10 py-4 relative'}
				class:bg-gray-300={$page.url.pathname == href}
				{href}
				data-sveltekit-noscroll
				data-sveltekit-preload-code
			>
				{title}
			</a>
		</li>
	{/each}
</ul>

<style>
	:is(ul > :nth-child(2)) a {
		@screen sm {
			&::after,
			&::before {
				--width: 2px;
				--height: 50%;
				content: '';
				position: absolute;
				inset-block: calc((100% - var(--height)) / 2);
				height: var(--height);
				width: var(--width);
				@apply bg-gray-400;
				z-index: 5;
			}
			&::before {
				inset-inline-start: calc(var(--width) / -2);
			}
			&::after {
				inset-inline-end: calc(var(--width) / -2);
			}
		}
	}
</style>
