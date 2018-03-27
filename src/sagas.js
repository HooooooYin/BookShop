import {put, call} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import axios from 'axios'
import {GET_SUCCESS, GET_FAILED, CONFIRM_SUCCESS, UPLOAD_URL, URL_INIT, UPDATE_TOKEN, SET_BOOK_SHOW, UPDATE_COMMENT} from './actions'
import './mock'

//请求主页
export function* IndexRequest(){
    try{
        const data = yield call(axios.get, '/index');
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
    }
}

export function* watchIndexRequest(){
    yield* takeEvery('INDEX_REQUEST', IndexRequest);
}

//搜索页面请求
export function* SearchRequset(action){
    try{
        const temp = yield call(axios.get, action.url, action.params);
        const data = temp.data
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
    }
}

export function* watchSearchRequest(){
    yield* takeEvery('SEARCH_REQUEST', SearchRequset)
}


//个人页面请求
export function* PersonalRequset(action){
    try{
        const temp = yield call(axios.get, '/users/information', action.token);
        const data = temp.data
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
    }
}

export function* watchPersonalRequest(){
    yield* takeEvery('PERSONAL_REQUEST', PersonalRequset)
}

//提交订单
export function* confirmOrder(action){
    try{
        const temp = yield call(axios.get, '/users/confirm', {
            book_id: action.bookid,
            score: action.score
        });
        const data = temp.data
        const index = action.index
        yield put({type: CONFIRM_SUCCESS, index});
    }catch(error){
        yield call(alert, error)
    }
}

export function* watchConfirmOrder(){
    yield* takeEvery('CONFIRM_ORDER', confirmOrder)
}

//书籍页面请求
export function* BookRequset(action){
    try{
        const temp = yield call(axios.get, `/books`, action.bookid);
        const data = temp.data
        const token = data.book.token
        const src = data.book.book_pic[0].photo_url
        yield put({type: UPDATE_TOKEN, token})
        yield put({type: SET_BOOK_SHOW, src})
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
    }
}

export function* watchBookRequest(){
    yield* takeEvery('BOOK_REQUEST', BookRequset)
}

//设置图片urls
export function* setUrl(action){
    let data;
    yield put({type: URL_INIT})
    for(let  i = 0; i < action.images.length;i++){
        try{
            let formdata = new FormData();
            yield formdata.append('smfile', action.images[i]);
            const temp = yield call(axios.post, 'https://sm.ms/api/upload', formdata);
            yield data = temp.data.data.url;
            yield put({type: UPLOAD_URL, url: data});
        }catch(error){
            yield call(alert, error)
        }
    }
}

export function* watchSetUrl(){
    yield* takeEvery('SET_URL', setUrl)
}


//用户界面请求
export function* UserRequset(action){
    try{
        const temp = yield call(axios.get, `/users`, action.userid);
        const data = temp.data
        const token = data.other.token
        yield put({type: UPDATE_TOKEN, token})
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
    }
}

export function* watchUserRequest(){
    yield* takeEvery('USER_REQUEST', UserRequset)
}


//用户下单
export function* Buy(action){
    const temp = yield call(axios.post, `/orders`, {
        book_id: action.bookid,
        token: action.token
    });
    const data = temp.data
    const token = data.token
    yield put({type: UPDATE_TOKEN, token})
}

export function* watchBuy(){
    yield* takeEvery('BUY', Buy)
}

//用户收藏
export function* Save(action){
    const temp = yield call(axios.post, `/favors`, {
        book_id: action.bookid,
        token: action.token
    });
    const data = temp.data
    const token = data.token
    yield put({type: UPDATE_TOKEN, token})
}

export function* watchSave(){
    yield* takeEvery('SAVE', Save)
}

//修改密码
export function* Modify(action){
    const temp = yield call(axios.post, `/users/password`, {
        token: action.token,
        old_password: action.old_password,
        new_password1: action.new_password1,
        new_password2: action.new_password2
    });
    const data = temp.data
    const token = data.token
    yield put({type: UPDATE_TOKEN, token})
}

export function* watchModify(){
    yield* takeEvery('MODIFY', Modify)
}

//留言

export function* Comment(action){
    const temp = yield call(axios.post, `comments`, {
        token: action.token,
        book_id: action.book_id,
        text: action.text,
        parent: action.parent,
        time: action.time
    });
    const data = temp.data
    const token = data.token
    yield put({type: UPDATE_TOKEN, token})
}

export function* watchComment(){
    yield* takeEvery('COMMENT', Comment)
}

//查看留言
export function* getComment(action){
    const temp = yield call(axios.get, `/comments`, {
        token: action.token,
        book_id: action.book_id,
        page_num: action.page_num,
        parent: action.parent
    });
    const data = temp.data
    const token = data.token
    const comment = data.comment
    console.log(comment)
    const page_num = action.page_num
    yield put({type: UPDATE_COMMENT, comment, page_num})
    yield put({type: UPDATE_TOKEN, token})
}

export function* watchGetComment(){
    yield* takeEvery('GETCOMMENTS', getComment)
}