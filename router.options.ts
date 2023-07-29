import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'order-form',
      path: '/fer',
      component: () => import('~/components/order/OrderForm.vue').then(r => r.default || r)
    }
  ],
}
