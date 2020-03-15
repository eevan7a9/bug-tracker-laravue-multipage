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
import AddBug from "../components/bugs/AddBug";
import TableDataBugs from "../components/bugs/TableDataBugs";
import DetailsBug from "../components/bugs/DetailsBug";
import EditBug from "../components/bugs/EditBug";
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
  }
};
</script>

<style>
</style>
