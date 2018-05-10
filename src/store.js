import {createStore, applyMiddleware, compose} from 'redux'
import userState from './reducers'
import { SET_LOGIN, SET_REGISTER, SLIDER_SHOW, SET_PRESENT, SET_BOOKON, SET_BOOKNOW, SET_USER, SET_LISTON, SET_SEARCH, GET_SEARCH_PARAMS, SET_SCORE, CONFIRM_SUCCESS, UPDATE_TOKEN, UPDATE_INFO, UPLOAD_URL, SET_BOOK_SHOW, UPLOAD_IMAGE, CANCEL_USER, SET_MODIFY} from './actions';
import { watchIndexRequest, watchSearchRequest, watchPersonalRequest, watchConfirmOrder, watchSetUrl, watchBookRequest, watchUserRequest, watchBuy, watchSave, watchModify, watchComment, watchGetComment, watchSetInfo, watchSetIcon} from './sagas'
import createSagaMiddleware from 'redux-saga'
import {loadState} from './localStorage'

const SagaMiddleware = createSagaMiddleware();
const store = createStore(userState,
  loadState(), 
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
SagaMiddleware.run(watchSetInfo);
SagaMiddleware.run(watchSetIcon);


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
  onModify: (modify) => dispatch({
    type: SET_MODIFY,
    modify: modify
  }),
  indexRequest: (token) => dispatch({
    type: 'INDEX_REQUEST',
    token: token
  }),
  setUser: (user) => dispatch({
    type: SET_USER,
    user: user
  }),
  onCancel: () => dispatch({
    type:CANCEL_USER
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
  }),
  setInfo: (info, token) => dispatch({
    type: 'SET_INFO',
    info: info,
    token: token
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

//设置分类搜索的内容
export const setSort = () => ({
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
   confirmOrder: (bookid, score, index, token) => dispatch({
    type: 'CONFIRM_ORDER',
    bookid: bookid,
    score: score,
    index: index,
    token: token
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
  bookRequest: (bookid, token) => dispatch({
    type: 'BOOK_REQUEST',
    bookid: bookid,
    token: token
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
  comment: (token, book_id, text, parent, time, page_num) => dispatch({
    type: 'COMMENT',
    book_id: book_id,
    token: token,
    text: text,
    parent: parent,
    time: time,
    page_num: page_num
  }),
  getComments: (token, book_id, page_num, parent) => dispatch({
    type:'GETCOMMENTS',
    book_id: book_id,
    token: token,
    page_num: page_num,
    parent, parent
  })
})


//显示用户
export const User = () => ({
  userRequest: (userid, token) => dispatch({
    type: 'USER_REQUEST',
    userid: userid,
    token: token
  })
})

//修改密码
export const Modify = () => ({
  modify: (token, old_password, new_password1, new_password2) => dispatch({
    type: 'MODIFY',
    token: token,
    old_password: old_password,
    new_password1: new_password1,
    new_password2: new_password2
  })
})

//上传头像
export const uploadImage = () => ({
  uploadIcon: (image, token) => dispatch({
    type: 'SET_ICON',
    image: image,
    token: token
  }),
  updateToken: (token) => dispatch({
    type: UPDATE_TOKEN,
    token: token
  })
})