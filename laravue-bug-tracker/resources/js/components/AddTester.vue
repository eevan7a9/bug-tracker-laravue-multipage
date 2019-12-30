<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-3"
      @click="visible = !visible"
      variant="success"
    >
      New Tester
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </span>
    </b-button>
    <b-collapse id="collapse-3" v-model="visible" class="mt-2">
      <b-card
        header="Adding a new Tester..."
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="primary"
      >
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <form @submit.prevent="submit">
              <div class="form-group">
                <label for="tester" class="font-weight-bold">User's E-mail address</label>
                <input
                  type="email"
                  class="form-control"
                  name="tester"
                  v-model="email"
                  placeholder="people@email.com"
                  required
                />
                <small class="form-text text-muted">To be assign as Tester</small>
              </div>
              <button class="btn btn-primary float-right" type="submit">Add</button>
            </form>
          </div>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      visible: false,
      email: ""
    };
  },
  methods: {
    ...mapActions(["addTester"]),
    submit() {
      this.addTester(this.email)
        .then(res => {
          this.$swal.fire("Tester Added!", res, "success");
          this.email = "";
          this.visible = false;
        })
        .catch(() => {
          this.$swal.fire(
            "Unknown Email!",
            "Failed, unregistered E-mail.",
            "error"
          );
        });
    }
  }
};
</script>

<style lang="scss">
</style>
