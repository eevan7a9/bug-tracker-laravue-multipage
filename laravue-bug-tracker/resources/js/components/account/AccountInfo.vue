<template>
  <div class="col-sm-8 mt-5">
    <b-card border-variant="primary" header-border-variant="primary">
      <template v-slot:header>
        <span class="font-weight-bold">Account Info</span>
      </template>
      <div class="row">
        <div class="col-md-4">
          <b-img src="https://via.placeholder.com/250" alt="profile" rounded fluid thumbnail></b-img>
        </div>
        <div class="col-md-8 d-flex flex-column justify-content-center">
          <div>
            <h5 class="font-weight-bold">Username</h5>
            <h6 class="font-weight-bold">myemail@gmail.com</h6>
            <code>Developer</code>
          </div>
          <div>
            <b-button variant="outline-primary" class="mt-4">Edit</b-button>
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
