const links = [
	{ title: 'Lex Fridman', href: '/podcasts' },
	{ title: 'Deep Learning', href: '/podcasts' },
	{ title: 'Podcast', href: '/podcasts' },
	{ title: 'YouTube', href: 'https://www.youtube.com/@lexfridman/', target: '_blank' },
	{ title: 'Twitter', href: 'https://twitter.com/lexfridman/', target: '_blank' }
];
// social icons imports

import youtube from '../lib/logos/youtube.svg';
import lexClips from '../lib/logos/lexClips.jpg';
import applePodcasts from '../lib/logos/podcast.svg';
import spotify from '../lib/logos/spotify.svg';
import rssFeed from '../lib/logos/rss.svg';
import twitter from '../lib/logos/twitter.svg';
import linkedIn from '../lib/logos/linkedIn.svg';
import instagram from '../lib/logos/instagram.svg';
import facebook from '../lib/logos/facebook.svg';
import reddit from '../lib/logos/reddit.svg';
import mailingList from '../lib/logos/mailingList.svg';

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
import paypal from '../lib/logos/paypal.svg';
import patreon from '../lib/logos/patreon.svg';

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

const episodes = [
	{
		id: 1,
		title: 'FBI Hostage Negotiator',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_voss.png',
		characterName: 'Chris Voss',
		youtubeUrl: 'https://www.youtube.com/watch?v=8EguLJgkc54'
	},
	{
		id: 2,
		title: 'B-Team Jiu Jitsu',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/b_team.png',
		characterName: 'Craig Jones, Nicky Rod, Nicky Ryan',
		youtubeUrl: 'https://www.youtube.com/watch?v=hLZ6PACCBy8'
	},
	{
		id: 3,
		title: 'IBM CEO on Leadership, Power, and Adversity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ginni_rometty.png',
		characterName: 'Ginni Rometty',
		youtubeUrl: 'https://www.youtube.com/watch?v=XiCxj-bXu5M'
	},
	{
		id: 4,
		title: 'Scientology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/aaron_smith_levin.png',
		characterName: 'Aaron Smith-Levin',
		youtubeUrl: 'https://www.youtube.com/watch?v=J1lN9zkK_k0'
	},
	{
		id: 5,
		title: 'Tribalism, Marxism, Liberalism, Social Justice, and Politics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tim_urban_2.png',
		characterName: 'Tim Urban',
		youtubeUrl: 'https://www.youtube.com/watch?v=GkZz2I6sK08'
	},
	{
		id: 6,
		title: 'Black Holes, Quantum Gravity, and Theoretical Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_strominger.png',
		characterName: 'Andrew Strominger',
		youtubeUrl: 'https://www.youtube.com/watch?v=y3cw_9ELpQw'
	},
	{
		id: 7,
		title: 'Sex Work, OnlyFans, Porn, Dating, and Human Sexuality',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/aella.png',
		characterName: 'Aella',
		youtubeUrl: 'https://www.youtube.com/watch?v=cFSrxSBrgSc'
	},
	{
		id: 8,
		title: 'Narcissism, Sociopathy, Envy, and the Nature of Good and Evil',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/paul_conti.png',
		characterName: 'Paul Conti',
		youtubeUrl: 'https://www.youtube.com/watch?v=jRBksDVs4tg'
	},
	{
		id: 9,
		title: 'SpaceX, Rocket Engines, and Future of Space Travel',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tim_dodd.png',
		characterName: 'Tim Dodd',
		youtubeUrl: 'https://www.youtube.com/watch?v=5eK5A_43pkE'
	},
	{
		id: 10,
		title: 'Alien Civilizations and Habitable Worlds',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_kipping.png',
		characterName: 'David Kipping',
		youtubeUrl: 'https://www.youtube.com/watch?v=uZN5xjoS6TU'
	},
	{
		id: 11,
		title: 'American Civil War',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeremi_suri_2.png',
		characterName: 'Jeremi Suri',
		youtubeUrl: 'https://www.youtube.com/watch?v=GvX-heRWFfA'
	},
	{
		id: 12,
		title: 'Nuclear Fusion and the Future of Energy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dennis_whyte.png',
		characterName: 'Dennis Whyte',
		youtubeUrl: 'https://www.youtube.com/watch?v=aJoRMFWn2Jk'
	},
	{
		id: 13,
		title: 'Islam',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/omar_suleiman.png',
		characterName: 'Omar Suleiman',
		youtubeUrl: 'https://www.youtube.com/watch?v=BOKCNUqbpH0'
	},
	{
		id: 14,
		title: 'Future of YouTube, Twitter, TikTok, and Instagram',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/mrbeast.png',
		characterName: 'MrBeast',
		youtubeUrl: 'https://www.youtube.com/watch?v=Z3_PwvvfxIU'
	},
	{
		id: 15,
		title: 'Origin of Life, Ancient DNA, Panspermia, and Aliens',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/betul_kacar.png',
		characterName: 'Betül Kaçar',
		youtubeUrl: 'https://www.youtube.com/watch?v=NXU_M4030nE'
	},
	{
		id: 16,
		title: 'The Case for Socialism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/bhaskar_sunkara.png',
		characterName: 'Bhaskar Sunkara',
		youtubeUrl: 'https://www.youtube.com/watch?v=pNlfHgHJweQ'
	},
	{
		id: 17,
		title: 'Search for Alien Life',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nathalie_cabrol.png',
		characterName: 'Nathalie Cabrol',
		youtubeUrl: 'https://www.youtube.com/watch?v=yyBosLx7bbM'
	},
	{
		id: 18,
		title: 'Christmas Special',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice_6.png',
		characterName: 'Michael Malice',
		youtubeUrl: 'https://www.youtube.com/watch?v=NUkXluf3OYA'
	},
	{
		id: 19,
		title: 'Mexican Drug Cartels',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ed_calderon.png',
		characterName: 'Ed Calderon',
		youtubeUrl: 'https://www.youtube.com/watch?v=9PIOoJMMptA'
	},
	{
		id: 20,
		title: 'SBF, FTX, Fraud, Scams, and Fake Gurus',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/coffeezilla.png',
		characterName: 'Coffeezilla',
		youtubeUrl: 'https://www.youtube.com/watch?v=hi9Rf0oLdHk'
	},
	{
		id: 21,
		title: 'AI vs Humans in Poker and Games of Strategic Negotiation',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/noam_brown.png',
		characterName: 'Noam Brown',
		youtubeUrl: 'https://www.youtube.com/watch?v=2oHH4aClJQs'
	},
	{
		id: 22,
		title: 'Jiu Jitsu',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/roger_gracie.png',
		characterName: 'Roger Gracie',
		youtubeUrl: 'https://www.youtube.com/watch?v=FhfmGM6hswI'
	},
	{
		id: 23,
		title: 'Skyrim, Elder Scrolls 6, Fallout, and Starfield',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/todd_howard.png',
		characterName: 'Todd Howard',
		youtubeUrl: 'https://www.youtube.com/watch?v=H9AAnV59ddE'
	},
	{
		id: 24,
		title: 'Python and the Future of Programming',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/guido_van_rossum_2.png',
		characterName: 'Guido van Rossum',
		youtubeUrl: 'https://www.youtube.com/watch?v=-DVyjdw4t9I'
	},
	{
		id: 25,
		title: 'FBI Agent Who Took Down Silk Road',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_tarbell.png',
		characterName: 'Chris Tarbell',
		youtubeUrl: 'https://www.youtube.com/watch?v=4KiO8GRgwDk'
	},
	{
		id: 26,
		title: 'Bjørn Lomborg and Andrew Revkin',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/climate_change_debate.png',
		characterName: 'Climate Change Debate',
		youtubeUrl: 'https://www.youtube.com/watch?v=5Gk9gIpGvSE'
	},
	{
		id: 27,
		title: 'Money, Success, Startups, Energy, and War',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chamath_palihapitiya.png',
		characterName: 'Chamath Palihapitiya',
		youtubeUrl: 'https://www.youtube.com/watch?v=kFQUDCgMjRc'
	},
	{
		id: 28,
		title: 'Politics, Free Speech, Controversy, Sex, and War',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/destiny.png',
		characterName: 'Destiny',
		youtubeUrl: 'https://www.youtube.com/watch?v=bqeuFiAUU4o'
	},
	{
		id: 29,
		title: 'Politics, Kanye, Trump, Biden, Hitler &amp; Extremism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ben_shapiro.png',
		characterName: 'Ben Shapiro',
		youtubeUrl: 'https://www.youtube.com/watch?v=AF8DOS4C2KM'
	},
	{
		id: 30,
		title: 'Putin and Trump',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/fiona_hill.png',
		characterName: 'Fiona Hill',
		youtubeUrl: 'https://www.youtube.com/watch?v=vNhSCF9i8Qs'
	},
	{
		id: 31,
		title: 'Iran Protests, Mahsa Amini, and Middle East History',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/abbas_amanat.png',
		characterName: 'Abbas Amanat',
		youtubeUrl: 'https://www.youtube.com/watch?v=OYsYgzzsdT0'
	},
	{
		id: 32,
		title: 'Tesla AI, Self-Driving, Optimus, Aliens, and AGI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrej_karpathy.png',
		characterName: 'Andrej Karpathy',
		youtubeUrl: 'https://www.youtube.com/watch?v=cdiD-9MMpb0'
	},
	{
		id: 33,
		title: "Kanye 'Ye' West Interview",
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ye_aka_kanye_west.png',
		characterName: "Kanye 'Ye' West",
		youtubeUrl: 'https://www.youtube.com/watch?v=4AWLcxTGZPA'
	},
	{
		id: 34,
		title: 'How to Fix Government, Twitter, Science &amp; the FDA',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/balaji_srinivasan.png',
		characterName: 'Balaji Srinivasan',
		youtubeUrl: 'https://www.youtube.com/watch?v=VeH7qKZr0WI'
	},
	{
		id: 35,
		title: 'Chess and the Psychology of Greatness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/hikaru_nakamura.png',
		characterName: 'Hikaru Nakamura',
		youtubeUrl: 'https://www.youtube.com/watch?v=oJNvxYEcVAY'
	},
	{
		id: 36,
		title: 'Social Robots, Ethics, and the Future of MIT',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kate_darling_2.png',
		characterName: 'Kate Darling',
		youtubeUrl: 'https://www.youtube.com/watch?v=ZFntEFXKDHM'
	},
	{
		id: 37,
		title: 'Submission Grappling, ADCC, Animal Combat, and Knives',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_danaher_3.png',
		characterName: 'John Danaher',
		youtubeUrl: 'https://www.youtube.com/watch?v=iZRbD7q1n-U'
	},
	{
		id: 38,
		title: 'Chess',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/gothamchess.png',
		characterName: 'GothamChess',
		youtubeUrl: 'https://www.youtube.com/watch?v=iSMpTmibeDw'
	},
	{
		id: 39,
		title: 'Free Will, Consciousness, and the Nature of Reality',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/annaka_harris.png',
		characterName: 'Annaka Harris',
		youtubeUrl: 'https://www.youtube.com/watch?v=q6zEzZCtkXw'
	},
	{
		id: 40,
		title: 'Biology, Life, Aliens, Evolution, and Xenobots',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_levin.png',
		characterName: 'Michael Levin',
		youtubeUrl: 'https://www.youtube.com/watch?v=p3lsYlod5OU'
	},
	{
		id: 41,
		title: 'Poker',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/daniel_negreanu.png',
		characterName: 'Daniel Negreanu',
		youtubeUrl: 'https://www.youtube.com/watch?v=rKnoNfajUgM'
	},
	{
		id: 42,
		title: 'Comedy, MADtv, AI, Madness &amp; Pro Wrestling',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/will_sasso.png',
		characterName: 'Will Sasso',
		youtubeUrl: 'https://www.youtube.com/watch?v=xewD1apJNhw'
	},
	{
		id: 43,
		title: 'Emotion AI, Social Robots, and Self-Driving Cars',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rana_el_kaliouby.png',
		characterName: 'Rana el Kaliouby',
		youtubeUrl: 'https://www.youtube.com/watch?v=36_rM7wpN5A'
	},
	{
		id: 44,
		title: 'Singularity, Superintelligence, and Immortality',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ray_kurzweil.png',
		characterName: 'Ray Kurzweil',
		youtubeUrl: 'https://www.youtube.com/watch?v=ykY69lSpDdo'
	},
	{
		id: 45,
		title: 'World War I, Ideology, Propaganda, and Politics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/christopher_capozzola.png',
		characterName: 'Christopher Capozzola',
		youtubeUrl: 'https://www.youtube.com/watch?v=SK4kMPmgKW0'
	},
	{
		id: 46,
		title: 'Chess, Streaming, and Fame',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/botez_sisters.png',
		characterName: 'Botez Sisters',
		youtubeUrl: 'https://www.youtube.com/watch?v=srUlKNLZTas'
	},
	{
		id: 47,
		title: 'Origin of Life, Evolution, Aliens, and Biology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nick_lane.png',
		characterName: 'Nick Lane',
		youtubeUrl: 'https://www.youtube.com/watch?v=tOtdJcco3YM'
	},
	{
		id: 48,
		title: 'Meaning Crisis and the Search for Wisdom',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_vervaeke.png',
		characterName: 'John Vervaeke',
		youtubeUrl: 'https://www.youtube.com/watch?v=yImlXr5Tr8g'
	},
	{
		id: 49,
		title: 'Putin, Ukraine, China, and Nuclear War',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/noam_chomsky_2.png',
		characterName: 'Noam Chomsky',
		youtubeUrl: 'https://www.youtube.com/watch?v=7uHGlfeCBbE'
	},
	{
		id: 50,
		title: 'Greatest Chess Player of All Time',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/magnus_carlsen.png',
		characterName: 'Magnus Carlsen',
		youtubeUrl: 'https://www.youtube.com/watch?v=0ZO28NtkwwQ'
	},
	{
		id: 51,
		title: 'Poker, Game Theory, Aliens &amp; Existential Risk',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/liv_boeree.png',
		characterName: 'Liv Boeree',
		youtubeUrl: 'https://www.youtube.com/watch?v=eF-E40pxxbI'
	},
	{
		id: 52,
		title: 'Life, Death, Power, Fame, and Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jordan_peterson.png',
		characterName: 'Jordan Peterson',
		youtubeUrl: 'https://www.youtube.com/watch?v=sY8aFSY2zv4'
	},
	{
		id: 53,
		title: 'Comedy, Robots, Suffering, Love &amp; Burning Man',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/duncan_trussell.png',
		characterName: 'Duncan Trussell',
		youtubeUrl: 'https://www.youtube.com/watch?v=jdIyNMkusLE'
	},
	{
		id: 54,
		title: 'Africa',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/magatte_wade.png',
		characterName: 'Magatte Wade',
		youtubeUrl: 'https://www.youtube.com/watch?v=Q6tDV3BhrcM'
	},
	{
		id: 55,
		title: 'CIA Spy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_bustamante.png',
		characterName: 'Andrew Bustamante',
		youtubeUrl: 'https://www.youtube.com/watch?v=T3FC7qIAGZk'
	},
	{
		id: 56,
		title: 'Doom, Quake, VR, AGI, and Programming',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_carmack.png',
		characterName: 'John Carmack',
		youtubeUrl: 'https://www.youtube.com/watch?v=I845O57ZSy4'
	},
	{
		id: 57,
		title: 'UFOs and Fighter Jets',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ryan_graves.png',
		characterName: 'Ryan Graves',
		youtubeUrl: 'https://www.youtube.com/watch?v=qLDp-aYnR1Y'
	},
	{
		id: 58,
		title: 'Coinbase CEO',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brian_armstrong.png',
		characterName: 'Brian Armstrong',
		youtubeUrl: 'https://www.youtube.com/watch?v=VBPTFlpv31k'
	},
	{
		id: 59,
		title: 'Deep Learning and AGI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/oriol_vinyals_2.png',
		characterName: 'Oriol Vinyals',
		youtubeUrl: 'https://www.youtube.com/watch?v=aGBLRlLe7X8'
	},
	{
		id: 60,
		title: 'Black Holes, Alien Life, and the Big Bang',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/martin_rees.png',
		characterName: 'Martin Rees',
		youtubeUrl: 'https://www.youtube.com/watch?v=50r-5ULcWgY'
	},
	{
		id: 61,
		title: 'Christianity and the Catholic Church',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robert_barron.png',
		characterName: 'Robert Barron',
		youtubeUrl: 'https://www.youtube.com/watch?v=WgytXF0SPh0'
	},
	{
		id: 62,
		title: 'Marxism, Capitalism, and Economics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/steve_keen.png',
		characterName: 'Steve Keen',
		youtubeUrl: 'https://www.youtube.com/watch?v=1XGiTDWfdpM'
	},
	{
		id: 63,
		title: 'IQ Tests, Human Intelligence, and Group Differences',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_haier.png',
		characterName: 'Richard Haier',
		youtubeUrl: 'https://www.youtube.com/watch?v=hppbxV9C63g'
	},
	{
		id: 64,
		title: 'KGB Spy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jack_barsky.png',
		characterName: 'Jack Barsky',
		youtubeUrl: 'https://www.youtube.com/watch?v=dSVLjAdo8UA'
	},
	{
		id: 65,
		title: 'Comedy, Controversy, Aliens, and Freedom',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/joe_rogan_2.png',
		characterName: 'Joe Rogan',
		youtubeUrl: 'https://www.youtube.com/watch?v=gk4tEO4jDUM'
	},
	{
		id: 66,
		title: 'DeepMind',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/demis_hassabis.png',
		characterName: 'Demis Hassabis',
		youtubeUrl: 'https://www.youtube.com/watch?v=Gfr50f6ZBvo'
	},
	{
		id: 67,
		title: 'The Power of Introverts and Loneliness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/susan_cain.png',
		characterName: 'Susan Cain',
		youtubeUrl: 'https://www.youtube.com/watch?v=j4PEu4sVD40'
	},
	{
		id: 68,
		title: 'Anatomy of the Human Body',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jonathan_reisman.png',
		characterName: 'Jonathan Reisman',
		youtubeUrl: 'https://www.youtube.com/watch?v=XOPO9J7DIXw'
	},
	{
		id: 69,
		title: 'Racism, Marxism, and the War on the West',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/douglas_murray.png',
		characterName: 'Douglas Murray',
		youtubeUrl: 'https://www.youtube.com/watch?v=EG7I6Bt_NZY'
	},
	{
		id: 70,
		title: 'Marxism and Communism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_wolff.png',
		characterName: 'Richard Wolff',
		youtubeUrl: 'https://www.youtube.com/watch?v=o0Bi-q89j5Y'
	},
	{
		id: 71,
		title: 'iPhone, iPod, and Nest',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tony_fadell.png',
		characterName: 'Tony Fadell',
		youtubeUrl: 'https://www.youtube.com/watch?v=4oDZyOf6CW4'
	},
	{
		id: 72,
		title: 'Reality is an Illusion',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/donald_hoffman.png',
		characterName: 'Donald Hoffman',
		youtubeUrl: 'https://www.youtube.com/watch?v=reYdQYZ9Rj4'
	},
	{
		id: 73,
		title: 'Alien Civilizations, UFOs, and the Future of Humanity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robin_hanson.png',
		characterName: 'Robin Hanson',
		youtubeUrl: 'https://www.youtube.com/watch?v=KBZP4rLk6bk'
	},
	{
		id: 74,
		title: 'The Case Against Social Media',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jonathan_haidt.png',
		characterName: 'Jonathan Haidt',
		youtubeUrl: 'https://www.youtube.com/watch?v=f0un-l1L8Zw'
	},
	{
		id: 75,
		title: 'Imagine Dragons',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dan_reynolds.png',
		characterName: 'Dan Reynolds',
		youtubeUrl: 'https://www.youtube.com/watch?v=jvGZkf87aCs'
	},
	{
		id: 76,
		title: 'Putin, Zelenskyy, and War in Ukraine',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_kotkin_2.png',
		characterName: 'Stephen Kotkin',
		youtubeUrl: 'https://www.youtube.com/watch?v=2a7CDKqWcZ0'
	},
	{
		id: 77,
		title: 'Bad Vegan',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sarma_melngailis.png',
		characterName: 'Sarma Melngailis',
		youtubeUrl: 'https://www.youtube.com/watch?v=iZjby1LkTWQ'
	},
	{
		id: 78,
		title: 'Comedy, Skyrim, Sex Robots, Love, Fame, and Power',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/bobby_lee.png',
		characterName: 'Bobby Lee',
		youtubeUrl: 'https://www.youtube.com/watch?v=tOTenjh_8hw'
	},
	{
		id: 79,
		title: 'Vladimir Putin and War in Ukraine',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/oliver_stone.png',
		characterName: 'Oliver Stone',
		youtubeUrl: 'https://www.youtube.com/watch?v=ygAqYC8JOQI'
	},
	{
		id: 80,
		title: 'Race, Racism, Identity Politics, and Cancel Culture',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/glenn_loury.png',
		characterName: 'Glenn Loury',
		youtubeUrl: 'https://www.youtube.com/watch?v=YbJZnShMQAo'
	},
	{
		id: 81,
		title: 'Bitcoin, Anarchy, and Austrian Economics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/saifedean_ammous.png',
		characterName: 'Saifedean Ammous',
		youtubeUrl: 'https://www.youtube.com/watch?v=gp4U5aH_T6A'
	},
	{
		id: 82,
		title: 'Space Travel, Colonization &amp; Long-Term Survival',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_mason.png',
		characterName: 'Chris Mason',
		youtubeUrl: 'https://www.youtube.com/watch?v=1C2tPFCGL1U'
	},
	{
		id: 83,
		title: 'Sex, Dating, Relationships, and Sex Differences',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_buss.png',
		characterName: 'David Buss',
		youtubeUrl: 'https://www.youtube.com/watch?v=sndW9hzX-wA'
	},
	{
		id: 84,
		title: 'Music, AI, and the Future of Humanity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/grimes.png',
		characterName: 'Grimes',
		youtubeUrl: 'https://www.youtube.com/watch?v=KOwm7GUjcg8'
	},
	{
		id: 85,
		title: 'Qualcomm CEO',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/cristiano_amon.png',
		characterName: 'Cristiano Amon',
		youtubeUrl: 'https://www.youtube.com/watch?v=KMgPxVnKLSk'
	},
	{
		id: 86,
		title: 'Alien Debate',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/alien_debate.png',
		characterName: 'Sara Walker and Lee Cronin',
		youtubeUrl: 'https://www.youtube.com/watch?v=SFxIazwNP_0'
	},
	{
		id: 87,
		title: 'Hunger, War, and Human Suffering',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/skye_fitzgerald.png',
		characterName: 'Skye Fitzgerald',
		youtubeUrl: 'https://www.youtube.com/watch?v=dHTgffkpeYo'
	},
	{
		id: 88,
		title: 'Focus, Stress, Relationships, and Friendship',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_huberman_3.png',
		characterName: 'Andrew Huberman',
		youtubeUrl: 'https://www.youtube.com/watch?v=lvh3g7eszVQ'
	},
	{
		id: 89,
		title: 'Bitcoin, Inflation, and the Future of Money',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_saylor.png',
		characterName: 'Michael Saylor',
		youtubeUrl: 'https://www.youtube.com/watch?v=mC43pZkpTec'
	},
	{
		id: 90,
		title: 'Music',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rick_rubin.png',
		characterName: 'Rick Rubin',
		youtubeUrl: 'https://www.youtube.com/watch?v=H_szemxPcTI'
	},
	{
		id: 91,
		title: 'Depression, Schizophrenia, and Psychiatry',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/karl_deisseroth.png',
		characterName: 'Karl Deisseroth',
		youtubeUrl: 'https://www.youtube.com/watch?v=OaeYUm06in0'
	},
	{
		id: 92,
		title: 'War and Violence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_blattman.png',
		characterName: 'Chris Blattman',
		youtubeUrl: 'https://www.youtube.com/watch?v=DbXjoXnIxQo'
	},
	{
		id: 93,
		title: 'Cybercrime',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brett_johnson.png',
		characterName: 'Brett Johnson',
		youtubeUrl: 'https://www.youtube.com/watch?v=cC1LFC0KFSw'
	},
	{
		id: 94,
		title: 'Space Colonization and Exploration',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ariel_ekblaw.png',
		characterName: 'Ariel Ekblaw',
		youtubeUrl: 'https://www.youtube.com/watch?v=KW8Vjs84Fxg'
	},
	{
		id: 95,
		title: 'Judaism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_wolpe.png',
		characterName: 'David Wolpe',
		youtubeUrl: 'https://www.youtube.com/watch?v=urdNsyZBqhQ'
	},
	{
		id: 96,
		title: 'Origin of Life, Aliens, and Complexity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/lee_cronin.png',
		characterName: 'Lee Cronin',
		youtubeUrl: 'https://www.youtube.com/watch?v=ZecQ64l-gKM'
	},
	{
		id: 97,
		title: 'Nazi Science and Ideology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robert_proctor.png',
		characterName: 'Robert Proctor',
		youtubeUrl: 'https://www.youtube.com/watch?v=Y3VBCWIDEzk'
	},
	{
		id: 98,
		title: 'Meta, Facebook, Instagram, and the Metaverse',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/mark_zuckerberg.png',
		characterName: 'Mark Zuckerberg',
		youtubeUrl: 'https://www.youtube.com/watch?v=5zOHSysMmH0'
	},
	{
		id: 99,
		title: 'Cybersecurity and the Weapons of Cyberwar',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nicole_perlroth.png',
		characterName: 'Nicole Perlroth',
		youtubeUrl: 'https://www.youtube.com/watch?v=hy2G3PhGm-g'
	},
	{
		id: 100,
		title: 'Arm Wrestling',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/devon_larratt.png',
		characterName: 'Devon Larratt',
		youtubeUrl: 'https://www.youtube.com/watch?v=nvBEXXnNaNQ'
	},
	{
		id: 101,
		title: 'Elon Musk, AI, Aliens, and the Future of Humanity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tim_urban.png',
		characterName: 'Tim Urban',
		youtubeUrl: 'https://www.youtube.com/watch?v=0Jd7fJgFkPU'
	},
	{
		id: 102,
		title: 'Big Pharma',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_abramson.png',
		characterName: 'John Abramson',
		youtubeUrl: 'https://www.youtube.com/watch?v=arrokG3wCdE'
	},
	{
		id: 103,
		title: 'UFOs and Aliens',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/garry_nolan.png',
		characterName: 'Garry Nolan',
		youtubeUrl: 'https://www.youtube.com/watch?v=uTCc2-1tbBQ'
	},
	{
		id: 104,
		title: 'Consciousness, Panpsychism, and the Philosophy of Mind',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/philip_goff.png',
		characterName: 'Philip Goff',
		youtubeUrl: 'https://www.youtube.com/watch?v=BCdV6BMMpOo'
	},
	{
		id: 105,
		title: 'The Greatest of All Time',
		imgUrl:
			'https://lexfridman.com/files/thumbs_ai_podcast/georges_st_pierre_john_danaher_gordon_ryan.png',
		characterName: 'Georges St-Pierre, John Danaher, and Gordon Ryan',
		youtubeUrl: 'https://www.youtube.com/watch?v=KdmDtqB46Jc'
	},
	{
		id: 106,
		title: 'From Batman to AI and the Rolling Stones',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/thomas_tull.png',
		characterName: 'Thomas Tull',
		youtubeUrl: 'https://www.youtube.com/watch?v=3Z7WimACqG8'
	},
	{
		id: 107,
		title: 'Dark Matter of Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yann_lecun_2.png',
		characterName: 'Yann LeCun',
		youtubeUrl: 'https://www.youtube.com/watch?v=SGzMElJ11Cc'
	},
	{
		id: 108,
		title: 'Cosmology, Astrophysics, Aliens &amp; the Nobel Prize',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brian_keating.png',
		characterName: 'Brian Keating',
		youtubeUrl: 'https://www.youtube.com/watch?v=nhGwJLXzHs8'
	},
	{
		id: 109,
		title: 'Nationalism Debate',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nationalism_debate.png',
		characterName: 'Yaron Brook and Yoram Hazony',
		youtubeUrl: 'https://www.youtube.com/watch?v=Q24cpnHzx8I'
	},
	{
		id: 110,
		title: 'Comedy!',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/mark_normand.png',
		characterName: 'Mark Normand',
		youtubeUrl: 'https://www.youtube.com/watch?v=WzsivT_Ap1w'
	},
	{
		id: 111,
		title: 'The Case Against Lockdowns',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jay_bhattacharya.png',
		characterName: 'Jay Bhattacharya',
		youtubeUrl: 'https://www.youtube.com/watch?v=oIOGUYOPAsA'
	},
	{
		id: 112,
		title: "New Year's Special",
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice_5.png',
		characterName: 'Michael Malice',
		youtubeUrl: 'https://www.youtube.com/watch?v=B2tXN7ZnSfU'
	},
	{
		id: 113,
		title: 'SpaceX and Tesla Autopilot, Robotics, and AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/elon_musk_3.png',
		characterName: 'Elon Musk',
		youtubeUrl: 'https://www.youtube.com/watch?v=DxREm3s1scA'
	},
	{
		id: 114,
		title: 'Money, Power, and the Collapse of Empires',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ray_dalio_2.png',
		characterName: 'Ray Dalio',
		youtubeUrl: 'https://www.youtube.com/watch?v=TISMidxdZoc'
	},
	{
		id: 115,
		title: 'Python and the Search for Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/peter_wang.png',
		characterName: 'Peter Wang',
		youtubeUrl: 'https://www.youtube.com/watch?v=X0-SXS6zdEQ'
	},
	{
		id: 116,
		title: 'Pfizer CEO',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/albert_bourla.png',
		characterName: 'Albert Bourla',
		youtubeUrl: 'https://www.youtube.com/watch?v=Z_LhPMhkEdw'
	},
	{
		id: 117,
		title: 'Genocide and Absolute Power',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/norman_naimark.png',
		characterName: 'Norman Naimark',
		youtubeUrl: 'https://www.youtube.com/watch?v=Vrz8YDl9CeA'
	},
	{
		id: 118,
		title: 'Lab Leak Theory',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jamie_metzl.png',
		characterName: 'Jamie Metzl',
		youtubeUrl: 'https://www.youtube.com/watch?v=K78jqx9fx2I'
	},
	{
		id: 119,
		title: 'Why String Theory is Not Even Wrong',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/peter_woit.png',
		characterName: 'Peter Woit',
		youtubeUrl: 'https://www.youtube.com/watch?v=nDDJFvuFXdc'
	},
	{
		id: 120,
		title: 'Iowa Wrestling',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tom_brands.png',
		characterName: 'Tom Brands',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ww6pfsWmkdY'
	},
	{
		id: 121,
		title: 'Afghanistan',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robert_crews.png',
		characterName: 'Robert Crews',
		youtubeUrl: 'https://www.youtube.com/watch?v=CDiqA4SJNpA'
	},
	{
		id: 122,
		title: 'Instagram',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kevin_systrom.png',
		characterName: 'Kevin Systrom',
		youtubeUrl: 'https://www.youtube.com/watch?v=3pvpNKUPbIY'
	},
	{
		id: 123,
		title: 'Wrestling and MMA',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ben_askren.png',
		characterName: 'Ben Askren',
		youtubeUrl: 'https://www.youtube.com/watch?v=tApj7Q37P2k'
	},
	{
		id: 124,
		title: 'Waymo, Cozmo, Self-Driving Cars &amp; Future of Robotics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/boris_sofman.png',
		characterName: 'Boris Sofman',
		youtubeUrl: 'https://www.youtube.com/watch?v=U_AREIyd0Fc'
	},
	{
		id: 125,
		title: 'Sci-Fi, Space, AI, VR &amp; the Future of Humanity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/neal_stephenson.png',
		characterName: 'Neal Stephenson',
		youtubeUrl: 'https://www.youtube.com/watch?v=xAfdSak2fs8'
	},
	{
		id: 126,
		title: 'History of Money, Power, War, and Truth',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/niall_ferguson.png',
		characterName: 'Niall Ferguson',
		youtubeUrl: 'https://www.youtube.com/watch?v=xF6x1ftN-H4'
	},
	{
		id: 127,
		title: 'National Institutes of Health',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/francis_collins.png',
		characterName: 'Francis Collins',
		youtubeUrl: 'https://www.youtube.com/watch?v=mRZE-SJShkE'
	},
	{
		id: 128,
		title: 'Trucking and the Decline of the American Dream',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/steve_viscelli.png',
		characterName: 'Steve Viscelli',
		youtubeUrl: 'https://www.youtube.com/watch?v=a3Wpy6gE4So'
	},
	{
		id: 129,
		title: 'Judo and the Forging of Champions',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jimmy_pedro.png',
		characterName: 'Jimmy Pedro',
		youtubeUrl: 'https://www.youtube.com/watch?v=uy1fX2vOAEE'
	},
	{
		id: 130,
		title: 'Rapid COVID Testing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_mina_2.png',
		characterName: 'Michael Mina',
		youtubeUrl: 'https://www.youtube.com/watch?v=80OvNaEgmmw'
	},
	{
		id: 131,
		title: 'Complexity and the Fabric of Reality',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_wolfram_3.png',
		characterName: 'Stephen Wolfram',
		youtubeUrl: 'https://www.youtube.com/watch?v=4-SGpEInX_c'
	},
	{
		id: 132,
		title: 'Drugs, Addiction, and Society',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/carl_hart.png',
		characterName: 'Carl Hart',
		youtubeUrl: 'https://www.youtube.com/watch?v=3LWNY70Oj4A'
	},
	{
		id: 133,
		title: 'Quantum Gravity, Big Bang, Aliens, Death &amp; Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brian_greene.png',
		characterName: 'Brian Greene',
		youtubeUrl: 'https://www.youtube.com/watch?v=98HZanvAJ8Y'
	},
	{
		id: 134,
		title: 'Bitcoin and the Fight for Human Rights',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/alex_gladstein.png',
		characterName: 'Alex Gladstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=kSbMU5CbFM0'
	},
	{
		id: 135,
		title: 'War, Artillery, PTSD, and Love',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kelsi_sheren.png',
		characterName: 'Kelsi Sheren',
		youtubeUrl: 'https://www.youtube.com/watch?v=PbN3HzKkW4M'
	},
	{
		id: 136,
		title: 'Violence, Sex, and Fire in Human Evolution',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_wrangham.png',
		characterName: 'Richard Wrangham',
		youtubeUrl: 'https://www.youtube.com/watch?v=YJF01_ztxwY'
	},
	{
		id: 137,
		title: 'Wu-Tang Clan, Kung Fu, Chess, God, Life, and Death',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rza.png',
		characterName: 'RZA',
		youtubeUrl: 'https://www.youtube.com/watch?v=Iau6W5pjy9Y'
	},
	{
		id: 138,
		title: 'Existentialism, Nihilism, and the Search for Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sean_kelly.png',
		characterName: 'Sean Kelly',
		youtubeUrl: 'https://www.youtube.com/watch?v=cC1HszE5Hcw'
	},
	{
		id: 139,
		title: 'Innovating Mathematics Education',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jo_boaler.png',
		characterName: 'Jo Boaler',
		youtubeUrl: 'https://www.youtube.com/watch?v=KZnGSVwIpeU'
	},
	{
		id: 140,
		title: 'Optoelectronic Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeffrey_shainline.png',
		characterName: 'Jeffrey Shainline',
		youtubeUrl: 'https://www.youtube.com/watch?v=EwueqdgIvq4'
	},
	{
		id: 141,
		title: 'NumPy, SciPy, and Anaconda',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/travis_oliphant.png',
		characterName: 'Travis Oliphant',
		youtubeUrl: 'https://www.youtube.com/watch?v=gFEE3w7F0ww'
	},
	{
		id: 142,
		title: 'Judo, Olympics, and Mental Toughness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/travis_stevens.png',
		characterName: 'Travis Stevens',
		youtubeUrl: 'https://www.youtube.com/watch?v=uiNpESmPioQ'
	},
	{
		id: 143,
		title: 'Neural Networks and the Emergence of Cognition',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jay_mcclelland.png',
		characterName: 'Jay McClelland',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ui38ZzTymDY'
	},
	{
		id: 144,
		title: 'Cyc and Common-Sense Reasoning for AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/douglas_lenat.png',
		characterName: 'Douglas Lenat',
		youtubeUrl: 'https://www.youtube.com/watch?v=3wMKoSRbGVs'
	},
	{
		id: 145,
		title: 'New York Firefighters and the Heroes of 9/11',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/niels_jorgensen.png',
		characterName: 'Niels Jorgensen',
		youtubeUrl: 'https://www.youtube.com/watch?v=hZenJc1fa70'
	},
	{
		id: 146,
		title: 'Programming, Algorithms, and the Game of Life',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/donald_knuth_2.png',
		characterName: 'Donald Knuth',
		youtubeUrl: 'https://www.youtube.com/watch?v=EE1R8FYUJm0'
	},
	{
		id: 147,
		title: 'Virtual Reality and Social Media',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jaron_lanier.png',
		characterName: 'Jaron Lanier',
		youtubeUrl: 'https://www.youtube.com/watch?v=Fx0G6DHMfXM'
	},
	{
		id: 148,
		title: 'Robotics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rodney_brooks.png',
		characterName: 'Rodney Brooks',
		youtubeUrl: 'https://www.youtube.com/watch?v=nre0QT9LN6w'
	},
	{
		id: 149,
		title: 'Viruses and Vaccines',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vincent_racaniello.png',
		characterName: 'Vincent Racaniello',
		youtubeUrl: 'https://www.youtube.com/watch?v=G433fa01oMU'
	},
	{
		id: 150,
		title: 'OpenAI Codex, GPT-3, and the Future of AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/wojciech_zaremba.png',
		characterName: 'Wojciech Zaremba',
		youtubeUrl: 'https://www.youtube.com/watch?v=U5OD8MjYnOM'
	},
	{
		id: 151,
		title: 'Isaac Newton and the Philosophy of Science',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jed_buchwald.png',
		characterName: 'Jed Buchwald',
		youtubeUrl: 'https://www.youtube.com/watch?v=TRdL6ZzWBS0'
	},
	{
		id: 152,
		title: 'Gravitational Waves',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/barry_barish.png',
		characterName: 'Barry Barish',
		youtubeUrl: 'https://www.youtube.com/watch?v=J48bm21q8_A'
	},
	{
		id: 153,
		title: 'Nature of Reality, Dreams, and Consciousness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/joscha_bach_2.png',
		characterName: 'Joscha Bach',
		youtubeUrl: 'https://www.youtube.com/watch?v=rIpUf-Vy2JA'
	},
	{
		id: 154,
		title: 'The Secret History of Psychedelics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brian_muraresku.png',
		characterName: 'Brian Muraresku',
		youtubeUrl: 'https://www.youtube.com/watch?v=oYQh1ZNkC70'
	},
	{
		id: 155,
		title: 'Sleep',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/matt_walker.png',
		characterName: 'Matt Walker',
		youtubeUrl: 'https://www.youtube.com/watch?v=Hc4XvHTlW3s'
	},
	{
		id: 156,
		title: "Fermat's Library and the Art of Studying Papers",
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/luis_and_joao_batalha.png',
		characterName: 'Luís and João Batalha',
		youtubeUrl: 'https://www.youtube.com/watch?v=ndMahzDCH1Y'
	},
	{
		id: 157,
		title: 'The Thousand Brains Theory of Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeff_hawkins_2.png',
		characterName: 'Jeff Hawkins',
		youtubeUrl: 'https://www.youtube.com/watch?v=Z1KwkpTUbkg'
	},
	{
		id: 158,
		title: 'Powerlifting and the Engineering of Strength',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_duffin.png',
		characterName: 'Chris Duffin',
		youtubeUrl: 'https://www.youtube.com/watch?v=e4Bet29PVPY'
	},
	{
		id: 159,
		title: 'Self-Supervised Deep Learning in Computer Vision',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ishan_misra.png',
		characterName: 'Ishan Misra',
		youtubeUrl: 'https://www.youtube.com/watch?v=FUS6ceIvUnI'
	},
	{
		id: 160,
		title: 'Ultramarathon Running',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/zach_bitter.png',
		characterName: 'Zach Bitter',
		youtubeUrl: 'https://www.youtube.com/watch?v=0RTWSJAqTPg'
	},
	{
		id: 161,
		title: 'String Theory',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/cumrun_vafa.png',
		characterName: 'Cumrun Vafa',
		youtubeUrl: 'https://www.youtube.com/watch?v=j4_VyRDOmN4'
	},
	{
		id: 162,
		title: 'Regenerative Farming and the Art of Cooking Meat',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/anya_fernald.png',
		characterName: 'Anya Fernald',
		youtubeUrl: 'https://www.youtube.com/watch?v=ew8U43IXTfk'
	},
	{
		id: 163,
		title: 'Psychedelics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rick_doblin.png',
		characterName: 'Rick Doblin',
		youtubeUrl: 'https://www.youtube.com/watch?v=2tUiLxtrLxk'
	},
	{
		id: 164,
		title: 'Planet 9 and the Edge of Our Solar System',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/konstantin_batygin.png',
		characterName: 'Konstantin Batygin',
		youtubeUrl: 'https://www.youtube.com/watch?v=tm7poMupE8k'
	},
	{
		id: 165,
		title: 'Totalitarianism and Anarchy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice_3.png',
		characterName: 'Michael Malice',
		youtubeUrl: 'https://www.youtube.com/watch?v=R5rNoV1Qy_Q'
	},
	{
		id: 166,
		title: 'Smuggling Drugs for Pablo Escobar',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/roger_reaves.png',
		characterName: 'Roger Reaves',
		youtubeUrl: 'https://www.youtube.com/watch?v=Udh22kuLebg'
	},
	{
		id: 167,
		title: 'Origin of Life',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sara_walker.png',
		characterName: 'Sara Walker',
		youtubeUrl: 'https://www.youtube.com/watch?v=-tDQ74I3Ovs'
	},
	{
		id: 168,
		title: 'War, Leadership, and Discipline',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jocko_willink.png',
		characterName: 'Jocko Willink',
		youtubeUrl: 'https://www.youtube.com/watch?v=n2RcVEftY48'
	},
	{
		id: 169,
		title: 'North Korea',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yeonmi_park.png',
		characterName: 'Yeonmi Park',
		youtubeUrl: 'https://www.youtube.com/watch?v=usDqSEKDVsA'
	},
	{
		id: 170,
		title: 'Search for Life on Venus &amp; Other Planets',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/clara_sousa_silva.png',
		characterName: 'Clara Sousa-Silva',
		youtubeUrl: 'https://www.youtube.com/watch?v=CGAvsmokB4c'
	},
	{
		id: 171,
		title: 'Science and Censorship in the Time of a Pandemic',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/bret_weinstein.png',
		characterName: 'Bret Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=TG6BuSjwP4o'
	},
	{
		id: 172,
		title: 'The Existential Threat of Engineered Viruses',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rob_reid.png',
		characterName: 'Rob Reid',
		youtubeUrl: 'https://www.youtube.com/watch?v=cuD9uNFXnU8'
	},
	{
		id: 173,
		title: 'Cardano',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/charles_hoskinson.png',
		characterName: 'Charles Hoskinson',
		youtubeUrl: 'https://www.youtube.com/watch?v=FKh8hjJNhWc'
	},
	{
		id: 174,
		title: 'Philosophy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/daniel_schmachtenberger.png',
		characterName: 'Daniel Schmachtenberger',
		youtubeUrl: 'https://www.youtube.com/watch?v=hGRNUw559SE'
	},
	{
		id: 175,
		title: 'Mathematics of High-Dimensional Shapes',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jordan_ellenberg.png',
		characterName: 'Jordan Ellenberg',
		youtubeUrl: 'https://www.youtube.com/watch?v=tueAcSiiqYA'
	},
	{
		id: 176,
		title: 'Extending the Human Lifespan',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_sinclair.png',
		characterName: 'David Sinclair',
		youtubeUrl: 'https://www.youtube.com/watch?v=jhKZIq3SlYE'
	},
	{
		id: 177,
		title: 'Ethereum 2.0',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vitalik_buterin_2.png',
		characterName: 'Vitalik Buterin',
		youtubeUrl: 'https://www.youtube.com/watch?v=XW0QZmtbjvs'
	},
	{
		id: 178,
		title: 'Physics of Quarks, Dark Matter, Life &amp; Aliens',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/frank_wilczek.png',
		characterName: 'Frank Wilczek',
		youtubeUrl: 'https://www.youtube.com/watch?v=LDTe8uFqbws'
	},
	{
		id: 179,
		title: 'Kernel Brain-Computer Interfaces',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/bryan_johnson.png',
		characterName: 'Bryan Johnson',
		youtubeUrl: 'https://www.youtube.com/watch?v=1YbcB6b4A2U'
	},
	{
		id: 180,
		title: 'Consciousness, Free Will, AI, UFOs, and Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sam_harris.png',
		characterName: 'Sam Harris',
		youtubeUrl: 'https://www.youtube.com/watch?v=4dC_nRYIDZU'
	},
	{
		id: 181,
		title: 'Planets, Moons, and Asteroids in Our Solar System',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/katherine_de_kleer.png',
		characterName: 'Katherine de Kleer',
		youtubeUrl: 'https://www.youtube.com/watch?v=85F0FDsPHf8'
	},
	{
		id: 182,
		title: 'Math Olympiad, Combinatorics, and Contact Tracing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/po_shen_loh.png',
		characterName: 'Po-Shen Loh',
		youtubeUrl: 'https://www.youtube.com/watch?v=6z1JwZbX4dQ'
	},
	{
		id: 183,
		title: 'The Path to Mastery in Jiu Jitsu',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_danaher.png',
		characterName: 'John Danaher',
		youtubeUrl: 'https://www.youtube.com/watch?v=ktuw6Ow4sd0'
	},
	{
		id: 184,
		title: 'Chainlink and Hybrid Smart Contracts',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sergey_nazarov.png',
		characterName: 'Sergey Nazarov',
		youtubeUrl: 'https://www.youtube.com/watch?v=TPXTmVdlyoc'
	},
	{
		id: 185,
		title: 'History of American Power',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeremi_suri.png',
		characterName: 'Jeremi Suri',
		youtubeUrl: 'https://www.youtube.com/watch?v=USnqkUAr_3w'
	},
	{
		id: 186,
		title: 'The Science of Fighting',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/georges_st_pierre.png',
		characterName: 'Georges St-Pierre',
		youtubeUrl: 'https://www.youtube.com/watch?v=fIPxfzfOTxk'
	},
	{
		id: 187,
		title: 'Ayn Rand, Human Nature, and Anarchy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice_and_yaron_brook.png',
		characterName: 'Michael Malice and Yaron Brook',
		youtubeUrl: 'https://www.youtube.com/watch?v=Pl3x4GINtBQ'
	},
	{
		id: 188,
		title: 'Neuroevolution and Evolutionary Computatio',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/risto_miikkulainen.png',
		characterName: 'Risto Miikkulainen',
		youtubeUrl: 'https://www.youtube.com/watch?v=CY_LEa9xQtg'
	},
	{
		id: 189,
		title: 'Bitcoin from First Principles',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robert_breedlove.png',
		characterName: 'Robert Breedlove',
		youtubeUrl: 'https://www.youtube.com/watch?v=HrehEWYj16s'
	},
	{
		id: 190,
		title: 'History and Comedy',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yannis_pappas.png',
		characterName: 'Yannis Pappas',
		youtubeUrl: 'https://www.youtube.com/watch?v=dmVqpx4YOY4'
	},
	{
		id: 191,
		title: 'Economic Growth &amp; the Fight Against Conformity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tyler_cowen.png',
		characterName: 'Tyler Cowen',
		youtubeUrl: 'https://www.youtube.com/watch?v=7Grseeycor4'
	},
	{
		id: 192,
		title: 'Bitcoin, Layered Scaling &amp; Blocksize Debates',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nic_carter.png',
		characterName: 'Nic Carter',
		youtubeUrl: 'https://www.youtube.com/watch?v=mDyBbGCiBUU'
	},
	{
		id: 193,
		title: 'Free Exchange of Ideas on College Campuses',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ryan_schiller.png',
		characterName: 'Ryan Schiller',
		youtubeUrl: 'https://www.youtube.com/watch?v=UOEpe17nPhE'
	},
	{
		id: 194,
		title: 'Bitcoin',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/anthony_pompliano.png',
		characterName: 'Anthony Pompliano',
		youtubeUrl: 'https://www.youtube.com/watch?v=IHg6ixt3CKc'
	},
	{
		id: 195,
		title: 'The Ideal of Justice',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ronald_sullivan.png',
		characterName: 'Ronald Sullivan',
		youtubeUrl: 'https://www.youtube.com/watch?v=Iuven0crywo'
	},
	{
		id: 196,
		title: 'Martial Arts from First Principles',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ryan_hall_2.png',
		characterName: 'Ryan Hall',
		youtubeUrl: 'https://www.youtube.com/watch?v=VHg9sfOzBbY'
	},
	{
		id: 197,
		title: 'Cryptocurrency, Algorand, Bitcoin, and Ethereum',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/silvio_micali.png',
		characterName: 'Silvio Micali',
		youtubeUrl: 'https://www.youtube.com/watch?v=zNdhgOk4-fE'
	},
	{
		id: 198,
		title: 'Politics, History, and Power',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/saagar_enjeti.png',
		characterName: 'Saagar Enjeti',
		youtubeUrl: 'https://www.youtube.com/watch?v=grceJbuPUXI'
	},
	{
		id: 199,
		title: 'Deep Work',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/cal_newport.png',
		characterName: 'Cal Newport',
		youtubeUrl: 'https://www.youtube.com/watch?v=y3Umo_jd5AA'
	},
	{
		id: 200,
		title: 'Philosophy of Violence, Power, and the Martial Arts',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/josh_barnett.png',
		characterName: 'Josh Barnett',
		youtubeUrl: 'https://www.youtube.com/watch?v=YJWPowbCK_I'
	},
	{
		id: 201,
		title: 'Sleep, Dreams, Psychedelics, and Neuroplasticity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_huberman_2.png',
		characterName: 'Andrew Huberman',
		youtubeUrl: 'https://www.youtube.com/watch?v=lxRHJPz8aQ'
	},
	{
		id: 202,
		title: 'Difficult Conversations, Freedom, and Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eric_weinstein_4.png',
		characterName: 'Eric Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=ifX_JnBfxTY'
	},
	{
		id: 203,
		title: 'The Future of Computing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jim_keller_2.png',
		characterName: 'Jim Keller',
		youtubeUrl: 'https://www.youtube.com/watch?v=G4hL5Om4IJ4'
	},
	{
		id: 204,
		title: 'Startups, Angel Investing, Capitalism, and Friendship',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jason_calacanis.png',
		characterName: 'Jason Calacanis',
		youtubeUrl: 'https://www.youtube.com/watch?v=d2bYwYxqJCM'
	},
	{
		id: 205,
		title: 'JavaScript, Firefox, Mozilla, and Brave',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brendan_eich.png',
		characterName: 'Brendan Eich',
		youtubeUrl: 'https://www.youtube.com/watch?v=krB0enBeSiE'
	},
	{
		id: 206,
		title: 'WallStreetBets, Numerai &amp; Future of Stock Trading',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_craib.png',
		characterName: 'Richard Craib',
		youtubeUrl: 'https://www.youtube.com/watch?v=ziQSpuST6Es'
	},
	{
		id: 207,
		title: 'The Next Generation of Big Ideas',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/zev_weinstein.png',
		characterName: 'Zev Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=QSPtSNqUCUw'
	},
	{
		id: 208,
		title: 'Rocket Engines and Electric Spacecraft Propulsion',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/natalya_bailey.png',
		characterName: 'Natalya Bailey',
		youtubeUrl: 'https://www.youtube.com/watch?v=CejJ2aVRUE8'
	},
	{
		id: 209,
		title: 'Comedy, Power &amp; Conspiracy Theories',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tim_dillon.png',
		characterName: 'Tim Dillon',
		youtubeUrl: 'https://www.youtube.com/watch?v=8wYZjOzfTUk'
	},
	{
		id: 210,
		title: 'AI and Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/max_tegmark_2.png',
		characterName: 'Max Tegmark',
		youtubeUrl: 'https://www.youtube.com/watch?v=RL4j4KPwNGM'
	},
	{
		id: 211,
		title: 'Aliens, Black Holes, and the Mystery of the Oumuamua',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/avi_loeb.png',
		characterName: 'Avi Loeb',
		youtubeUrl: 'https://www.youtube.com/watch?v=plcc6E-E1uU'
	},
	{
		id: 212,
		title: 'Evolution of Proteins, Viruses &amp; Life',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dmitry_korkin_2.png',
		characterName: 'Dmitry Korkin',
		youtubeUrl: 'https://www.youtube.com/watch?v=I51DuprOb0o'
	},
	{
		id: 213,
		title: 'Olympic Wrestling',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dan_gable.png',
		characterName: 'Dan Gable',
		youtubeUrl: 'https://www.youtube.com/watch?v=pRzelZlKl7E'
	},
	{
		id: 214,
		title: 'Speech Recognition with AI and Humans',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dan_kokotov.png',
		characterName: 'Dan Kokotov',
		youtubeUrl: 'https://www.youtube.com/watch?v=yTWa-Z1UQwU'
	},
	{
		id: 215,
		title: 'The White Pill',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice_2.png',
		characterName: 'Michael Malice',
		youtubeUrl: 'https://www.youtube.com/watch?v=uykM3NhJbso'
	},
	{
		id: 216,
		title: 'Aliens, Technology, Religion &amp; Belief',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/diana_walsh_pasulka.png',
		characterName: 'Diana Walsh Pasulka',
		youtubeUrl: 'https://www.youtube.com/watch?v=iqBh7G4uDR8'
	},
	{
		id: 217,
		title: 'Machine Learning and Education',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/charles_isbell_and_michael_littman.png',
		characterName: 'Charles Isbell and Michael Littman',
		youtubeUrl: 'https://www.youtube.com/watch?v=yzMVEbs8Zz0'
	},
	{
		id: 218,
		title: 'Waymo',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dmitri_dolgov.png',
		characterName: 'Dmitri Dolgov',
		youtubeUrl: 'https://www.youtube.com/watch?v=P6prRXkI5HM'
	},
	{
		id: 219,
		title: 'Rapid Testing, Viruses, and the Engineering Mindset',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_mina.png',
		characterName: 'Michael Mina',
		youtubeUrl: 'https://www.youtube.com/watch?v=L-RuvUkcyJI'
	},
	{
		id: 220,
		title: 'Psychedelics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/matthew_johnson.png',
		characterName: 'Matthew Johnson',
		youtubeUrl: 'https://www.youtube.com/watch?v=ICj8p5jPd3Y'
	},
	{
		id: 221,
		title: 'Reinforcement Learning and the Future of AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_littman.png',
		characterName: 'Michael Littman',
		youtubeUrl: 'https://www.youtube.com/watch?v=c9AbECvRt20'
	},
	{
		id: 222,
		title: 'Fighting and the Pursuit of Excellence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_clarke.png',
		characterName: 'John Clarke',
		youtubeUrl: 'https://www.youtube.com/watch?v=RvhpncC5jZ8'
	},
	{
		id: 223,
		title: 'Meaning of Life, the Universe, and Everything',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/manolis_kellis_4.png',
		characterName: 'Manolis Kellis',
		youtubeUrl: 'https://www.youtube.com/watch?v=bgNzUxyS-kQ'
	},
	{
		id: 224,
		title: 'Economics of AI, Social Networks &amp; Technology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/erik_brynjolfsson.png',
		characterName: 'Erik Brynjolfsson',
		youtubeUrl: 'https://www.youtube.com/watch?v=NOReE-3EBhI'
	},
	{
		id: 225,
		title: 'Love, Evolution, and the Human Brain',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/lisa_feldman_barrett_2.png',
		characterName: 'Lisa Feldman Barrett',
		youtubeUrl: 'https://www.youtube.com/watch?v=S_AFc_BXht4'
	},
	{
		id: 226,
		title: 'Neuroscience of Optimal Performance',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_huberman.png',
		characterName: 'Andrew Huberman',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ktj050DxG7Q'
	},
	{
		id: 227,
		title: 'Ayn Rand and the Philosophy of Objectivism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yaron_brook.png',
		characterName: 'Yaron Brook',
		youtubeUrl: 'https://www.youtube.com/watch?v=SOr1YYRljV8'
	},
	{
		id: 228,
		title: 'Supernovae &amp; the Expanding Universe',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/alex_filippenko.png',
		characterName: 'Alex Filippenko',
		youtubeUrl: 'https://www.youtube.com/watch?v=WxfA1OSev4c'
	},
	{
		id: 229,
		title: 'Hardcore History',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dan_carlin.png',
		characterName: 'Dan Carlin',
		youtubeUrl: 'https://www.youtube.com/watch?v=-k-ztNsBM54'
	},
	{
		id: 230,
		title: 'Computing, AI &amp; Race in America',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/charles_isbell.png',
		characterName: 'Charles Isbell',
		youtubeUrl: 'https://www.youtube.com/watch?v=LAyZ8IYfGxQ'
	},
	{
		id: 231,
		title: 'On the Nature of Good and Evil',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eric_weinstein_3.png',
		characterName: 'Eric Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=o2nG7-eXxko'
	},
	{
		id: 232,
		title: 'Biology of Disease',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/manolis_kellis_3.png',
		characterName: 'Manolis Kellis',
		youtubeUrl: 'https://www.youtube.com/watch?v=Aq9UPIXbtKI'
	},
	{
		id: 233,
		title: 'Learning to Drive with Neural Nets',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/george_hotz_2.png',
		characterName: 'George Hotz',
		youtubeUrl: 'https://www.youtube.com/watch?v=_L3gNaAVjQ4'
	},
	{
		id: 234,
		title: 'The Future of Computing and Programming',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_lattner_2.png',
		characterName: 'Chris Lattner',
		youtubeUrl: 'https://www.youtube.com/watch?v=nWTvXbQHwWs'
	},
	{
		id: 235,
		title: 'Computational Complexity and Consciousness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/scott_aaronson_2.png',
		characterName: 'Scott Aaronson',
		youtubeUrl: 'https://www.youtube.com/watch?v=nAMjv0NAESM'
	},
	{
		id: 236,
		title: 'How the Brain Works',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/lisa_feldman_barrett.png',
		characterName: 'Lisa Feldman Barrett',
		youtubeUrl: 'https://www.youtube.com/watch?v=NbdRIVCBqNI'
	},
	{
		id: 237,
		title: 'Anarchy, Democracy, Love, and Trolling',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_malice.png',
		characterName: 'Michael Malice',
		youtubeUrl: 'https://www.youtube.com/watch?v=BIk1zUy8ehU'
	},
	{
		id: 238,
		title: 'The Joe Rogan Experience',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/joe_rogan.png',
		characterName: 'Joe Rogan',
		youtubeUrl: 'https://www.youtube.com/watch?v=FKCJWkPehdY'
	},
	{
		id: 239,
		title: 'Java, JVM, Emacs, and the Early Day of Computing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/james_gosling.png',
		characterName: 'James Gosling',
		youtubeUrl: 'https://www.youtube.com/watch?v=IT__Nrr3PNI'
	},
	{
		id: 240,
		title: 'Philosophy of Martial Arts',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ryan_hall.png',
		characterName: 'Ryan Hall',
		youtubeUrl: 'https://www.youtube.com/watch?v=hhEwWghH_XM'
	},
	{
		id: 241,
		title: 'Fundamental Theory of Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_wolfram_2.png',
		characterName: 'Stephen Wolfram',
		youtubeUrl: 'https://www.youtube.com/watch?v=-t1_ffaFXao'
	},
	{
		id: 242,
		title: 'Origin of Life, Humans, and Ideas',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/manolis_kellis_2.png',
		characterName: 'Manolis Kellis',
		youtubeUrl: 'https://www.youtube.com/watch?v=t06rkOOUa7g'
	},
	{
		id: 243,
		title: 'UFOs, Aliens, Fighter Jets &amp; Aerospace',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_fravor.png',
		characterName: 'David Fravor',
		youtubeUrl: 'https://www.youtube.com/watch?v=aB8zcAttP1E'
	},
	{
		id: 244,
		title: 'Forming a Friendship with an AI Companion',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eugenia_kuyda.png',
		characterName: 'Eugenia Kuyda',
		youtubeUrl: 'https://www.youtube.com/watch?v=_AGPbvCDBCk'
	},
	{
		id: 245,
		title: 'Measures of Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/francois_chollet_2.png',
		characterName: 'François Chollet',
		youtubeUrl: 'https://www.youtube.com/watch?v=PUAdj3w3wO4'
	},
	{
		id: 246,
		title: 'Neuroplasticity and the Livewired Brain',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_eagleman.png',
		characterName: 'David Eagleman',
		youtubeUrl: 'https://www.youtube.com/watch?v=386s-y1aRRo'
	},
	{
		id: 247,
		title: 'Math, Manim, Neural Networks &amp; Teaching',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/grant_sanderson_2.png',
		characterName: 'Grant Sanderson',
		youtubeUrl: 'https://www.youtube.com/watch?v=U_6AYX42gkU'
	},
	{
		id: 248,
		title: 'Death and Meaning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sheldon_solomon.png',
		characterName: 'Sheldon Solomon',
		youtubeUrl: 'https://www.youtube.com/watch?v=qfKyNxfyWbo'
	},
	{
		id: 249,
		title: 'Planets and Life Outside Our Solar System',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sara_seager.png',
		characterName: 'Sara Seager',
		youtubeUrl: 'https://www.youtube.com/watch?v=-jA2ABHBc6Y'
	},
	{
		id: 250,
		title: 'Brain-Inspired AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dileep_george.png',
		characterName: 'Dileep George',
		youtubeUrl: 'https://www.youtube.com/watch?v=tg_m_LxxRwM'
	},
	{
		id: 251,
		title: 'Underactuated Robotics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/russ_tedrake.png',
		characterName: 'Russ Tedrake',
		youtubeUrl: 'https://www.youtube.com/watch?v=A22Ej6kb2wo'
	},
	{
		id: 252,
		title: 'Human Genome and Evolutionary Dynamics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/manolis_kellis.png',
		characterName: 'Manolis Kellis',
		youtubeUrl: 'https://www.youtube.com/watch?v=brslF-Cy3HU'
	},
	{
		id: 253,
		title: 'Nuclear Fusion, Plasma Physics, and Religion',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ian_hutchinson.png',
		characterName: 'Ian Hutchinson',
		youtubeUrl: 'https://www.youtube.com/watch?v=pDSEjaDCtOU'
	},
	{
		id: 254,
		title: 'Algorithms and Computational Complexity',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_karp.png',
		characterName: 'Richard Karp',
		youtubeUrl: 'https://www.youtube.com/watch?v=KllCrlfLuzs'
	},
	{
		id: 255,
		title: 'Computer Vision',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jitendra_malik.png',
		characterName: 'Jitendra Malik',
		youtubeUrl: 'https://www.youtube.com/watch?v=LRYkH-fAVGE'
	},
	{
		id: 256,
		title: 'UNIX, C, AWK, AMPL, and Go',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/brian_kernighan.png',
		characterName: 'Brian Kernighan',
		youtubeUrl: 'https://www.youtube.com/watch?v=O9upVbGSBFo'
	},
	{
		id: 257,
		title: 'Robotics and Machine Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sergey_levine.png',
		characterName: 'Sergey Levine',
		youtubeUrl: 'https://www.youtube.com/watch?v=kxi-_TT_-Nc'
	},
	{
		id: 258,
		title: 'Suffering in Humans, Animals, and AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/peter_singer.png',
		characterName: 'Peter Singer',
		youtubeUrl: 'https://www.youtube.com/watch?v=llh-2pqSGrs'
	},
	{
		id: 259,
		title: 'Neuroscience, Psychology, and AI at DeepMind',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/matt_botvinick.png',
		characterName: 'Matt Botvinick',
		youtubeUrl: 'https://www.youtube.com/watch?v=3t06ajvBtl0'
	},
	{
		id: 260,
		title: 'Biotechnology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/robert_langer.png',
		characterName: 'Robert Langer',
		youtubeUrl: 'https://www.youtube.com/watch?v=9LQffCdHHlQ'
	},
	{
		id: 261,
		title: 'Computer Architecture and Data Storage',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_patterson.png',
		characterName: 'David Patterson',
		youtubeUrl: 'https://www.youtube.com/watch?v=naed4C4hfAg'
	},
	{
		id: 262,
		title: 'Artificial General Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ben_goertzel.png',
		characterName: 'Ben Goertzel',
		youtubeUrl: 'https://www.youtube.com/watch?v=OpSmCKe27WE'
	},
	{
		id: 263,
		title: 'The War of Art',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/steven_pressfield.png',
		characterName: 'Steven Pressfield',
		youtubeUrl: 'https://www.youtube.com/watch?v=PgtedwKGhXs'
	},
	{
		id: 264,
		title: 'Artificial Consciousness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/joscha_bach.png',
		characterName: 'Joscha Bach',
		youtubeUrl: 'https://www.youtube.com/watch?v=P-2P3MSZrBM'
	},
	{
		id: 265,
		title: 'Neuroscience and the Free Energy Principle',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/karl_friston.png',
		characterName: 'Karl Friston',
		youtubeUrl: 'https://www.youtube.com/watch?v=NwzuibY5kUs'
	},
	{
		id: 266,
		title: 'Social Robotics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kate_darling.png',
		characterName: 'Kate Darling',
		youtubeUrl: 'https://www.youtube.com/watch?v=7KTbEn7PiaY'
	},
	{
		id: 267,
		title: 'Robots That Fly &amp; Robots That Drive',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sertac_karaman.png',
		characterName: 'Sertac Karaman',
		youtubeUrl: 'https://www.youtube.com/watch?v=M1-v-dXIzho'
	},
	{
		id: 268,
		title: 'Going Big in Business',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_schwarzman.png',
		characterName: 'Stephen Schwarzman',
		youtubeUrl: 'https://www.youtube.com/watch?v=aYwDs9LTN50'
	},
	{
		id: 269,
		title: 'Adversarial ML &amp; Computer Security',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dawn_song.png',
		characterName: 'Dawn Song',
		youtubeUrl: 'https://www.youtube.com/watch?v=HhY95m-WD_E'
	},
	{
		id: 270,
		title: 'Deep Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ilya_sutskever.png',
		characterName: 'Ilya Sutskever',
		youtubeUrl: 'https://www.youtube.com/watch?v=13CZPWmke6A'
	},
	{
		id: 271,
		title: 'Biomedicine and Machine Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/daphne_koller.png',
		characterName: 'Daphne Koller',
		youtubeUrl: 'https://www.youtube.com/watch?v=xlMTWfkQqbY'
	},
	{
		id: 272,
		title: 'Particle Physics and the Large Hadron Collider',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/harry_cliff.png',
		characterName: 'Harry Cliff',
		youtubeUrl: 'https://www.youtube.com/watch?v=8A-5gIW0-eI'
	},
	{
		id: 273,
		title: 'Square, Cryptocurrency, and AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jack_dorsey.png',
		characterName: 'Jack Dorsey',
		youtubeUrl: 'https://www.youtube.com/watch?v=60KJz1BVTyU'
	},
	{
		id: 274,
		title: 'Computational Biology of Coronavirus',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dmitry_korkin.png',
		characterName: 'Dmitry Korkin',
		youtubeUrl: 'https://www.youtube.com/watch?v=CwyOUS8TSl0'
	},
	{
		id: 275,
		title: 'Cellular Automata, Computation, and Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_wolfram.png',
		characterName: 'Stephen Wolfram',
		youtubeUrl: 'https://www.youtube.com/watch?v=ez773teNFYA'
	},
	{
		id: 276,
		title: 'Geometric Unity and the Call for New Ideas',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eric_weinstein_2.png',
		characterName: 'Eric Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=rIAZJNe7YtE'
	},
	{
		id: 277,
		title: 'Evolution, Intelligence, Simulation, and Memes',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/richard_dawkins.png',
		characterName: 'Richard Dawkins',
		youtubeUrl: 'https://www.youtube.com/watch?v=5f-JlzBuUUU'
	},
	{
		id: 278,
		title: 'AlphaGo, AlphaZero, and Deep RL',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_silver.png',
		characterName: 'David Silver',
		youtubeUrl: 'https://www.youtube.com/watch?v=uPUEq8d73JI'
	},
	{
		id: 279,
		title: 'Physics of Consciousness and the Infinite Universe',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/roger_penrose.png',
		characterName: 'Roger Penrose',
		youtubeUrl: 'https://www.youtube.com/watch?v=orMtwOz6Db0'
	},
	{
		id: 280,
		title: 'Effective Altruism',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/william_macaskill.png',
		characterName: 'William MacAskill',
		youtubeUrl: 'https://www.youtube.com/watch?v=NvsI8ijW8xU'
	},
	{
		id: 281,
		title: 'Simulation and Superintelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/nick_bostrom.png',
		characterName: 'Nick Bostrom',
		youtubeUrl: 'https://www.youtube.com/watch?v=rfKiTGj-zeQ'
	},
	{
		id: 282,
		title: 'Leadership, Hard Work &amp; the Infinite Game',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/simon_sinek.png',
		characterName: 'Simon Sinek',
		youtubeUrl: 'https://www.youtube.com/watch?v=_TTNGq9djU4'
	},
	{
		id: 283,
		title: 'Human-Robot Interaction and Reward Engineering',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/anca_dragan.png',
		characterName: 'Anca Dragan',
		youtubeUrl: 'https://www.youtube.com/watch?v=iOCfIFBBpVY'
	},
	{
		id: 284,
		title: 'Ethereum, Cryptocurrency, and the Future of Money',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vitalik_buterin.png',
		characterName: 'Vitalik Buterin',
		youtubeUrl: 'https://www.youtube.com/watch?v=3x1b_S6Qp2Q'
	},
	{
		id: 285,
		title: "Einstein's Unfinished Revolution",
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/lee_smolin.png',
		characterName: 'Lee Smolin',
		youtubeUrl: 'https://www.youtube.com/watch?v=WgLo4gmEraU'
	},
	{
		id: 286,
		title: 'Cosmos, Carl Sagan, and the Beauty of Science',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ann_druyan.png',
		characterName: 'Ann Druyan',
		youtubeUrl: 'https://www.youtube.com/watch?v=7jFdxd1qX2g'
	},
	{
		id: 287,
		title: 'Ex Machina, Devs, Annihilation',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/alex_garland.png',
		characterName: 'Alex Garland',
		youtubeUrl: 'https://www.youtube.com/watch?v=gU-mkuMU428'
	},
	{
		id: 288,
		title: 'Physics View of the Mind and Neurobiology',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/john_hopfield.png',
		characterName: 'John Hopfield',
		youtubeUrl: 'https://www.youtube.com/watch?v=DKyzcbNr8WE'
	},
	{
		id: 289,
		title: 'Universal Artificial Intelligence, AIXI, and AGI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/marcus_hutter.png',
		characterName: 'Marcus Hutter',
		youtubeUrl: 'https://www.youtube.com/watch?v=E1AxVXt2Gv4'
	},
	{
		id: 290,
		title: 'Machine Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_i_jordan.png',
		characterName: 'Michael I. Jordan',
		youtubeUrl: 'https://www.youtube.com/watch?v=EYIKy_FM9x0'
	},
	{
		id: 291,
		title: 'Deep Learning, Education, and Real-World AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/andrew_ng.png',
		characterName: 'Andrew Ng',
		youtubeUrl: 'https://www.youtube.com/watch?v=0jspaMLxBig'
	},
	{
		id: 292,
		title: 'Quantum Computing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/scott_aaronson.png',
		characterName: 'Scott Aaronson',
		youtubeUrl: 'https://www.youtube.com/watch?v=uX5t8EivCaM'
	},
	{
		id: 293,
		title: 'Predicates, Invariants, and the Essence of Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vladimir_vapnik_2.png',
		characterName: 'Vladimir Vapnik',
		youtubeUrl: 'https://www.youtube.com/watch?v=bQa7hpUpMzM'
	},
	{
		id: 294,
		title: "Moore's Law",
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jim_keller.png',
		characterName: 'Jim Keller',
		youtubeUrl: 'https://www.youtube.com/watch?v=Nb2tebYAaOA'
	},
	{
		id: 295,
		title: 'Consciousness',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_chalmers.png',
		characterName: 'David Chalmers',
		youtubeUrl: 'https://www.youtube.com/watch?v=LW59lMvxmY4'
	},
	{
		id: 296,
		title: 'YouTube Algorithm',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/cristos_goodrow.png',
		characterName: 'Cristos Goodrow',
		youtubeUrl: 'https://www.youtube.com/watch?v=nkWmiNRPU-c'
	},
	{
		id: 297,
		title: 'Economics of Innovation, Automation, and UBI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/paul_krugman.png',
		characterName: 'Paul Krugman',
		youtubeUrl: 'https://www.youtube.com/watch?v=OJQepiqSWvg'
	},
	{
		id: 298,
		title: 'Human-Robot Interaction',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ayanna_howard.png',
		characterName: 'Ayanna Howard',
		youtubeUrl: 'https://www.youtube.com/watch?v=J21-7AsUcgM'
	},
	{
		id: 299,
		title: 'Thinking Fast and Slow, Deep Learning, and AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/daniel_kahneman.png',
		characterName: 'Daniel Kahneman',
		youtubeUrl: 'https://www.youtube.com/watch?v=UwwBG-MbniY'
	},
	{
		id: 300,
		title: '3Blue1Brown and the Beauty of Mathematics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/grant_sanderson.png',
		characterName: 'Grant Sanderson',
		youtubeUrl: 'https://www.youtube.com/watch?v=U_lKUK2MCsg'
	},
	{
		id: 301,
		title: 'Stalin, Putin, and the Nature of Power',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stephen_kotkin.png',
		characterName: 'Stephen Kotkin',
		youtubeUrl: 'https://www.youtube.com/watch?v=oCkkjnpS2f8'
	},
	{
		id: 302,
		title: 'The Art of Computer Programming',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/donald_knuth.png',
		characterName: 'Donald Knuth',
		youtubeUrl: 'https://www.youtube.com/watch?v=2BdBfsXbST8'
	},
	{
		id: 303,
		title: 'Concepts, Analogies and Common Sense',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/melanie_mitchell.png',
		characterName: 'Melanie Mitchell',
		youtubeUrl: 'https://www.youtube.com/watch?v=ImKkaeUx1MU'
	},
	{
		id: 304,
		title: 'Supersymmetry and String Theory',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jim_gates.png',
		characterName: 'Jim Gates',
		youtubeUrl: 'https://www.youtube.com/watch?v=IUHkhB366tE'
	},
	{
		id: 305,
		title: 'Flying Cars, Autonomous Vehicles, and Education',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sebastian_thrun.png',
		characterName: 'Sebastian Thrun',
		youtubeUrl: 'https://www.youtube.com/watch?v=ZPPAOakITeQ'
	},
	{
		id: 306,
		title: 'Vsauce',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_stevens.png',
		characterName: 'Michael Stevens',
		youtubeUrl: 'https://www.youtube.com/watch?v=3qMemn__kK8'
	},
	{
		id: 307,
		title: 'Amazon Alexa and Conversational AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rohit_prasad.png',
		characterName: 'Rohit Prasad',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ad89JYS-uZM'
	},
	{
		id: 308,
		title: 'Causal Reasoning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/judea_pearl.png',
		characterName: 'Judea Pearl',
		youtubeUrl: 'https://www.youtube.com/watch?v=pEBI0vF45ic'
	},
	{
		id: 309,
		title: 'Comedy, Robotics, Neurology, and Love',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/whitney_cummings.png',
		characterName: 'Whitney Cummings',
		youtubeUrl: 'https://www.youtube.com/watch?v=0-3kw5BEKB8'
	},
	{
		id: 310,
		title: 'Principles',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ray_dalio.png',
		characterName: 'Ray Dalio',
		youtubeUrl: 'https://www.youtube.com/watch?v=M95m2EFb7IQ'
	},
	{
		id: 311,
		title: 'Language, Cognition, and Deep Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/noam_chomsky.png',
		characterName: 'Noam Chomsky',
		youtubeUrl: 'https://www.youtube.com/watch?v=cMscNuSUy0I'
	},
	{
		id: 312,
		title: 'Linear Algebra, Math, Teaching &amp; MIT OCW',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/gilbert_strang.png',
		characterName: 'Gilbert Strang',
		youtubeUrl: 'https://www.youtube.com/watch?v=lEZPfmGCEk0'
	},
	{
		id: 313,
		title: 'Space Exploration, Space Suits, NASA, and Mars',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/dava_newman.png',
		characterName: 'Dava Newman',
		youtubeUrl: 'https://www.youtube.com/watch?v=2fI6bYnRgSc'
	},
	{
		id: 314,
		title: 'Algorithmic Ethics in Machine Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michael_kearns.png',
		characterName: 'Michael Kearns',
		youtubeUrl: 'https://www.youtube.com/watch?v=AzdxbzHtjgs'
	},
	{
		id: 315,
		title: 'Neuralink, AI, Autopilot, and the Pale Blue Dot',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/elon_musk_2.png',
		characterName: 'Elon Musk',
		youtubeUrl: 'https://www.youtube.com/watch?v=smK9dgdTl40'
	},
	{
		id: 316,
		title: 'C++',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/bjarne_stroustrup.png',
		characterName: 'Bjarne Stroustrup',
		youtubeUrl: 'https://www.youtube.com/watch?v=uTxRF5ag27A'
	},
	{
		id: 317,
		title: 'Quantum Mechanics and Many-Worlds',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sean_carroll_2.png',
		characterName: 'Sean Carroll',
		youtubeUrl: 'https://www.youtube.com/watch?v=iNqqOLscOBY'
	},
	{
		id: 318,
		title: 'Chess, Deep Blue, AI, and Putin',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/garry_kasparov.png',
		characterName: 'Garry Kasparov',
		youtubeUrl: 'https://www.youtube.com/watch?v=8RVa0THWUWw'
	},
	{
		id: 319,
		title: 'Future of Humans, Aliens, Space Travel &amp; Physics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/michio_kaku.png',
		characterName: 'Michio Kaku',
		youtubeUrl: 'https://www.youtube.com/watch?v=kD5yc1LQrpQ'
	},
	{
		id: 320,
		title: 'IBM Watson, Jeopardy &amp; Deep Conversations with AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/david_ferrucci.png',
		characterName: 'David Ferrucci',
		youtubeUrl: 'https://www.youtube.com/watch?v=Whtt2H5_isM'
	},
	{
		id: 321,
		title: 'Hybrid of Deep Learning and Symbolic AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/gary_marcus.png',
		characterName: 'Gary Marcus',
		youtubeUrl: 'https://www.youtube.com/watch?v=vNOTDn3D_RI'
	},
	{
		id: 322,
		title: 'Artificial Intelligence: A Modern Approach',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/peter_norvig.png',
		characterName: 'Peter Norvig',
		youtubeUrl: 'https://www.youtube.com/watch?v=_VPxEcT_Adc'
	},
	{
		id: 323,
		title: 'String Theory, Quantum Mechanics and Black Holes',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/leonard_susskind.png',
		characterName: 'Leonard Susskind',
		youtubeUrl: 'https://www.youtube.com/watch?v=s78hvV3QLUE'
	},
	{
		id: 324,
		title: 'Deep Learning for Cancer Diagnosis and Treatment',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/regina_barzilay.png',
		characterName: 'Regina Barzilay',
		youtubeUrl: 'https://www.youtube.com/watch?v=x0-zGdlpTeg'
	},
	{
		id: 325,
		title: 'iRobot',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/colin_angle.png',
		characterName: 'Colin Angle',
		youtubeUrl: 'https://www.youtube.com/watch?v=1d9Dj9dT_pw'
	},
	{
		id: 326,
		title: 'Keras, Deep Learning, and the Progress of AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/francois_chollet.png',
		characterName: 'Francois Chollet',
		youtubeUrl: 'https://www.youtube.com/watch?v=Bo8MY4JpiXE'
	},
	{
		id: 327,
		title: 'Flying Robots',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vijay_kumar.png',
		characterName: 'Vijay Kumar',
		youtubeUrl: 'https://www.youtube.com/watch?v=HYsLTNXMl1Q'
	},
	{
		id: 328,
		title: 'Deep Learning, CNNs, and Self-Supervised Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yann_lecun.png',
		characterName: 'Yann LeCun',
		youtubeUrl: 'https://www.youtube.com/watch?v=SGSOCuByo24'
	},
	{
		id: 329,
		title: 'fast.ai Deep Learning Courses and Research',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeremy_howard.png',
		characterName: 'Jeremy Howard',
		youtubeUrl: 'https://www.youtube.com/watch?v=J6XcP4JOHmk'
	},
	{
		id: 330,
		title: 'Machines Who Think and the Early Days of AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/pamela_mccorduck.png',
		characterName: 'Pamela McCorduck',
		youtubeUrl: 'https://www.youtube.com/watch?v=i6rnzk8VU24'
	},
	{
		id: 331,
		title: 'Lockheed Martin',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/keoki_jackson.png',
		characterName: 'Keoki Jackson',
		youtubeUrl: 'https://www.youtube.com/watch?v=anXep8kBOCg'
	},
	{
		id: 332,
		title: 'Brain Development from Stem Cell to Organoid',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/paola_arlotta.png',
		characterName: 'Paola Arlotta',
		youtubeUrl: 'https://www.youtube.com/watch?v=lVHRs3uTHNI'
	},
	{
		id: 333,
		title: 'Comma.ai, OpenPilot, Autonomous Vehicles',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/george_hotz.png',
		characterName: 'George Hotz',
		youtubeUrl: 'https://www.youtube.com/watch?v=iwcYp-XT7UI'
	},
	{
		id: 334,
		title: 'Microsoft',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kevin_scott.png',
		characterName: 'Kevin Scott',
		youtubeUrl: 'https://www.youtube.com/watch?v=QDN6xvhAw94'
	},
	{
		id: 335,
		title: 'Spotify',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/gustav_soderstrom.png',
		characterName: 'Gustav Soderstrom',
		youtubeUrl: 'https://www.youtube.com/watch?v=v-9Mpe7NhkM'
	},
	{
		id: 336,
		title: 'Self-Driving Cars at Aurora, Google, CMU, and DARPA',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_urmson.png',
		characterName: 'Chris Urmson',
		youtubeUrl: 'https://www.youtube.com/watch?v=Tj6NOfdfa4o'
	},
	{
		id: 337,
		title: 'AI Superpowers: China and Silicon Valley',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kai_fu_lee.png',
		characterName: 'Kai-Fu Lee',
		youtubeUrl: 'https://www.youtube.com/watch?v=cQ48rP_Rs4g'
	},
	{
		id: 338,
		title: 'The Nature of the Universe, Life, and Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/sean_carroll.png',
		characterName: 'Sean Carroll',
		youtubeUrl: 'https://www.youtube.com/watch?v=l-NJrvyRo0c'
	},
	{
		id: 339,
		title: 'On Intelligence',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeff_hawkins.png',
		characterName: 'Jeff Hawkins',
		youtubeUrl: 'https://www.youtube.com/watch?v=-EVqrDlAqYo'
	},
	{
		id: 340,
		title: 'Affective Computing',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rosalind_picard.png',
		characterName: 'Rosalind Picard',
		youtubeUrl: 'https://www.youtube.com/watch?v=kq0VO1FqE6I'
	},
	{
		id: 341,
		title: 'Adobe Research',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/gavin_miller.png',
		characterName: 'Gavin Miller',
		youtubeUrl: 'https://www.youtube.com/watch?v=q0mokx-iiws'
	},
	{
		id: 342,
		title: 'TensorFlow',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/rajat_monga.png',
		characterName: 'Rajat Monga',
		youtubeUrl: 'https://www.youtube.com/watch?v=NERNE4UThHU'
	},
	{
		id: 343,
		title: 'Compilers, LLVM, Swift, TPU, and ML Accelerators',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/chris_lattner.png',
		characterName: 'Chris Lattner',
		youtubeUrl: 'https://www.youtube.com/watch?v=yCd3CzGSte8'
	},
	{
		id: 344,
		title: 'DeepMind AlphaStar, Language, and Sequences ',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/oriol_vinyals.png',
		characterName: 'Oriol Vinyals',
		youtubeUrl: 'https://www.youtube.com/watch?v=Kedt2or9xlo'
	},
	{
		id: 345,
		title: 'Generative Adversarial Networks',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/ian_goodfellow.png',
		characterName: 'Ian Goodfellow',
		youtubeUrl: 'https://www.youtube.com/watch?v=Z6rxFNMGdn0'
	},
	{
		id: 346,
		title: 'Tesla Autopilot',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/elon_musk.png',
		characterName: 'Elon Musk',
		youtubeUrl: 'https://www.youtube.com/watch?v=dEv99vxKjVI'
	},
	{
		id: 347,
		title: 'OpenAI and AGI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/greg_brockman.png',
		characterName: 'Greg Brockman',
		youtubeUrl: 'https://www.youtube.com/watch?v=bIrEM2FbOLU'
	},
	{
		id: 348,
		title: 'Revolutionary Ideas in Science, Math, and Society',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eric_weinstein.png',
		characterName: 'Eric Weinstein',
		youtubeUrl: 'https://www.youtube.com/watch?v=2wq9x2QcZN0'
	},
	{
		id: 349,
		title: 'Reinforcement Learning, Planning, and Robotics',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/leslie_kaelbling.png',
		characterName: 'Leslie Kaelbling',
		youtubeUrl: 'https://www.youtube.com/watch?v=Er7Dy8rvqOc'
	},
	{
		id: 350,
		title: 'Cruise Automation',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/kyle_vogt.png',
		characterName: 'Kyle Vogt',
		youtubeUrl: 'https://www.youtube.com/watch?v=YUYagvESisE'
	},
	{
		id: 351,
		title: 'Brains, Minds, and Machines',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tomaso_poggio.png',
		characterName: 'Tomaso Poggio',
		youtubeUrl: 'https://www.youtube.com/watch?v=aSyZvBrPAyk'
	},
	{
		id: 352,
		title: 'Poker and Game Theory',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/tuomas_sandholm.png',
		characterName: 'Tuomas Sandholm',
		youtubeUrl: 'https://www.youtube.com/watch?v=b7bStIQovcY'
	},
	{
		id: 353,
		title: 'Godel Machines, Meta-Learning, and LSTMs',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/juergen_schmidhuber.png',
		characterName: 'Juergen Schmidhuber',
		youtubeUrl: 'https://www.youtube.com/watch?v=3FIo6evmweo'
	},
	{
		id: 354,
		title: 'Deep Reinforcement Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/pieter_abbeel.png',
		characterName: 'Pieter Abbeel',
		youtubeUrl: 'https://www.youtube.com/watch?v=l-mYLq6eZPY'
	},
	{
		id: 355,
		title: 'Long-Term Future of AI',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/stuart_russell.png',
		characterName: 'Stuart Russell',
		youtubeUrl: 'https://www.youtube.com/watch?v=KsZI5oXBC0k'
	},
	{
		id: 356,
		title: 'Google',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/eric_schmidt.png',
		characterName: 'Eric Schmidt',
		youtubeUrl: 'https://www.youtube.com/watch?v=hIC9FQpxVwQ'
	},
	{
		id: 357,
		title: 'Python',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/guido_van_rossum.png',
		characterName: 'Guido van Rossum',
		youtubeUrl: 'https://www.youtube.com/watch?v=ghwaIiE3Nd8'
	},
	{
		id: 358,
		title: 'Stack Overflow',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/jeff_atwood.png',
		characterName: 'Jeff Atwood',
		youtubeUrl: 'https://www.youtube.com/watch?v=KZkYSSE8HHI'
	},
	{
		id: 359,
		title: 'Statistical Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/vladimir_vapnik.png',
		characterName: 'Vladimir Vapnik',
		youtubeUrl: 'https://www.youtube.com/watch?v=STFcvzoxVw4'
	},
	{
		id: 360,
		title: 'Deep Learning',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/yoshua_bengio.png',
		characterName: 'Yoshua Bengio',
		youtubeUrl: 'https://www.youtube.com/watch?v=azOmzumh0vQ'
	},
	{
		id: 361,
		title: 'AI in the Age of Reason',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/steven_pinker.png',
		characterName: 'Steven Pinker',
		youtubeUrl: 'https://www.youtube.com/watch?v=epQxfSp-rdU'
	},
	{
		id: 362,
		title: 'Consciousness ',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/christof_koch.png',
		characterName: 'Christof Koch',
		youtubeUrl: 'https://www.youtube.com/watch?v=piHkfmeU7Wo'
	},
	{
		id: 363,
		title: 'Life 3.0',
		imgUrl: 'https://lexfridman.com/files/thumbs_ai_podcast/max_tegmark.png',
		characterName: 'Max Tegmark',
		youtubeUrl: 'https://www.youtube.com/watch?v=Gi8LUnhP5yU'
	}
];

const sortedPopularEpisodesIds = [
	313, 300, 252, 122, 310, 336, 185, 345, 276, 293, 332, 136, 188, 154, 267, 45, 355, 301, 208, 351,
	286, 127, 272, 137, 194
].map((el) => 365 - el);

const popularEpisodes = episodes
	.filter((episode) => sortedPopularEpisodesIds.includes(episode.id))
	.sort((a, b) => sortedPopularEpisodesIds.indexOf(a.id) - sortedPopularEpisodesIds.indexOf(b.id));

export { socialIcons, supportIcons, links, episodes, popularEpisodes };
