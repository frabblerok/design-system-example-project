<template>
    <div>
        <!-- header goes here -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <!-- Accounts header -->
        <TopBar />
        <Header />
        <Dashboard />
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Header from './components/Header.vue';
import Dashboard from './components/Dashboard.vue';

export default {
    name: "App",
    components: {
        TopBar,
        Header,
        Dashboard
    },
};
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
