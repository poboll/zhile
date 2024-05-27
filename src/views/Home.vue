<template>
  <div class="container">
    <img src="../../src/assets/img.png" alt="Banner Image" class="banner-image"/>
    <br>
    <button @click="startWriting" class="btn btn-primary">开始写文章</button>
    <br>
    <br>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  }
]

interface UserProps {
  isLogin: boolean;
  name: string;
}

const currentUser: UserProps = {
  isLogin: true,
  name: 'mdo'
}

export default defineComponent({
  name: 'HomeView',
  components: {
    ColumnList
  },
  setup () {
    const startWriting = () => {
      // Logic to start writing an article
      console.log('Start writing button clicked')
    }

    return {
      list: testData,
      currentUser,
      startWriting
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
