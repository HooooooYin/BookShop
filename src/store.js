import {createStore, applyMiddleware, compose} from 'redux'
import userState from './reducers'
import { SET_LOGIN, SET_REGISTER, SLIDER_SHOW, SET_PRESENT, SET_BOOKON, SET_BOOKNOW, SET_USER, SET_LISTON, SET_SEARCH, GET_SEARCH_PARAMS, SET_SCORE, CONFIRM_SUCCESS, UPDATE_TOKEN, UPDATE_INFO, UPLOAD_URL, SET_BOOK_SHOW} from './actions';
import { watchIndexRequest, watchSearchRequest, watchPersonalRequest, watchConfirmOrder, watchSetUrl, watchBookRequest, watchUserRequest, watchBuy, watchSave, watchModify, watchComment, watchGetComment} from './sagas'
import createSagaMiddleware from 'redux-saga'

const SagaMiddleware = createSagaMiddleware();
const store = createStore(userState, 
  compose(
    applyMiddleware(SagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;
export const state = store.state;
const dispatch = store.dispatch;
SagaMiddleware.run(watchIndexRequest);
SagaMiddleware.run(watchSearchRequest);
SagaMiddleware.run(watchPersonalRequest);
SagaMiddleware.run(watchConfirmOrder);
SagaMiddleware.run(watchSetUrl);
SagaMiddleware.run(watchBookRequest);
SagaMiddleware.run(watchUserRequest);
SagaMiddleware.run(watchBuy);
SagaMiddleware.run(watchSave);
SagaMiddleware.run(watchModify);
SagaMiddleware.run(watchComment);
SagaMiddleware.run(watchGetComment);

//设置登录/注册状态
export const mapDispatchToProps = (dispatch) =>({
  onLogin: (login) => dispatch({
    type: SET_LOGIN,
    login: login
  }),
  onRegister: (register) => dispatch({
    type: SET_REGISTER,
    register: register
  }),
  indexRequest: () => dispatch({
    type: 'INDEX_REQUEST'
  }),
  setUser: (user) => dispatch({
    type: SET_USER,
    user: user
  })
})
//设置轮播图状态
export const setShow = () => ({
  setShow: (index) => dispatch({
    type: SLIDER_SHOW,
    index: index
  }),
  setPresent: (index) => dispatch({
    type: SET_PRESENT,
    index: index
  })
})
//设置书本展示状态
export const setBook = () => ({
  setOn: (index) => dispatch({
    type: SET_BOOKON,
    index: index
  }),
  setNow: (index) => dispatch({
    type: SET_BOOKNOW,
    index: index
  })
})

//显示个人页面显示的栏目
export const Personal = () => ({
  setListOn: (index) => dispatch({
    type: SET_LISTON,
    index: index
  }),
  personalRequest: (token) => dispatch({
    type: 'PERSONAL_REQUEST',
    token: token
  }),
  updateToken: (token) => dispatch({
    type: UPDATE_TOKEN,
    token: token
  }),
  updateInfo: (info) => dispatch({
    type: UPDATE_INFO,
    info: info
  })
})

//设置搜索的内容
export const setSearch = () => ({
  setOptions: (options) => dispatch({
    type: SET_SEARCH,
    options: options
  }),
  getSearchParams: (params) => dispatch({
    type: GET_SEARCH_PARAMS,
    params: params
  })
})

//搜索页面
export const Search = () => ({
  searchRequest: (url, params) => dispatch({
    type: 'SEARCH_REQUEST',
    url: url,
    params: params
  })
})


//打分
export const StarScore = () => ({
  setScore: (score) => dispatch({
    type: SET_SCORE,
    score: score
  })
})

//提交订单
export const Order = () => ({
   confirmOrder: (bookid, score, index) => dispatch({
    type: 'CONFIRM_ORDER',
    bookid: bookid,
    score: score,
    index: index
  })
})


//书籍
export const UploadBook = () => ({
  uploadUrl: (images) => dispatch({
    type: 'SET_URL',
    images: images
  }),
  updateToken: (token) => dispatch({
    type: UPDATE_TOKEN,
    token: token
  })
})

//显示书籍
export const Book = () => ({
  bookRequest: (bookid) => dispatch({
    type: 'BOOK_REQUEST',
    bookid: bookid
  }),
  setBookShow: (src) => dispatch({
    type: SET_BOOK_SHOW,
    src: src
  }),
  buyBook: (bookid, token) => dispatch({
    type: 'BUY',
    bookid: bookid,
    token: token
  }),
  saveBook: (bookid, token) => dispatch({
    type: 'SAVE',
    bookid: bookid,
    token: token
  }),
  comment: (token, bookid, text, parent, time) => dispatch({
    type: 'COMMENT',
    bookid: bookid,
    token: token,
    text: text,
    parent: parent,
    time: time
  }),
  getComments: (token, bookid, page_num, parent) => dispatch({
    type:'GETCOMMENTS',
    bookid: bookid,
    token: token,
    page_num: page_num,
    parent, parent
  })
})


//显示用户
export const User = () => ({
  userRequest: (userid) => dispatch({
    type: 'USER_REQUEST',
    userid: userid
  })
})

//修改密码
export const Login = () => ({
  modify: (token, old_password, new_password1, new_password2) => dispatch({
    type: 'MODIFY',
    token: token,
    old_password: old_password,
    new_password1: new_password1,
    new_password2: new_password2
  })
})

