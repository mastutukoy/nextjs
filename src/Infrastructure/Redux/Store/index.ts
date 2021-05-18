import { TemplateType } from './../Types/TemplateType';
import { templateStore } from './TemplateStore';
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'

export interface ApplicationReducers {
  templateStore:TemplateType,
}
const reducers: Reducer<ApplicationReducers> = combineReducers({
  templateStore,
})

const makeStore = (reducer) => createStore(reducer, applyMiddleware(ReduxThunk))

export const modifiedStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) return makeStore(reducers)
  else {
    const { persistStore, persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
      key: 'nextjs',
      whitelist: [
        'templateStore',
      ],
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducers)
    const store = { ...makeStore(persistedReducer), __persistor: undefined }

    store.__persistor = persistStore(store)
    return store
  }
}
const wrapper = createWrapper(modifiedStore, { debug: false })

export default wrapper
