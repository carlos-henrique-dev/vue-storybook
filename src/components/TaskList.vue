<template>
  <PureTaskList :tasks="tasks" v-on="$listeners" @archive-task="archiveTask" />
</template>

<script>
import PureTaskList from "./PureTaskList";
import { mapState, mapActions } from "vuex";

export default {
  name: "TaskList",
  components: { PureTaskList },

  methods: mapActions(["archiveTask", "pinkTask"]),

  computed: mapState(["tasks"]),
};
</script>
