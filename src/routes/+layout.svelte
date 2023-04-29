<script>
	import '../app.css';
	// import components
	import PrimaryHeader from './PrimaryHeader.svelte';
	import Paragraph from './Paragraph.svelte';
	import SecondaryHeader from './SecondaryHeader.svelte';
	import IconsList from './IconsList.svelte';
	import Nav from './Nav.svelte';
	// import data

	import { socialIcons, supportIcons, links } from './data';
</script>

<main class="bg-gray-50 grid gap-y-36 text-center pb-72  justify-items-center">
	<header>
		<ul class="flex w-screen max-w-7xl rounded-b-3xl bg-gray-200  text-lg text-gray-700">
			{#each links as { href, title, target }, index}
				<li
					class:max-md:hidden={index > 0}
					class:bg-gray-300={index == 2}
					class:ml-auto={index == 3}
				>
					<a {href} class="block px-6 py-4" target={target ? target : '_self'}>
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

	<section>
		<PrimaryHeader>Lex Fridman Podcast</PrimaryHeader>
		<Paragraph>
			Conversations about the nature of intelligence, consciousness, love, and power.
		</Paragraph>
		<SecondaryHeader className="mb-6 mt-14">Follow Us</SecondaryHeader>
		<IconsList icons={socialIcons} />

		<SecondaryHeader className="mb-6 mt-14">Support Us</SecondaryHeader>
		<IconsList icons={supportIcons} />
	</section>

	<section class="w-9/12 max-w-7xl md:w-11/12">
		<h3 class="scroll-m-24 mb-5 font-serif text-3xl font-bold text-gray-900">Episodes</h3>
		<Nav />
		<slot />
	</section>

	<footer class="max-w-4xl">
		<PrimaryHeader>Thank You</PrimaryHeader>
		<Paragraph>
			I am forever grateful for the wisdom and love I&apos;ve encountered in the meandering journey
			of doing these conversations. I can honestly say that I can die a happy man having had the
			chance to pause and witness so many moments of magic, at once fleeting and unforgettable.
			Thank you.
		</Paragraph>
	</footer>
</main>
