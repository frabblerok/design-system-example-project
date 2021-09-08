<template>
    <!-- header goes here -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- Accounts header -->
    <HeaderMain header="Accounts" />
    <!-- Banking -->
    <SectionBanking header="Banking" />
    <!-- Credit Cards -->
    <SectionCC header="Credit Cards" />
    <!-- Loans -->
    <SectionLoan header="Loans" />
    <!-- Investing -->
    <SectionInvest header="Investing" />
    <!-- Relationship Manager -->
    <SectionRM header="Relationship Manager" />
    <!-- footer goes here -->
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import HeaderMain from "./components/HeaderMain.vue";
import SectionBanking from "./components/SectionBanking.vue";
import SectionCC from "./components/SectionCC.vue";
import SectionLoan from "./components/SectionLoan.vue";
import SectionInvest from "./components/SectionInvest.vue";
import SectionRM from "./components/SectionRM.vue";
export default {
    name: "App",
    components: {
        //HelloWorld,
        HeaderMain,
        SectionBanking,
        SectionCC,
        SectionLoan,
        SectionInvest,
        SectionRM,
    },
};
//expandable

// const { RbcExpandable } = index;
// var app = new Vue({
//   el: "#app",
//   name: 'expandable',
//   components: {
//     RbcExpandable
//   }
// });

//icon

//     export default {
// 	name: 'icon',
// 	components: {
// 		RbcIcon
// 	}
// };

//button

// const { RbcButton } = index;
// var app = new Vue({
//   el: "#app",
//   name: "button-example",
//   components: { RbcButton },
// });

//caption

//   const { RbcCaption } = index;
// var app = new Vue({
//   el: "#app",
//   name: "caption-example",
//   components: {
//     RbcCaption
//   }
// });

//card
	// const { RbcCard } = index;
	// var app = new Vue({
	// 	el: "#app",
	// 	name: "card-example",
	// 	components: { RbcCard }
	// });
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
