

import {createStore} from 'redux'
import {formReducer} from '../Reducers/formReducer'

export const store = createStore (formReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)