<script>
	// global css file import
	import '../app.css';

	import { links } from './data';
	import { page } from '$app/stores';
</script>

<main class="bg-gray-50 grid gap-y-36 text-center pb-72 justify-items-center">
	<header>
		<ul
			class="flex w-screen max-w-7xl rounded-b-3xl bg-gray-200 text-lg text-gray-700 overflow-hidden"
		>
			{#each links as { href, title, target }, index}
				<li class:max-md:hidden={index > 0} class:ml-auto={index == 3}>
					<a
						{href}
						class="block px-6 py-4"
						class:bg-gray-300={$page.url.pathname == href || ($page.url.pathname.includes(href) && href.length > 3)}
						target={target ? target : '_self'}
					>
						{title}
					</a>
				</li>
			{/each}
			<li class="my-auto ml-auto grid gap-y-1 md:hidden">
				{#each Array(3) as _}
					<div class="mr-6 h-2 w-8 rounded-md bg-gray-700" />
				{/each}
			</li>
		</ul>
	</header>
	<slot />
</main>



