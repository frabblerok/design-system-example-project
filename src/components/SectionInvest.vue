<template>
    <section>
        <div class="row">
            <div class="col">
                <h3>{{ header }}</h3>
            </div>
            <div class="col"><rbc-icon icon="ellipsis-v" /></div>
        </div>
        <div class="row">
            <div class="col">
                <rbc-expandable arrow arrow-position-x="left">
                    <template #trigger>
                        <span>
                            John’s Investing
                        </span>
                    </template>
                    <div class="row">
                        <div class="col">
                            <h4>STATUS</h4>
                            <!-- graph image goes here -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h4>Profit</h4>
                            <span>$3425.00</span>
                        </div>
                        <div class="col">
                            <h4>CURRENT BALANCE</h4>
                            <span>$65,425.00</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <rbc-button>
                                Make Payment
                            </rbc-button>
                        </div>
                    </div>
                </rbc-expandable>
            </div>
            <div class="col"><rbc-icon icon="ellipsis-v" /></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionInvest",
    props: {
        header: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
