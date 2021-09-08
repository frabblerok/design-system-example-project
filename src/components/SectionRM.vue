<template>
    <section>
        <rbc-card>
            <div class="row">
                <div class="col">
                    <h3>{{ header }}</h3>
                    <h4>Jenny Goldberg</h4>
                </div>
                <div class="col">
                    <!-- rm picture here -->
                    <rbc-caption
                        avatar-size="large"
                        image="https://placeimg.com/100/100/animals/1"
                        image-text="Jenny Goldberg"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Mobile
                </div>
                <div class="col">
                    <a href="tel:212-555-4567">212-555-4567</a>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Email
                </div>
                <div class="col">
                    <a href="mailto:Jenny.Goldberg@cnb.com">Jenny.Goldberg@cnb.com</a>
                </div>
            </div>
        </rbc-card>
    </section>
</template>

<script>
export default {
    name: "SectionRM",
    props: {
        header: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
