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
                            Mercedez B.
                        </span>
                    </template>
                     <div class="row">
                        <div class="col">
                            <h4>Payment Due</h4>
                            <span>$425.00</span>
                        </div>
                        <div class="col">
                            <h4>CURRENT BALANCE</h4>
                            <span>$365,425.00</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h4>DUE STATUS</h4>
                            <span>13% Paid</span>
                        </div>
                        <div class="col">
                            <h4>installments</h4>
                            <span>16 of 120</span>
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
    name: "SectionLoan",
    props: {
        header: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
