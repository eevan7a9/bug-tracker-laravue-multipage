<template>
  <div>
    <div class="card">
      <div class="card-header">
        <button class="btn btn-primary" @click="$emit('toggleDetails')">Back</button>
      </div>
      <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p
          class="card-text"
        >Lorem, ipsu minus delectus officia debitis rem, corporis amet maiores itaque. Tempora!</p>
      </div>
      <div class="card-footer text-muted">Footer</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
