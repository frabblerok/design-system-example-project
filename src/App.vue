<template>
    <div>
        <!-- header goes here -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <!-- Accounts header -->
        <TopBar />
        <Header />
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Header from './components/Header.vue';

export default {
    name: "App",
    components: {
        TopBar,
        Header
    },
};
</script>

<style>
#app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
