import { configureStore } from '@reduxjs/toolkit'
import helpSlicer from './Features/helpSlicer'

export const store = configureStore({
  reducer: {
    helps:helpSlicer
  },
})