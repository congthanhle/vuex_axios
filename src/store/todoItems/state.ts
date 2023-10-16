export interface Item {
  id: string
  todo: string
  completed: boolean,
  userId: number
}

export interface ItemsState {
  items: Item[]
}

const state: ItemsState = {
  items: []
}

export default state
