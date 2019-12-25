<template>
  <div>
    <div v-show="hideDetails">
      <div class="row justify-content-start w-100 px-3">
        <AddBug />
      </div>
      <hr />
      <TableDataBugs @toggleDetails="hideDetails=false" />
    </div>
    <hr />
    <DetailsBug @toggleDetails="hideDetails=true" v-show="!hideDetails" />
  </div>
</template>

<script>
import AddBug from "../components/AddBug";
import TableDataBugs from "../components/TableDataBugs";
import DetailsBug from "../components/DetailsBug";
export default {
  name: "bugs",
  components: {
    AddBug,
    TableDataBugs,
    DetailsBug
  },
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style>
</style>
