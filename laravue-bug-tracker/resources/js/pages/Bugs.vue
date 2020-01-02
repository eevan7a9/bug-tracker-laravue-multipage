<template>
  <div>
    <div v-if="hideDetails">
      <AddBug />
      <hr />
      <TableDataBugs @toggleDetails="hideDetails=false" />
    </div>
    <div v-if="!hideDetails">
      <EditBug />
      <hr />
      <DetailsBug @toggleDetails="hideDetails=true" />
    </div>
  </div>
</template>

<script>
import AddBug from "../components/AddBug";
import TableDataBugs from "../components/TableDataBugs";
import DetailsBug from "../components/DetailsBug";
import EditBug from "../components/EditBug";
export default {
  name: "bugs",
  components: {
    AddBug,
    TableDataBugs,
    DetailsBug,
    EditBug
  },
  props: {
    ShowDetails: Boolean
  },
  data() {
    return {
      hideDetails: true
    };
  },
  created() {
    if (this.ShowDetails) {
      this.hideDetails = false;
    }
    console.log(this.ShowDetails);
  }
};
</script>

<style>
</style>
