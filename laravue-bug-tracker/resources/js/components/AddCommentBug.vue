<template>
  <div class="card border-primary mt-3">
    <div class="card-header border-primary bg-primary">
      <h4 class="text-light">Add Comment :</h4>
    </div>
    <div class="card-body">
      <form @submit.prevent="submit">
        <textarea name="message" v-model="message" class="form-control"></textarea>
        <div class="text-right">
          <button class="btn btn-primary mt-2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    bug_id: Number
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    ...mapActions(["addBugComment"]),
    submit() {
      this.addBugComment({
        bug_id: this.bug_id,
        message: this.message
      }).then(() => {
        this.$swal.fire(
          "Comment Submited!!!",
          "Success new comment is added",
          "success"
        );
      });
    }
  }
};
</script>
