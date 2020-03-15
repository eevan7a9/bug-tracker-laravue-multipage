<template>
  <div class="row justify-content-center">
    <div class="col-md-8 bg-custom-light py-3">
      <AddCommentBug :bug_id="bug_id" />
      <hr />
      <h1 class="mt-3 font-weight-bold">Comments :</h1>
      <div class="card border-secondary mt-3" v-for="comment in comments" :key="comment.id">
        <div class="card-header border-secondary d-flex justify-content-between align-items-center">
          <h5>{{comment.user.email }}</h5>
          <button
            class="btn"
            :class="user.id === comment.user.id || user.admin ? 'btn-danger' : 'btn-secondary'"
            @click="removeComment(comment)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
        <div class="card-body">
          <p>{{comment.message}}</p>
        </div>
      </div>
      <div class="card" v-if="comments.length < 1">
        <div class="card-header bg-secondary"></div>
        <div class="card-body text-center text-uppercase">
          <h3 class="font-weight-bold">Be the first to leave a comment.</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddCommentBug from "./AddCommentBug";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AddCommentBug
  },
  props: {
    comments: Array,
    bug_id: Number
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["deleteBugComment"]),
    removeComment(comment) {
      if (this.user.id === comment.user.id || this.user.admin) {
        this.$swal
          .fire({
            title: "Remove this comment?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Delete"
          })
          .then(result => {
            if (result.value) {
              this.deleteBugComment(comment.id)
                .then(() => {
                  this.$swal.fire(
                    "Success!",
                    "The comment is now Deleted.",
                    "success"
                  );
                })
                .catch(() => {
                  this.$swal.fire(
                    "Failed!",
                    "The comment is not Deleted.",
                    "error"
                  );
                });
            }
          });
      } else {
        this.$swal.fire("Not Allowed!", "The comment is not yours.", "info");
      }
    }
  }
};
</script>
<style scoped>
.bg-custom-light {
  background-color: #d5dbe1 !important;
}
button.btn-secondary {
  cursor: not-allowed;
}
</style>
