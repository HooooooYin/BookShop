export const SET_LOGIN = 'SET_LOGIN'
export const SET_REGISTER = 'SET_REGISTER'
export const SET_MODIFY = 'SET_MODIFY'
export const SLIDER_SHOW = 'SLIDER_SHOW'
export const SET_PRESENT = 'SET_PRESENT'
export const SET_BOOKON = 'SET_BOOKON'
export const SET_BOOKNOW = 'SET_BOOKNOW'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILED = 'GET_FAILED'
export const SET_USER = 'SET_USER'
export const SET_LISTON = 'SET_LISTON'
export const SET_SEARCH = 'SET_SEARCH'
export const GET_SEARCH_PARAMS = 'GET_SEARCH_PARAMS'
export const SET_SCORE = 'SET_SCORE'
export const CONFIRM_SUCCESS = 'CONFIRM_SUCCESS'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const UPDATE_INFO = 'UPDATE_INFO'
export const UPLOAD_URL = 'UPLOAD_URL'
export const URL_INIT = 'URL_INIT'
export const SET_BOOK_SHOW = 'SET_BOOK_SHOW'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const CANCEL_USER = 'CANCEL_USER'

export function set_login(login){
    return {type:SET_LOGIN, login}
}

export function set_register(register){
    return {type:SET_REGISTER, register}
}

export function set_modify(modify){
    return {type:SET_MODIFY, modify}
}

export function slider_show(index){
    return {type:SLIDER_SHOW, index}
}

export function set_present(index) {
    return {type:SET_PRESENT, index}    
}

export function set_bookon(index){
    return {type:SET_BOOKON, index}
}

export function set_booknow(index){
    return {type:SET_BOOKNOW, index}
}

export function getSuccess(data){
    return {type:GET_SUCCESS, data}
}

export function getFailed(error){
    return {type:GET_FAILED, error}
}

export function setUser(user){
    return {type:SET_USER, user}
}

export function setListOn(index){
    return {type: SET_LISTON, index}
}

export function setSearch(options){
    return {type: SET_SEARCH, options}
}

export function getSearchParams(params){
    return {type: GET_SEARCH_PARAMS, params}
}

export function setScore(score){
    return {type: SET_SCORE, score}
}

export function confirmSuccess(index){
    return {type: CONFIRM_SUCCESS, index}
}

export function updateToken(token){
    return {type: UPDATE_TOKEN, token}
}

export function updateInfo(info){
    return {type: UPDATE_INFO, info}
}

export function uploadUrl(url){
    return {type: UPLOAD_URL, url}
}

export function urlInit(){
    return {type: URL_INIT}
}

export function set_book_show(src){
    return {type: SET_BOOK_SHOW, src}
}

export function updateComment(comment, page_num){
    return {type:UPDATE_COMMENT, comment, page_num}
}

export function uploadImage(image){
    return {type: UPLOAD_IMAGE, image}
}

export function cancelUser(){
    return {type:CANCEL_USER}
}