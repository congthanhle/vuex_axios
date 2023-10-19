import type { ActionTree, Commit } from 'vuex/types/index.js'
import type { ItemsState, Item } from '@store/todoItems/state'
import type { RootState } from '@store/index';
import axios from 'axios';
import URL from '@/api'

const actions: ActionTree<ItemsState, RootState> = {
  FETCH_ITEMS: async ({ commit }: { commit: Commit }) => {
    try{
      const res = await axios.get(URL);
      commit('SET_ITEMS', res.data.todos)
    }
    catch(err){

    }
  },
  ADD_ITEM: async ({ commit }: { commit: Commit }, item: Item) => {
    try{
      const res = await axios.post(`${URL}/add`, item);
      res && commit('ADD_ITEM', item)
    }
    catch(err){

    }
  },
  DELETE_ITEM: async ({ commit }: { commit: Commit }, id: string) => {
    try{
      const res = await axios.delete(`${URL}/${id}`);
      res && commit('DELETE_ITEM', id);
    }
    catch(err){

    }
  },
  EDIT_ITEM: async ({ commit }: { commit: Commit }, item: Item) => {
    const {todo, completed} = item;
    try{
      const res = await axios.patch(`${URL}/${item.id}`, {todo, completed});
      res && commit('EDIT_ITEM', item)
    }
    catch(err){
    }
  },

}

export default actions
