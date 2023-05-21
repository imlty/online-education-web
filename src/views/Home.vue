<template>
  <el-container>
    <!-- TODO: https://cn.vuejs.org/guide/essentials/component-basics.html#content-distribution-with-slots -->

    <!-- 头部 -->
    <el-header>
      <div>
        <table>
          <thead>
            <tr class="head-table">
              <td>在线教育</td>
              <td>首页</td>
              <td>VIP</td>
              <td>学习路线</td>
              <td>粉丝群</td>
              <td>
                <div>搜索 | 登录</div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </el-header>

    <!-- 中部banner -->
    <el-main>
      <div>
        <div style="border-radius: 10px; background: yellow">
          <el-carousel indicator-position="outside">
            <div style="background: blue; height: 100%; width: 20%">test</div>
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 style="float: ">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-main>

    <!-- 中部2 广告位 -->
    <el-main>
      <div>
        <el-card style="border-radius: 10px; background: yellow">
          <div>广告位 -2</div>
        </el-card>
      </div>
    </el-main>

    <!-- 客户售卖 footer -->
    <el-footer>
      <div>
        <!-- Tab 界面 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="tabKey in tabs" :key="tabKey" :label="tabKey">
            <!-- 课程信息 -->
            <course></course>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Course from "@/components/course/Course.vue";
export default {
  components: {
    HelloWorld,
    Course,
  },
  data() {
    return {
      tabs: ["VIP", "SVIP"],
    };
  },
  name: "Home",
  props: {
    options: [],
  },
  methods: {},
};
</script>
<style scoped>
.head-table {
  display: flexs;
  justify-content: space-between;
  align-items: center;
}
thead tr {
  text-align: center;
  line-height: 50px;
}
thead td {
  width: 100px;
  height: 20px;
}
</style>
