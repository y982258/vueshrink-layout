<template>
  <div id="app">
    <SideBar></SideBar>
        <div class="right-container" :class="{'collapse-ml': isCollapse}">
            <TopBar></TopBar>
            <router-view />
        </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TopBar from "./components/topBar";
import SideBar from "./components/sideBar";
export default {
  computed: {
    ...mapState({
      isCollapse: (state) => state.isCollapse,
    }),
  },
  components: {
    SideBar,
    TopBar
  },
};
</script>


<style lang="less" scoped>
.right-container{
    width: calc(100% - 180px);
    height: 100%;
    margin-left: 180px;
    transition: 0.28s;
}
.collapse-ml{
    width: calc(100% - 64px);
    margin-left: 64px;
}
</style>
