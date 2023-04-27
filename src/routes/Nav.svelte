<script>
	import { page } from '$app/stores';
	const links = [
		{ href: '/', title: 'Show Recent' },
		{ href: '/all', title: 'Show All' },
		{ href: '/popular', title: 'Show Popular' }
	];
</script>

<ul
	class="mx-auto mb-14 flex w-max justify-center overflow-hidden rounded-2xl bg-gray-200 text-xl max-sm:flex-col sm:rounded-full "
>
	{#each links as { title, href }}
		<li>
			<a class={'block px-8 py-4 '} class:bg-gray-300={$page.url.pathname == href} {href}>
				{title}
			</a>
		</li>
	{/each}
</ul>
