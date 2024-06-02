<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-75">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router' // 获取路由信息
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import { testData, testPosts } from '../testData'
import PostList from '../components/PostList.vue'
export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    const currentId = +route.params.id
    const column = computed(() => store.getters.getColumnById(currentId) || {})
    const list = computed(() => store.getters.getPostsByCid(currentId) || {})
    return {
      column,
      list
    }
  }
})
</script>
