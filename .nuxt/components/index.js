export { default as MyFeed } from '../../components/MyFeed.vue'
export { default as OpenChannel } from '../../components/OpenChannel.vue'

export const LazyMyFeed = import('../../components/MyFeed.vue' /* webpackChunkName: "components/MyFeed" */).then(c => c.default || c)
export const LazyOpenChannel = import('../../components/OpenChannel.vue' /* webpackChunkName: "components/OpenChannel" */).then(c => c.default || c)