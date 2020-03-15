<template>
  <div>
    <DetailsDeveloper v-if="showDeveloper && user.developer" />
    <div v-if="user.tester">
      <h1>Tester</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DetailsDeveloper from "../components/developers/DetailsDeveloper";
export default {
  name: "user",
  data() {
    return {
      showDeveloper: false
    };
  },
  computed: mapGetters(["user", "developer_details"]),
  components: {
    DetailsDeveloper
  },
  methods: {
    ...mapActions(["getDeveloperDetails"])
  },
  created() {
    if (this.user.developer) {
      if (this.user.id === this.developer_details.id) {
        this.showDeveloper = true;
      } else {
        this.getDeveloperDetails(this.user.id).then(() => {
          this.showDeveloper = true;
        });
      }
    }
  },

  watch: {
    user() {
      if (this.user.developer) {
        this.getDeveloperDetails(this.user.id).then(() => {
          this.showDeveloper = true;
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
