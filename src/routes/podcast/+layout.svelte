<script>
	import { fly } from 'svelte/transition';
	// import components
	import PrimaryHeader from './PrimaryHeader.svelte';
	import Paragraph from './Paragraph.svelte';
	import SecondaryHeader from './SecondaryHeader.svelte';
	import IconsList from './IconsList.svelte';
	import Nav from './Nav.svelte';
	// import data

	import { socialIcons, supportIcons, links } from '../data';
	import { page } from '$app/stores';
	const duration = 500;
	const x = 300;

</script>


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
	{#key $page.url}
		<div in:fly={{ duration, x: -x, delay: duration }} out:fly={{ duration, x }}>
			<slot />
		</div>
	{/key}
</section>

<footer class="max-w-4xl">
	<PrimaryHeader>Thank You</PrimaryHeader>
	<Paragraph>
		I am forever grateful for the wisdom and love I&apos;ve encountered in the meandering journey of
		doing these conversations. I can honestly say that I can die a happy man having had the chance
		to pause and witness so many moments of magic, at once fleeting and unforgettable. Thank you.
	</Paragraph>
</footer>
