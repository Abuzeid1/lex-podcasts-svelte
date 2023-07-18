// home nav links
const links = [
	{ title: 'Lex Fridman', href: '/' },
	{ title: 'Deep Learning', href: 'https://deeplearning.mit.edu' },
	{ title: 'Podcast', href: '/podcast' },
	{ title: 'YouTube', href: 'https://www.youtube.com/@lexfridman/', target: '_blank' },
	{ title: 'Twitter', href: 'https://twitter.com/lexfridman/', target: '_blank' }
];

// social icons imports
import youtube from '$lib/images/logos/youtube.svg';
import lexClips from '$lib/images/logos/lexClips.jpg';
import applePodcasts from '$lib/images/logos/podcast.svg';
import spotify from '$lib/images/logos/spotify.svg';
import rssFeed from '$lib/images/logos/rss.svg';
import twitter from '$lib/images/logos/twitter.svg';
import linkedIn from '$lib/images/logos/linkedIn.svg';
import instagram from '$lib/images/logos/instagram.svg';
import facebook from '$lib/images/logos/facebook.svg';
import reddit from '$lib/images/logos/reddit.svg';
import mailingList from '$lib/images/logos/mailingList.svg';

const socialIcons = [
	{
		href: 'https://www.youtube.com/@lexfridman/videos',
		iconSrc: youtube
	},
	{
		href: 'https://www.youtube.com/lexclips',
		iconSrc: lexClips
	},
	{
		href: 'https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584',
		iconSrc: applePodcasts
	},
	{
		href: 'https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
		iconSrc: spotify
	},
	{
		href: 'https://lexfridman.com/feed/podcast/',
		iconSrc: rssFeed
	},
	{
		href: 'https://twitter.com/LexFridman',
		iconSrc: twitter
	},
	{
		href: 'https://www.linkedin.com/in/lexfridman/',
		iconSrc: linkedIn
	},
	{
		href: 'https://www.instagram.com/lexfridman/',
		iconSrc: instagram
	},
	{
		href: 'https://www.facebook.com/lexfridman',
		iconSrc: facebook
	},
	{
		href: 'https://www.reddit.com/r/lexfridman/',
		iconSrc: reddit
	},
	{
		href: 'http://eepurl.com/dy1Obr',
		iconSrc: mailingList
	}
];

// support icons import
import paypal from '$lib/images/logos/paypal.svg';
import patreon from '$lib/images/logos/Patreon.svg';

const supportIcons = [
	{
		href: 'https://paypal.me/lexfridman',
		iconSrc: paypal
	},
	{
		href: 'https://www.patreon.com/lexfridman',
		iconSrc: patreon
	}
];

export { socialIcons, supportIcons, links };
