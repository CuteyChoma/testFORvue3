<!--
 * @Author: your name
 * @Date: 2021-05-18 16:28:24
 * @LastEditTime: 2021-05-18 18:04:15
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
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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
      var url01 =
        "http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=1e8273a70f52f033099ac302dcdd17c6";
      var url02 =
        "http://t1.tianditu.com/cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=1e8273a70f52f033099ac302dcdd17c6";
      var MAP_URL =
        "http://vip.hangshida-pd.com:6080/arcgis/services/MZXZ/MapServer/WMSServer";
      //初始化 地图
      var leafletMap = L.map("mapDiv", {
        zoomControl: false,
        attributionControl: false,
        crs: L.CRS.EPSG4326,
        minZoom: 4,
        maxZoom: 17,
        zoomSnap: 0.1,
      }).setView([30.685121954461163, 120.03177097007364], 15);

      //将图层加载到地图上，并设置最大的聚焦还有map样式
      L.tileLayer(url01, {
        id: "mapbox.streets",
        tileSize: 256,
        zoomOffset: 1,
      }).addTo(leafletMap);
      L.tileLayer(url02, {
        id: "mapbox.streets",
        tileSize: 256,
        zoomOffset: 1,
      }).addTo(leafletMap);

      let mapLayer = L.tileLayer
        .wms(MAP_URL, {
          maxZoom: 17,
          minZoom: 10,
          blend: true,
          layers: "0",
          format: "image/png",
          transparent: true,
        })
        .addTo(leafletMap);
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
