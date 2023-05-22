<template>
  <!-- TODO:https://zhuanlan.zhihu.com/p/487624607
                gird 布局
        -->
  <div class="container">
    <div style="background: black" v-for="item in 100" :key="item">item-1</div>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: {
    courseList: [],
  },
};
</script>

<style>
.container {
  display: grid;
  /* grid-template-columns: 250px 250px 250px 250px 250px;
     */
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: 250px 250px 250px;
  grid-gap: 10px;
  /* grid-template-rows: repeat(5,20%); */
}
</style>
