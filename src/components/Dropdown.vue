<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot>
                <!-- 传入自定义模版 -->
            </slot>
        </ul>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, onMounted, onUnmounted, ref, Ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef: Ref<HTMLElement | null> = ref(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
      // setup()只能执行一次：watch()监测响应式组件变化
      isOpen.value = false
    }
    })
    return {
        isOpen,
        toggleOpen,
        dropdownRef
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled * {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
}
</style>
