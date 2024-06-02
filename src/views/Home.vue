<template>
  <div class="container">
    <h2>{{biggerColumnLen}}</h2>
    <img src="../../src/assets/img.png" alt="Banner Image" class="banner-image"/>
    <br>
    <button @click="startWriting" class="btn btn-primary">开始写文章</button>
    <br>
    <br>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    const biggerColumnLen = computed(() => store.getters.biggerColumnsLen)
    return {
      list,
      biggerColumnLen
    }
  }
})
</script>

<style>
.container {
  text-align: center;
}
.banner-image {
  width: 30%; /* 调整宽度为50% */
  height: auto; /* 保持高度自动调整 */
  object-fit: contain; /* 保持图片比例 */
  margin: 0 auto; /* 设置上下居中对齐 */
  display: block; /* 确保margin: 0 auto;生效 */
}
button {
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
