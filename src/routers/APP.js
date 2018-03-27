import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../containers/MainPage'
import SearchPage from '../containers/SearchPage'
import MenuBar from '../containers/MenuBar'
import {FootBar} from '../components/FootBar'
import MyPage from '../containers/MyPage'
import UserPage from '../containers/UserPage'
import BookSale from '../containers/BookSale'
import BookPage from '../containers/BookPage'
import SearchUser from '../containers/SearchUser'

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component = {MainPage}/>
            <Route path = '/books/search_result' component = {SearchPage} />
            <Route path = '/users/search_result' component = {SearchUser} />
            <Route path = '/users/information' component = {MyPage} />
            <Route path = '/users/:user_id' component = {UserPage} />
            <Route exact path = '/books' component = {BookSale} />
            <Route path = '/books/:book_id' component = {BookPage} />
        </Switch>
    </main>
)

export const APP = () => (
    <div>
        <MenuBar />
        <Main />
        <FootBar />
    </div>    
)