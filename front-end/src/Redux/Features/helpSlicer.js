import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  help: [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || []
}

export const helpSlice = createSlice({
  name: 'helps',
  initialState,
  reducers: {
    setHelp: (state, action) => {
      state.help = action.payload
    },
    postHelp: (state, action) => {
      state.help = [...state.help,action.payload]
    },
    deleteHelp: (state, action) => {
      state.help = state.help.filter(elem=>elem._id!==action.payload._id)
    },
    searchHelp: (state, action) => {
      state.help =[... state.help.filter(elem=>elem.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))]
    },
    AZHelp: (state) => {
      state.help = state.help.sort((a,b)=>a.title.localeCompare(b.title))
    },
    ZAHelp: (state) => {
      state.help = state.help.sort((a,b)=>b.title.localeCompare(a.title))
    },
    setFavorite:(state, action) => {
      let elemIndex = state.favorite.findIndex(elem=>elem._id === action.payload._id)
      if(elemIndex === -1){
        state.favorite = [...state.favorite,action.payload]
        localStorage.setItem('favorite',JSON.stringify([...state.favorite]))
      }else{
        state.favorite = state.favorite.filter(elem=>elem._id !== action.payload._id)
        localStorage.setItem('favorite',JSON.stringify([...state.favorite]))
      }
    },
    setBasket:(state, action) => {
      const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
      if(elemIndex===-1){
          state.basket = [...state.basket,{...action.payload,count:1}]
          localStorage.setItem('basket',JSON.stringify([...state.basket]))
      }else{
          state.basket[elemIndex].count++
          localStorage.setItem('basket',JSON.stringify([...state.basket]))
      }
    },
    removeBasket:(state, action) => {
        state.basket = state.basket.filter(elem=>elem._id !== action.payload._id)
        localStorage.setItem("basket",JSON.stringify([...state.basket]))
    },
    incBasket:(state, action) => {
        const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
        state.basket[elemIndex].count++
        localStorage.setItem("basket",JSON.stringify([...state.basket]))
    },
    decBasket:(state, action) => {
        const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
        state.basket[elemIndex].count--
        if(state.basket[elemIndex].count<=0){
            state.basket = state.basket.filter(elem=>elem._id !==action.payload._id)
        }
        localStorage.setItem("basket",JSON.stringify([...state.basket]))
    }
  },
})

// Action creators are generated for each case reducer function
export const { setHelp,setFavorite,setBasket,removeBasket,decBasket,incBasket,AZHelp,ZAHelp,deleteHelp,postHelp,searchHelp } = helpSlice.actions

export default helpSlice.reducer