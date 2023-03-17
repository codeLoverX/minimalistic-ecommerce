import { createReducer } from "@reduxjs/toolkit"
import {
  addReadMoreAction,
  removeReadMoreAction,
  setReadMoreAction
} from "./readmore-action"

// import { roundOffTwoDP } from './readmore'

export const cartState = {
  isReadMore: true,
  isReadMoreWarning: false,
  readMoreText: null,
}

const readmoreReducer = createReducer(cartState, (builder) => {
  builder.addCase(addReadMoreAction, (_state, { payload }) => {

    let {readMoreText} = payload

      return {
        isReadMore: true,
        isReadMoreWarning: true,
        readMoreText
      }
  })

  builder.addCase(setReadMoreAction, (_state) => {

      return {
        isReadMore: false,
        isReadMoreWarning: true,
        readMoreText: null
      }
  })


  builder.addCase(removeReadMoreAction, (_state,) => {
    return {
      isReadMore: false,
      isReadMoreWarning: false,
      readMoreText: null,
    }
  })
})

export default readmoreReducer
