<template>
	<div>
		<section class="py-20 container mx-auto max-w-6xl">
			<div class="grid gap-6 grid-cols-1 md:grid-cols-4 ">
				<div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
					<div>
						<p class="mb-2 text-sm font-medium">
							Current Supply
						</p>
						<p class="text-lg font-semibold">{{ totalSupply }} PLZMA</p>
					</div>
				</div>

				<div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
					<div>
						<p class="mb-2 text-sm font-medium">
							Burned
						</p>
						<p class="text-lg font-semibold">{{ 10000000000 - totalSupply }} PLZMA</p>
					</div>
				</div>

				<div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
					<div>
						<p class="mb-2 text-sm font-medium ">
							Next Burn
						</p>
						<p class="text-lg font-semibold ">{{ managerbalance }} PLZMA</p>
					</div>
				</div>

				<div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
					<div>
						<p class="mb-2 text-medium font-medium ">
							Next Donation
						</p>
						<p class="text-lg font-semibold">{{ managerbalance / 860000 }} PINTS</p>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	import { ethers } from 'ethers';
	import { formatEther } from 'ethers/lib/utils';
	import tokenAbi from '../assets/token.json';

	var provider = new ethers.providers.getDefaultProvider('mainnet');
	const lcf = new ethers.Contract('0x201eeffbbff3c43460c5d7a216883c02b26effef', tokenAbi, provider);

	export default {
		data: function() {
			return {
				totalSupply: 0,
				managerbalance: 0,
			};
		},
		async mounted() {
			const checkupply = await lcf.totalSupply();
			const manager = await lcf.balanceOf('0x89F106B2Ff84070A8F93f4703d07987FA000C632');

			this.totalSupply = parseFloat(formatEther(checkupply)).toFixed(0);
			this.managerbalance = parseFloat(formatEther(manager)).toFixed(0);
		},
	};
</script>
