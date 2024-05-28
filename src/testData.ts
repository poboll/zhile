export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
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
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  }
]
export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '第一篇文章',
    content: '这是第一篇文章的内容...',
    image: 'http://example.com/image1.jpg',
    createdAt: '2024-05-28',
    columnId: 1
  },
  {
    id: 2,
    title: '第二篇文章',
    content: '这是第二篇文章的内容...',
    image: 'http://example.com/image2.jpg',
    createdAt: '2024-05-27',
    columnId: 2
  },
  {
    id: 3,
    title: '第三篇文章',
    content: '这是第三篇文章的内容...',
    image: 'http://example.com/image3.jpg',
    createdAt: '2024-05-26',
    columnId: 1
  },
  {
    id: 4,
    title: '第四篇文章',
    content: '这是第四篇文章的内容...',
    createdAt: '2024-05-25',
    columnId: 3
  }
]
