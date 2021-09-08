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
                            Other Infinite Card
                        </span>
                    </template>
                    <div class="p-1">
                        <p>
                            *9867
                        </p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <rbc-icon icon="unlock-alt" />Lock Card
                        </div>
                        <div class="col">
                            AutoPay: <span>On</span>
                            <small>From: <span>Personal Acc.</span></small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h4>Payment Due</h4>
                            <span>$3425.00</span>
                        </div>
                        <div class="col">
                            <h4>Minimum Payment Due</h4>
                            <span>$252.00</span>
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
    name: "SectionCC",
    props: {
        header: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
