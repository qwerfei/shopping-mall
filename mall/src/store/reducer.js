import { combineReducers } from 'redux-immutable'
import { reducer as headReaducer } from '../common/header/store'
import { reducer as navReaducer } from '../common/nav/store'
import { reducer as homeReaducer } from '../components/home/store'
import { reducer as categoryReaducer } from '../components/category/store'
import { reducer as detailReaducer } from '../components/detail/store'

//通过redux-immutable将state变为immutable对象
const reducer = combineReducers({
    header: headReaducer,
    nav: navReaducer,
    home: homeReaducer,
    category: categoryReaducer,
    detail: detailReaducer,
})

export default reducer