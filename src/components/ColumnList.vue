<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
                <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
                <h5 class="card-title">{{ column.title }}</h5>
                <p class="card-text text-left">{{ column.description }}</p>
                <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
declare function require(moduleName: string): string;
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // PropType：接受泛型，将Array的构造类型返回传入泛型
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/img.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>
