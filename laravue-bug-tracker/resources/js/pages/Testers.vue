<template>
  <div>
    <div v-if="hideDetails">
      <AddTester />
      <hr />
      <TableDataTesters @toggleDetails="hideDetails=false" />
    </div>
    <DetailsTester v-if="!hideDetails" @toggleDetails="hideDetails=true" />
  </div>
</template>

<script>
import AddTester from "../components/testers/AddTester";
import TableDataTesters from "../components/testers/TableDataTesters";
import DetailsTester from "../components/testers/DetailsTester";
export default {
  name: "projects",
  components: {
    AddTester,
    TableDataTesters,
    DetailsTester
  },
  data() {
    return {
      hideDetails: true
    };
  }
};
</script>

<style></style>
