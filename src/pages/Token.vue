<template>
	<div>
		<section class="py-20">
			<div class="container mx-auto max-w-6xl px-10">
				<div class="grid grid-cols-1 md:grid-cols-2 md:gap-16">
					<div class="col-span-1 m-auto">
						<lottie-player autoplay="" loop="" mode="normal" src="ani/2.json" class="object-cover object-center w-full h-full" background="transparent"></lottie-player>
					</div>
					<div class="col-span-1 m-auto">
						<h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"><span class="text-white bg-red-400">PLZMA</span> TOKEN</h2>
						<p class="mb-4">PLZMA is a unique deflationary token. Unlike other common tokens, PLZMA TOKEN burns on the transfer, the burns are random between 5-10% for each transaction.</p>

						<div class="relative flex flex-col md:flex-row md:space-x-4">
							<a href="https://app.uniswap.org/#/swap?outputCurrency=0x201eeffbbff3c43460c5d7a216883c02b26effef" class="inline-flex items-center justify-center px-6 py-3 text-white bg-red-400 rounded-xl sm:w-auto sm:mb-0">
								BUY ON UNISWAP
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 ml-1">
									<path d="M5 12h14M12 5l7 7-7 7"></path></svg
							></a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
				<div class="grid grid-cols-2 gap-20 md:grid-cols-5">
					<div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
						<a href="https://info.uniswap.org/#/tokens/0x201eeffbbff3c43460c5d7a216883c02b26effef"> <img src="img/tags/uniswap.png" /></a>
					</div>
					<div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
						<a href="https://etherscan.io/token/0x201eeffbbff3c43460c5d7a216883c02b26effef"> <img src="img/tags/etherscan.png" /></a>
					</div>
					<div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
						<a href="https://coinmarketcap.com/">
							<img src="img/tags/coinmarketcap.png" />
						</a>
					</div>
					<div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
						<a href="https://www.coingecko.com/">
							<img src="img/tags/coingecko.png" />
						</a>
					</div>
					<div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
						<a href="https://matcha.xyz/markets/1/0x201eeffbbff3c43460c5d7a216883c02b26effef"> <img src="img/tags/matcha.png" /></a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
