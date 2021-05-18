import { createAction, createReducer } from '@reduxjs/toolkit'
import {
  TemplateType,
  TemplateTypeOne,
} from '../Types/TemplateType'

export const updateTemplateType = createAction<TemplateTypeOne>(
  'UPDATE_TEMPLATE_TYPE_ONE'
)
export const resetTemplateTypeStore = createAction('RESET_TEMPLATE_TYPE')

const initialState: TemplateType = {
  TempTypeOne: {
    variable1 : '1'
  },
}

export const templateStore = createReducer(initialState, (builder) => {
  builder.addCase(updateTemplateType, (state, action) => ({
    ...state,
    TempTypeOne: action.payload,
  }))
  builder.addCase(resetTemplateTypeStore, (state, action) => initialState)
})