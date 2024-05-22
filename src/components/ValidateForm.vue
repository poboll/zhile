<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt() // 需要给监听器使用
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const submitForm = () => {
      context.emit('form-submit', true)
    }
    const callback = (test: unknown) => {
      if (typeof test === 'string') {
        console.log(test as string)
      }
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback) // 需要给监听器使用
    })
    return {
      submitForm
    }
  }
})
</script>
