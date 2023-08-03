import {MenuOption, NIcon} from "naive-ui";
import {Component, h} from "vue";
import MyNuxtLink from "~/components/shared/NuxtLink";
import {
  BookOutline as BookIcon,
  CreateOutline as Create,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  Add,
  HomeOutline as home
} from "@vicons/ionicons5";
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        MyNuxtLink,
        {
          to: '/',
        },
        { default: () => 'Home' }
      ),
    key: 'home',
    icon: renderIcon(home)
  },
  {
    label: 'Order',
    key: 'order-main',
    icon: renderIcon(Create),
    disabled: false,
    children: [
      {
        label: () =>
          h(
            MyNuxtLink,
            {
              to: '/order/orderCreate',
              // name: 'order'
            },
            { default: () => 'Create Order' }
          ),
        key: 'create-order',
        icon: renderIcon(Add)
      },
      {
        label: () =>
          h(
            MyNuxtLink,
            {
              to: '/order/view',
            },
            { default: () => 'View Order' }
          ),
        key: 'view-orders',
        icon: renderIcon(BookIcon)
      },
      {
        label: () =>
          h(
            MyNuxtLink,
            {
              to: '/stole',
            },
            { default: () => 'CREATE STOLE' }
          ),
        key: 'test-stole',
        icon: renderIcon(BookIcon)
      },
      // {
      //   label: () =>
      //     h(
      //       MyNuxtLink,
      //       {
      //         to: '/test',
      //       },
      //       { default: () => 'TRES' }
      //     ),
      //   key: 'tres',
      //   icon: renderIcon(home)
      // },
    ]
  },

]
