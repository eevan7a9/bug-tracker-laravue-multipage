<template>
  <div>
    <DetailsDeveloper v-if="showDetails == 'developer' && user.developer" />
    <DetailsTester v-if="showDetails == 'tester' && user.tester" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DetailsDeveloper from "../components/developers/DetailsDeveloper";
import DetailsTester from "../components/testers/DetailsTester";
export default {
  name: "user",
  components: {
    DetailsDeveloper,
    DetailsTester
  },
  data() {
    return {
      showDetails: ""
    };
  },
  computed: mapGetters(["user", "developer_details", "tester_details"]),
  methods: {
    ...mapActions(["getDeveloperDetails", "getTesterDetails"])
  },
  created() {
    if (this.user.developer) {
      if (this.user.id === this.developer_details.id) {
        this.showDetails = "developer";
      } else {
        this.getDeveloperDetails(this.user.id).then(() => {
          this.showDetails = "developer";
        });
      }
    } else if (this.user.tester) {
      if (this.user.id === this.tester_details.id) {
        this.showDetails = "tester";
      } else {
        this.getTesterDetails(this.user.id).then(() => {
          this.showDetails = "tester";
        });
      }
    }
  },

  watch: {
    user() {
      if (this.user.developer) {
        this.getDeveloperDetails(this.user.id).then(() => {
          this.showDetails = "developer";
        });
      } else if (this.user.tester) {
        this.getTesterDetails(this.user.id).then(() => {
          this.showDetails = "tester";
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
