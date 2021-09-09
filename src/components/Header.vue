<style scoped>
    .header {
        padding: 100px 0 0;
    }
</style>

<template>
  <div>
    <header class="header">
    <h1>{{ title }}</h1>
    test
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
  },
  data() {
    return {
        title: 'My Credit Cards'
    };
  },
};
</script>