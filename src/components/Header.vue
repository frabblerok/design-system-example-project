<style scoped>
    .header {
        background: #ffffff;
        padding: 100px 0 50px;
    }
</style>

<template>
  <div>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1">{{ title }}</h1>
                </div>
            </div>
        </div>
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