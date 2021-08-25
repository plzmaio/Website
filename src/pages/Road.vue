<template>
	<section class="px-4 py-16 md:py-32">
		<div class="container flex flex-wrap flex-col mx-auto max-w-5xl px-8">
			<div v-for="(collapse, index) of collapses" :key="index" class="flex relative pb-10 sm:items-center sm:w-1/2">
				<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
					<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
				</div>
				<div
					class="
            bg-white
            rounded-full
            flex-shrink-0
            w-6
            h-6
            mt-10
            sm:mt-0
            inline-flex
            items-center
            justify-center
            relative
            z-10
            title-font
            font-medium
            text-3xl
            py-8
          "
				>
					<div v-if="collapse.done">✔</div>
					<div v-if="!collapse.done">✌</div>
				</div>
				<div
					class="
            flex-grow
            md:pl-8
            pl-6
            flex
            sm:items-center
            items-start
            flex-col
            sm:flex-row
          "
				>
					<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
						<p class="leading-relaxed">{{ collapse.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				collapses: [
					{
						done: true,
						text: 'Uniswap Listing',
					},
					{
						done: true,
						text: 'First big burn/donation',
					},
					{
						done: false,
						text: 'Extensive marketing including influencers, personal charitable celebrity connections, and Medium articles',
					},
					{
						done: false,
						text: 'Coingecko and Coinmarketcap listing',
					},
					{
						done: false,
						text: 'Additional medical field partnerships',
					},
					{
						done: false,
						text: 'Continued targeted marketing and promotion ',
					},
					{
						done: false,
						text: 'International plasma and platelet donation incentivization program',
					},
					{
						done: false,
						text: 'Proprietary social media app for donation tracking and competition',
					},
					{
						done: false,
						text: 'PLZMA NFTs with integrated stats',
					},
					{
						done: false,
						text: 'PLZMA mobile donation vehicles and outposts',
					},
				],
			};
		},
	};
</script>
