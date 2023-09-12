<script>
	// import components
	import PrimaryHeader from '$lib/components/PrimaryHeader.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import SecondaryHeader from '$lib/components/SecondaryHeader.svelte';
	import IconsList from '$lib/components/IconsList.svelte';
	import Nav from '$lib/components/Nav.svelte';
	// import data

	import { socialIcons, supportIcons } from '$lib/data/data';
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
	<slot />
</section>

<footer class="max-w-4xl">
	<PrimaryHeader>Thank You</PrimaryHeader>
	<Paragraph>
		I am forever grateful for the wisdom and love I&apos;ve encountered in the meandering journey of
		doing these conversations. I can honestly say that I can die a happy man having had the chance
		to pause and witness so many moments of magic, at once fleeting and unforgettable. Thank you.
	</Paragraph>
</footer>
