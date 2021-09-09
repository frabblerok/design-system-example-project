<style lang="scss" scoped >
.dashboard {
  .container {
    margin-top: -100px;
  }

  &__card-image {
    margin-bottom: 34px;
  }

  &__dollar-amount {
    color: #333333;
  }
}
</style>

<template>
  <div>
    <div class="dashboard">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <img src="card.png" title="card" class="dashboard__card-image" />

            <span class="caption">CURRENT BALANCE</span> <br />
            <span class="dashboard__dollar-amount text-number">$7,000.00</span>
            <br />
            <span class="caption">As of April 27, 2021</span>

            <div class="flex-column align-items-stretch mb-2 mt-4">
              <rbc-expandable arrow>
                <template #trigger>
                  <span> View Card Details </span>
                </template>
                <div class="b-sun-tint-3 p-1">
                  <p>
                    Card details here.
                  </p>
                </div>
              </rbc-expandable>
            </div>
          </div>
          <div class="col-sm-4"></div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RbcExpandable } from "cnolib";

export default {
  name: "Dashboard",
  components: {
      RbcExpandable
  },
  data() {
    return {
      title: "My Credit Cards",
    };
  },
};
</script>