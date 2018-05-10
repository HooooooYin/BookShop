import {put, call} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import axios from 'axios'
import {GET_SUCCESS, GET_FAILED, CONFIRM_SUCCESS, UPLOAD_URL, URL_INIT, UPDATE_TOKEN, SET_BOOK_SHOW, UPDATE_COMMENT, UPDATE_INFO, UPLOAD_IMAGE} from './actions'


//请求主页
export function* IndexRequest(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const data = yield call(axios.get, '/bookshop/index');
        const token = data.data.token;
        yield put({type: GET_SUCCESS, data});
        yield put({type: UPDATE_TOKEN, token});
        
        
    }catch(error){
        yield put({type: GET_FAILED, error});
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchIndexRequest(){
    yield* takeEvery('INDEX_REQUEST', IndexRequest);
}

//搜索页面请求
export function* SearchRequset(action){
    try{
        const set = typeof(action.params.token) === 'undefined'? '' : action.params.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, `/bookshop${action.url}`, {
            params:{
                page_num: action.params.page_num,
                key: action.params.key
            }

        });
        if(temp.status !== 200) {
            const message = temp.data.message;
            alert(message)
        }
        const data = temp.data
        const token = data.token
        yield put({type: GET_SUCCESS, data});
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        yield put({type: GET_FAILED, error});
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchSearchRequest(){
    yield* takeEvery('SEARCH_REQUEST', SearchRequset)
}


//个人页面请求
export function* PersonalRequset(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, '/bookshop/users/information');
        if(temp.status !== 200){
            const message = temp.data.message;
            alert(message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: GET_SUCCESS, data});
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        yield put({type: GET_FAILED, error});
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchPersonalRequest(){
    yield* takeEvery('PERSONAL_REQUEST', PersonalRequset)
}

//提交订单
export function* confirmOrder(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, '/bookshop/orders/confirm', {
            params:{
                book_id: action.bookid,
                score: action.score
            }
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        const index = action.index
        yield put({type: CONFIRM_SUCCESS, index});
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchConfirmOrder(){
    yield* takeEvery('CONFIRM_ORDER', confirmOrder)
}

//书籍页面请求
export function* BookRequset(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, `/bookshop/books`, {
            params:{book_id:action.bookid}
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        const src = data.book_pic[0].photo_url
        yield put({type: UPDATE_TOKEN, token})
        yield put({type: SET_BOOK_SHOW, src})
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchBookRequest(){
    yield* takeEvery('BOOK_REQUEST', BookRequset)
}

//设置图片urls
export function* setUrl(action){
    let data;
    yield put({type: URL_INIT})
    for(let i = 0; i < action.images.length;i++){
        try{
            let formdata = new FormData();
            yield formdata.append('smfile', action.images[i]);
            const temp = yield call(axios.post, '/api/upload', formdata);
            yield data = temp.data.data.url;
            yield put({type: UPLOAD_URL, url: data});
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }
            else{
                alert(error.message)
            }
        }
    }
}

export function* watchSetUrl(){
    yield* takeEvery('SET_URL', setUrl)
}

//设置头像
export function* setIcon(action){
    try{
        yield put({type: URL_INIT})
        let formdata = new FormData();
        yield formdata.append('smfile', action.image);
        const temp = yield call(axios.post, '/api/upload', formdata);
        console.log(temp)
        const icon = temp.data.data.url;
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const res =  yield call(axios.post, '/bookshop/users/icon', {icon: icon})
        yield put({type: UPLOAD_IMAGE, image: icon});
        const token = res.data.token;
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchSetIcon(){
    yield* takeEvery('SET_ICON', setIcon)
}


//用户界面请求
export function* UserRequset(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, '/bookshop/users', {
            params:{user_id: action.userid}
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: UPDATE_TOKEN, token})
        yield put({type: GET_SUCCESS, data});
    }catch(error){
        yield put({type: GET_FAILED, error});
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
}

export function* watchUserRequest(){
    yield* takeEvery('USER_REQUEST', UserRequset)
}


//用户下单
export function* Buy(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.post, `/bookshop/orders`, {
            book_id: action.bookid,
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: UPDATE_TOKEN, token})
        alert(`下单成功，卖家联系方式为：\n 电话号码：${data.phone_num} \n QQ:${data.qq} \n 微信号: ${data.wechat_id}`)
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchBuy(){
    yield* takeEvery('BUY', Buy)
}

//用户收藏
export function* Save(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.post, `/bookshop/favors`, {
            book_id: action.bookid,
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchSave(){
    yield* takeEvery('SAVE', Save)
}

//修改密码
export function* Modify(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.post, `/bookshop/users/password`, {
            old_password: action.old_password,
            new_password1: action.new_password1,
            new_password2: action.new_password2
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchModify(){
    yield* takeEvery('MODIFY', Modify)
}

//留言

export function* Comment(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.post, `/bookshop/comments`, {
            book_id: action.book_id,
            text: action.text,
            parent: action.parent,
            time: action.time,
            page_num: action.page_num
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = temp.data.token
        const page_num = action.page_num
        const comment = data.comment
        yield put({type: UPDATE_TOKEN, token})
        yield put({type: UPDATE_COMMENT, comment, page_num})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchComment(){
    yield* takeEvery('COMMENT', Comment)
}

//查看留言
export function* getComment(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' : action.token;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.get, `/bookshop/comments`, {
            params:{
                book_id: action.book_id,
                page_num: action.page_num,
                parent: action.parent
            }
        });
        if(temp.status !== 200){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        const comment = data.comment
        const page_num = action.page_num
        yield put({type: UPDATE_COMMENT, comment, page_num})
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchGetComment(){
    yield* takeEvery('GETCOMMENTS', getComment)
}

//更改个人信息请求

  export function* setInfo(action){
    try{
        const set = typeof(action.token) === 'undefined'? '' :action.token ;
        const info = action.info;
        axios.defaults.headers['Authorization'] = `token:${set}`;
        const temp = yield call(axios.post, `/bookshop/users/information`, {
            username: info.user_name,
            school: info.school,
            major: info.major,
            grade: info.grade,
            phone_num: info.phone_num,
            wechat_id: info.wechat_id,
            qq: info.qq,
        });
        if(temp.status !== 201){
            const message = temp.data.message;
            alert (message);
        }
        const data = temp.data
        const token = data.token
        yield put({type: UPDATE_INFO, info: data})
        yield put({type: UPDATE_TOKEN, token})
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }
        else{
            alert(error.message)
        }
    }
    
}

export function* watchSetInfo(){
    yield* takeEvery('SET_INFO', setInfo)
}