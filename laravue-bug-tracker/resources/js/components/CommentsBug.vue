<template>
  <div class="row justify-content-center">
    <div class="col-md-8 bg-custom-light py-3">
      <AddCommentBug :bug_id="bug_id" />
      <hr />
      <h1 class="mt-3 font-weight-bold">Comments :</h1>
      <div class="card border-secondary mt-3" v-for="comment in comments" :key="comment.id">
        <div class="card-header border-secondary">
          <h5>{{comment.user.email }}</h5>
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
export default {
  components: {
    AddCommentBug
  },
  props: {
    comments: Array,
    bug_id: Number
  },
  data() {
    return {
      commentser: [
        {
          id: 1,
          user: "user1",
          message: "Lorem, mur a adipisicing elit. Rem, dolor."
        },
        {
          id: 2,
          user: "user2",
          message: "Lorem,r adipisicing elit. Rem, dolor."
        }
      ]
    };
  }
};
</script>
<style scoped>
.bg-custom-light {
  background-color: #d5dbe1 !important;
}
</style>
