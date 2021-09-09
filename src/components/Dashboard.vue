<style lang="scss" scoped >
.dashboard {
  .container {
    margin-top: -50px;
  }

  &__card-image {
    margin-bottom: 50px;
  }

  &__dollar-amount {
    color: #333333;
  }

    .list-divider {
        & > .list-divider-item {
            border-color: #e9e9e9;
            padding: 24px 0;

            &:last-child {
                border-bottom: 0;
                padding-bottom: 0;
            }
        }
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
                  <span class="c-rbc-blue"> View Card Details </span>
                </template>
                <div class="b-sun-tint-3 p-1">
                  <p>Card details here.</p>
                </div>
              </rbc-expandable>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="dashboard__card-select">
              <rbc-select
                v-model="cardSelected"
                :options="cardOptions"
                label="SELECT A CARD"
              />
            </div>
            <p class="mt-5 caption">
              <span class="bold"
                >Scheduled payment: $345.00 on Jul 29, 2021. </span
              ><a href="#">Make Changes</a>.
            </p>
            <div class="row">
              <div class="col-sm-6">
                <p class="mt-5 mb-0 caption">AVAILABLE CREDIT</p>
                <span class="dashboard__dollar-amount text-number"
                  >$8,000.00</span
                >
                <p class="caption mb-0 mt-5">CITY NATIONAL REWARDS</p>
                <span class="bold">Points Earned: 71,355</span> <br />
                <a href="">Redeem My Points</a>
                <a href="">Get Priority Points</a>
              </div>
              <div class="col-sm-6">
                <p class="mt-5 mb-0 caption">MINIMUM PAYMENT</p>
                <span class="dashboard__dollar-amount text-number mb-4"
                  >$75.00</span
                >
                <p class="caption mb-4">Due on Apr 27, 2021</p>
                <rbc-button class="mb-4"> Make a Payment </rbc-button>

                <div class="dashboard__auto-pay">
                  <rbc-icon
                    circle
                    circle-border
                    icon="dollar-sign"
                    size="medium"
                    class="c-rbc-blue mr-3"
                  />
                  AutoPay: <a class="ml-2" href="#">OFF</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <rbc-card>
                <h3 class="h4 mb-4">I want to...</h3>
              <ul class="list-divider">
                  <li class="list-divider-item"><rbc-icon
                    icon="file-alt"
                    size="large"
                    class="c-rbc-blue mr-3"
                  />See Statements</li>
                  <li class="list-divider-item"><rbc-icon
                    icon="file-alt"
                    size="large"
                    class="c-rbc-blue mr-3"
                  />See Payment Activity</li>
                  <li class="list-divider-item"><rbc-icon
                    icon="bell"
                    size="large"
                    class="c-rbc-blue mr-3"
                  />Manage Alerts</li>
                  <li class="list-divider-item"><rbc-icon
                    icon="file-times"
                    size="large"
                    class="c-rbc-blue mr-3"
                  />Go Paperless</li>
                  <li class="list-divider-item"><rbc-icon
                    icon="lock-alt"
                    size="large"
                    class="c-rbc-blue mr-3"
                  />Lock this Card</li>
              </ul>
            </rbc-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RbcExpandable, RbcSelect, RbcButton, RbcIcon, RbcCard } from "cnolib";

export default {
  name: "Dashboard",
  components: {
    RbcExpandable,
    RbcSelect,
    RbcButton,
    RbcIcon,
    RbcCard,
  },
  data() {
    return {
      cardSelected: null,
      cardOptions: [
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
        {
          label: "Individual - Travel Rewards *9867",
          value: "*9867",
        },
      ],
    };
  },
};
</script>