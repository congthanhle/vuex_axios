import type { MutationTree } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'

const mutations: MutationTree<ItemsState> = {
  SET_ITEMS: (state: ItemsState, items: Item[]) => {
    state.items = items
  },
  ADD_ITEM: (state: ItemsState, item: Item) => {
    state.items.push(item)
  },
  DELETE_ITEM: (state: ItemsState, id: string) => {
    state.items = state.items.filter((item) => item.id !== id)
  },
  EDIT_ITEM: (state: ItemsState, editeditem: Item) => {
    state.items = state.items.map((item: Item) => (item.id === editeditem.id ? editeditem : item))
  },
  
}
export default mutations
