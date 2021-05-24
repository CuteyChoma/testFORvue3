<!--
 * @Author: your name
 * @Date: 2021-05-18 16:28:24
 * @LastEditTime: 2021-05-20 15:45:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \choma-vue3-with-vite\src\views\mapguide.vue
-->
<template>
  <div id="mapguide-container">
    <div class="map">mapguide</div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data: DataProps = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>#mapguide-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
