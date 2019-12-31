<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="hideDetails" key="1">
        <AddTester />
        <hr />
        <TableDataTesters @toggleDetails="hideDetails=false" />
      </div>
      <DetailsTester v-if="!hideDetails" @toggleDetails="hideDetails=true" key="2" />
    </transition>
  </div>
</template>

<script>
import AddTester from "../components/AddTester";
import TableDataTesters from "../components/TableDataTesters";
import DetailsTester from "../components/DetailsTester";
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
