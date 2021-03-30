import Vue from "vue";

import PureTaskList from "../../src/components/PureTaskList.vue";

import { WithPinnedTasks } from "../../src/components/PureTaskList.stories";

it("Renders pinned Tasks at the start of the listI", () => {
  const Constructor = Vue.extend(PureTaskList);

  const vm = new Constructor({
    propsData: WithPinnedTasks.args
  }).$mount();

  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  expect(firstTaskPinned).not.toBe(null);
});
