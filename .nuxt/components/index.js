export { default as ConnectionManager } from '../../components/ConnectionManager.vue'
export { default as MyFeed } from '../../components/MyFeed.vue'
export { default as OpenChannel } from '../../components/OpenChannel.vue'

export const LazyConnectionManager = import('../../components/ConnectionManager.vue' /* webpackChunkName: "components/ConnectionManager" */).then(c => c.default || c)
export const LazyMyFeed = import('../../components/MyFeed.vue' /* webpackChunkName: "components/MyFeed" */).then(c => c.default || c)
export const LazyOpenChannel = import('../../components/OpenChannel.vue' /* webpackChunkName: "components/OpenChannel" */).then(c => c.default || c)
