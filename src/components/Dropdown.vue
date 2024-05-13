<template>
    <div class="dropdown">
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
import { defineComponent, ref } from 'vue'

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
    const toggleOpen = () => {
        isOpen.value = !isOpen.value
    }
    return {
        isOpen,
        toggleOpen
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
