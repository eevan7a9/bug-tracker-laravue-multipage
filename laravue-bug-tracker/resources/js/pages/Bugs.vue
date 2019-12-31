<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="hideDetails" key="1">
        <AddBug />
        <hr />
        <TableDataBugs @toggleDetails="hideDetails=false" />
      </div>
      <div v-if="!hideDetails" key="2">
        <EditBug />
        <hr />
        <DetailsBug @toggleDetails="hideDetails=true" />
      </div>
    </transition>
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
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style>
</style>
