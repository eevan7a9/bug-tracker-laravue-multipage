<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-3"
      @click="visible = !visible"
      variant="success"
    >
      New Developer
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
      <b-card>
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="developer">User's E-mail address</label>
              <input
                type="text"
                class="form-control"
                name="developer"
                id="developer"
                placeholder="people@email.com"
              />
              <small class="form-text text-muted">To be assign as Developer</small>
            </div>
            <button class="btn btn-primary float-right">Add</button>
          </div>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
