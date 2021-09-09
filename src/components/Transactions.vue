<style>
.transactions {
  background: #ffffff;
  padding: 50px 0 0;
}

.rbc-datatable-header {
    padding: 0;
}
</style>

<template lang="html">
	<div class="transactions">
        <div class="container">
            <h4 class="h2">Transactions</h4>
            <rbc-datatable
                id="fatTable"
                title="Pending Transactions"
                :columns="columns"
                :rows="rows"
                :sortable="true"
                :responsive-columns="true"
                :expandable-row="true"
                :side-indicator="true"
                :fat-spacing="true"
                :disable-stripes="true"
            />
        </div>
	</div>
</template>

<script>
import { RbcDatatable } from "cnolib";
export default {
  name: "Transactions",
  components: {
    RbcDatatable,
  },
  data() {
    return {
      numberOfRows: 10,
      columns: [
        {
          header: "Posted Date",
          sortable: true,
          direction: "desc",
          show: true,
          isMandatory: true,
          showForLargeScreen: true,
          showForMediumScreen: true,
          showForSmallScreen: true,
          dataType: "string",
          style: {
            minWidth: "130px",
          },
        },
        {
          header: "Description",
          sortable: true,
          sortDirection: "asc",
          show: true,
          showForLargeScreen: true,
          showForMediumScreen: true,
          showForSmallScreen: false,
          dataType: "string",
          style: {
            minWidth: "105px",
          },
        },
        {
          header: "Category",
          sortable: true,
          sortDirection: "asc",
          show: true,
          showForLargeScreen: true,
          showForMediumScreen: true,
          showForSmallScreen: false,
          dataType: "string",
          style: {
            minWidth: "80px",
          },
        },
        {
          header: "Type",
          sortable: true,
          sortDirection: "asc",
          show: true,
          showForLargeScreen: true,
          showForMediumScreen: false,
          showForSmallScreen: false,
          dataType: "string",
          style: {
            minWidth: "75px",
          },
        },
        {
          header: "Amount",
          sortable: true,
          show: true,
          showForLargeScreen: true,
          showForMediumScreen: true,
          showForSmallScreen: true,
          dataType: "number",
          formatNumber: true,
          formatNumberLang: "en",
          formatNumberDecimal: 2,
          dataUnit: "$",
          dataUnitPosition: "left",
          style: {
            minWidth: "120px",
          },
        },
      ],
    };
  },
  computed: {
    rows() {
      let rows = new Array(this.numberOfRows).fill(0);
      return rows.map((el, i) => {
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
        let descriptions = ["Nike", "Walgreens", "Home Depot", "Amazon"];
        let categories = ["Online Shopping", "Shopping", "Household"];
        let types = ["Purchases", "Credits"];
        const description = random(descriptions);
        const category = random(categories);
        const type = random(types);
        return {
          id: `row${i}`,
          cells: [
            `<span style="white-space: nowrap;">Jul ${this.pad(
              this.rand(1, 31),
              2
            )}, 2021</span><span class="mobile-only">${description}</span>`,
            description,
            category,
            type,
            `${this.rand(-100, 999)}.${this.rand(10, 99)}`,
          ],
          expandableRow: [
            {},
            {
              value:
                "<p><b>Reference Number:</b><br/>3621783612783612783612</p><p><b>Card Name and Number:</b><br/>Individual - Travel Rewards *9867</p><p><b>Merchant Information:</b><br/>AMAZON 574458835599,<br/>South Pasadena, CA</p>",
              datatype: "string",
            },
            {
              value: `<p><b>Country:</b><br/>US-United States of America</p><p><b>Transaction Date:</b><br/>Apr 27, 2021</p><p class="tablet"><b>Transaction Type:</b><br/> ${type}<br/></p><p class="mobile"><b>Category:</b><br/> ${category}</p>`,
              datatype: "string",
            },
            {},
            {
              component: "rbc-button",
              value: "Dispute",
              datatype: "vue",
              align: "right",
              valign: "bottom",
            },
          ],
          expandableRowMobile: {
            value: `<p><b>Reference Number:</b><br/>3621783612783612783612</p><p><b>Card Name and Number:</b><br/>Individual - Travel Rewards *9867</p><p><b>Merchant Information:</b><br/>AMAZON 574458835599,<br/>South Pasadena, CA</p><p><b>Country:</b><br/>US-United States of America</p><p><b>Transaction Date:</b><br/>Apr 27, 2021</p><p class="tablet"><b>Transaction Type:</b><br/> ${type}<br/></p><p class="mobile"><b>Category:</b><br/> ${category}</p>`,
            datatype: "string",
            action: {
              component: "rbc-button",
              value: "Dispute",
              datatype: "vue",
              align: "right",
              valign: "bottom",
            },
          },
          sideIndicatorColor: Math.floor(Math.random() * 2)
            ? "secondary"
            : "primary",
        };
      });
    },
  },
  methods: {
    rand(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
  },
};
</script>