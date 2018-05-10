import {SET_LOGIN, SET_REGISTER, SLIDER_SHOW, SET_PRESENT, set_present, SET_BOOKON, GET_SUCCESS, GET_FAILED, SET_USER, SET_LISTON, SET_SEARCH, GET_SEARCH_PARAMS, SET_SCORE, CONFIRM_SUCCESS, confirmSuccess, UPDATE_TOKEN, UPDATE_INFO, UPLOAD_URL, URL_INIT, SET_BOOK_SHOW, UPDATE_COMMENT, UPLOAD_IMAGE, CANCEL_USER, SET_MODIFY} from './actions'
import {combineReducers} from 'redux'
import _ from 'lodash'

function setLogin(state = false, action){
    switch(action.type){
        case SET_LOGIN:
            return _.cloneDeep(action.login)
        default:
            return state
    }
}

function setRegister(state = false, action){
    switch(action.type){
        case SET_REGISTER:
            return _.cloneDeep(action.register)
        default:
            return state
    }
}

function setModify(state = false, action){
    switch(action.type){
        case SET_MODIFY:
            return _.cloneDeep(action.modify)
        default:
            return state
    }
}

function sliderShow(state = ['active', '', '', '', '', ''], action){
    switch(action.type){
        case SLIDER_SHOW:
            return _.cloneDeep(state.map((show, index) => {
                    if(index === action.index){ 
                        return 'active'
                    }
                    else{
                        return ' '
                    }
                }))
        default:
            return state
    }
}

function setPresent(state = 0, action){
    switch(action.type){
        case SET_PRESENT:
            return _.cloneDeep(action.index)
        default:
            return state
    }
}

function setBookOn(state = ['on', '', '', ''], action){
    switch(action.type){
        case SET_BOOKON:
            return _.cloneDeep(state.map((show, index) => {
                    if(index === action.index){ 
                        return 'on'
                    }
                    else{
                        return ' '
                    }
                }))
        default:
            return state
    }
}

function setBookNow(state = 0, action){
    switch(action.type){
        case SET_PRESENT:
            return _.cloneDeep(action.index)
        default:
            return state
    }
}

function getdata(state = {}, action){
    switch(action.type){
        case GET_SUCCESS:
            return _.cloneDeep(action.data)
        case GET_FAILED:
            return _.cloneDeep(action.error)
        case CONFIRM_SUCCESS:
            return Object.assign({}, state, {
                order_book: state.order_book.map((order, index) => {
                    if(index === action.index){
                        return Object.assign({}, order, {
                            order_status: "sold"
                        })
                    }
                    return order
                }) 
            })
        case UPDATE_INFO:
            return Object.assign({}, state, {
                information: action.info
            })
        case UPDATE_COMMENT:
            return Object.assign({}, state, {
                comment: _.cloneDeep(action.comment),
                page_num: _.cloneDeep(action.page_num)
            })
        default:
            return state
    }
}

function setUser(state = {}, action){
    switch(action.type){
        case SET_USER:
            return _.cloneDeep(action.user)
        case UPDATE_TOKEN:
            return Object.assign({}, state, {
                token: action.token
            })
        case CANCEL_USER:
            return _.cloneDeep({})
        default:
            return state
    }
}

function setListOn(state = ['onlist', '', '', ''], action){
    switch(action.type){
        case SET_LISTON:
            return _.cloneDeep(state.map((show, index) => {
                    if(index === action.index){ 
                        return 'onlist'
                    }
                    else{
                        return ' '
                    }
                }))
        default:
            return state
    }
}

function setSearch(state= '/books/search_result', action){
    switch(action.type){
        case SET_SEARCH:
            return _.cloneDeep(action.options)
        default:
            return state
    }
}

function getSearchParams(state = {}, action){
    switch(action.type){
        case GET_SEARCH_PARAMS:
            return Object.assign({}, action.params)
        default:
            return state
    }
}



function setScore(state = 5, action){
    switch(action.type){
        case SET_SCORE:
            return _.cloneDeep(action.score)
        default:
            return state
    }
}

function uploadUrl(state = [], action){
    switch(action.type){
        case URL_INIT:
            return _.cloneDeep([])
        case UPLOAD_URL:
            return [...state, action.url]
        case UPLOAD_IMAGE:
            return _.cloneDeep(action.image)
        default:
            return state
    }
}

function setBookShow(state = '', action){
    switch(action.type){
        case SET_BOOK_SHOW:
            return _.cloneDeep(action.src)
        default:
            return state
    }
}

const userState = combineReducers({
    login: setLogin,
    register: setRegister,
    modify: setModify,
    show: sliderShow,
    present: setPresent,
    bookon: setBookOn,
    booknow: setBookNow,
    data: getdata,
    user: setUser,
    liston: setListOn,
    search_url: setSearch,
    search_params: getSearchParams,
    score: setScore,
    upload_url: uploadUrl,
    bookshow: setBookShow
})
export default userState;