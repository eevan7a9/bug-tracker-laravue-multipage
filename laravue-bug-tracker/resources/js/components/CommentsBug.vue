<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <AddCommentBug />
      <hr />
      <h1 class="mt-3 font-weight-bold">Comments :</h1>
      <div class="card border-secondary mt-3" v-for="comment in comments" :key="comment.id">
        <div class="card-header border-secondary">
          <h5>{{comment.user}}</h5>
        </div>
        <div class="card-body">
          <p>{{comment.message}}</p>
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
  data() {
    return {
      comments: [
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
