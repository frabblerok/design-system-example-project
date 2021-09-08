<template>
    <section>
        <div class="row">
            <div class="col">
                <h2>{{ header }}</h2>
            </div>
            <div class="col"><rbc-icon icon="ellipsis-v" /></div>
        </div>
        <div class="row">
            <div class="col">
                <rbc-expandable arrow arrow-position-x="left">
                    <template #trigger>
                        <span>
                            Personal Acc.
                        </span>
                    </template>
                    <div class="p-1">
                        <p>
                            0000
                        </p>
                    </div>
                </rbc-expandable>
            </div>
            <div class="col"><rbc-icon icon="ellipsis-v" /></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionBanking",
    props: {
        header: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>