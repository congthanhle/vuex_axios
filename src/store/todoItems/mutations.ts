import type { MutationTree } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'

const mutations: MutationTree<ItemsState> = {
  setItems: (state: ItemsState, items: Item[]) => {
    state.items = items
  },
  addItem: (state: ItemsState, item: Item) => {
    state.items.push(item)
  },
  deleteItem: (state: ItemsState, id: string) => {
    state.items = state.items.filter((item) => item.id !== id)
  },
  editItem: (state: ItemsState, editeditem: Item) => {
    state.items = state.items.map((item: Item) => (item.id === editeditem.id ? editeditem : item))
  },
  
}
export default mutations
