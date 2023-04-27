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

<main class="bg-gray-50 grid gap-y-36 text-center pb-72">
	<header>
		<ul
			class="mx-auto flex max-w-7xl rounded-b-3xl bg-gray-200  text-lg text-gray-700  [&>:nth-child(3)]:bg-gray-300 [&>:nth-child(4)]:ml-auto"
		>
			{#each links as { href, title, target }, index}
				<li class={index > 0 ? 'max-sm:hidden' : ''}>
					<a {href} class="block px-6 py-4" target={target ? target : '_self'}>
						{title}
					</a>
				</li>
			{/each}
			<li class="my-auto ml-auto grid gap-y-1 py-1 sm:hidden">
				<div class="mr-6 h-2 w-8 rounded-md bg-gray-700" />
				<div class="mr-6 h-2 w-8 rounded-md bg-gray-700" />
				<div class="mr-6 h-2 w-8 rounded-md bg-gray-700" />
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

	<section>
		<h3 class="scroll-m-24 mb-5 font-serif text-3xl font-bold text-gray-900">Episodes</h3>
		<Nav />
		<slot />
	</section>

	<section class="mx-auto max-w-4xl ">
		<PrimaryHeader>Thank You</PrimaryHeader>
		<Paragraph>
			I am forever grateful for the wisdom and love I&apos;ve encountered in the meandering journey
			of doing these conversations. I can honestly say that I can die a happy man having had the
			chance to pause and witness so many moments of magic, at once fleeting and unforgettable.
			Thank you.
		</Paragraph>
	</section>
</main>
