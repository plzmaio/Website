<template>
  <div>
    <section class="py-20">
      <div
        class="
          container
          px-4
          flex flex-col
          justify-center
          p-4
          mx-auto
          md:p-8
          max-w-6xl
        "
      >


        <br />
        <div
          class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16"
        >
          <div v-for="(collapse, index) of collapses" :key="index">
            <h5 class="mt-10 mb-3 font-semibold text-gray-900">
              {{ collapse.title }}
            </h5>
            <p>{{ collapse.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapses: [
        {
          title: "What problem is PLZMA trying to solve?",
          text: "There is a substantial problem with an ongoing shortage of plasma and platelets throughout the world. Meanwhile, only 3% of age-eligible people donate blood every year. We are incentivizing donation through various means to help bolster that supply and address the life-threatening issue head-on.",
        },
        {
          title: "Why is a Token needed?",
          text: "Incentives start at an initial point of compensation, but building a token-based ecosystem ensures a sustainable and expandable network to provide continued engagement and eventually positive competition in the lines of blood and plasma supply and donation. We want to build a parallel vested interest between saving lives and crypto market participation.",
        },
        {
          title: "What are the tokenomics of PLZMA?",
          text: "There is a burn of token supply activated on every purchase which ranges randomly between 1-10% which will provide positive upward pressure throughout the entire life of the project. There is also a 2% transaction tax which all goes to the blood transfusion donation wallet, to be donated at periods and to charities determined by the community and developers together.",
        },
        {
          title: "Where can I buy PLZMA?",
          text: "The PLZMA token is native to the ETH chain, so to start, any AMM interacting with that network (such as Uniswap, etc.) will accept a swap from ETH into PLZMA. Shortly, PLZMA will be cementing listings on various centralized exchanges as well, increasing the avenues for purchase.",
        },
      ],
    };
  },
};
</script>
