import {MenuOption, NIcon} from "naive-ui";
import {Component, h} from "vue";
import MyNuxtLink from "~/components/shared/NuxtLink";
import {
  BookOutline as BookIcon,
  CreateOutline as Create,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
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
          to: {
            name: 'order',
          }
        },
        { default: () => 'Create Order' }
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(Create)
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: false,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
