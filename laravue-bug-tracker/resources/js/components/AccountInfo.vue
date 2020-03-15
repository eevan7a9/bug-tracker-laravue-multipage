<template>
  <div class="col-sm-8 mt-5">
    <b-card>
      <template v-slot:header>Account Info</template>
      <div class="row">
        <div class="col-md-3">
          <b-img src="https://via.placeholder.com/250" alt="profile" rounded fluid thumbnail></b-img>
        </div>
        <div class="col-md-9 d-flex flex-column justify-content-between">
          <div>
            <h5>Username</h5>
            <h6 class="font-weight-bold">myemail@gmail.com</h6>
            <code>Developer</code>
          </div>
          <div>
            <b-button variant="primary">Edit</b-button>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
