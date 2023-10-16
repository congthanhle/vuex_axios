import type { ActionTree, Commit } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import type { RootState } from '@store/index';
import axios from 'axios';
import URL from '@/api'

const actions: ActionTree<ItemsState, RootState> = {
  fetchItems: async ({ commit }: { commit: Commit }) => {
    try{
      const res = await axios.get(URL);
      commit('setItems', res.data.todos)
    }
    catch(err){

    }
  },
  addItem: async ({ commit }: { commit: Commit }, item: Item) => {
    try{
      const res = await axios.post(`${URL}/add`, item);
      res && commit('addItem', item)
    }
    catch(err){

    }
  },
  deleteItem: async ({ commit }: { commit: Commit }, id: string) => {
    try{
      const res = await axios.delete(`${URL}/${id}`);
      res && commit('deleteItem', id);
    }
    catch(err){

    }
  },
  editItem: async ({ commit }: { commit: Commit }, item: Item) => {
    const {todo, completed} = item;
    try{
      const res = await axios.patch(`${URL}/${item.id}`, {todo, completed});
      res && commit('editItem', item)
    }
    catch(err){
    }
  },

}

export default actions
