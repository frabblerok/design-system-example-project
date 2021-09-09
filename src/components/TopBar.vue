<template>
  <div>
    <rbc-top-nav
      id="TopBar"
      :items="links"
      logo="cnb-rbc-integrated-reversed.svg"
      logo-label="CNO"
      logo-link="#"
    />
  </div>
</template>

<script>
import { RbcTopNav } from "../../public/index.umd.min.js";
export default {
  name: "TopBar",
  components: {
    RbcTopNav,
  },
  data() {
    return {
      links: [
        {
          name: "Account Summary",
        },
        {
          name: "My Accounts",
        },
        {
          name: "Payments & Transfers",
        },
        {
          name: "Open an Account",
        },
        {
          name: "Sign Out",
        },
      ],
    };
  },
};
</script>