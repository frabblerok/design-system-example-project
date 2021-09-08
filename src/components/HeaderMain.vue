
<template>
<section>
    <div class="row">
        <div class="col"><h1>{{ header }}</h1></div>
        <div class="col"><rbc-icon icon="ellipsis-v" /></div>
    </div>
</section>
</template>

<script>
export default {
  name: 'HeaderMain',
  props: {
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
