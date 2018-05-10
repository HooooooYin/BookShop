import React from 'react'
import '../index.css'
import Star from './Star'
import {connect} from 'react-redux'
import {Order} from '../store'

class OrderList extends React.Component{
  constructor(props){
    super(props);
    this.confirm = this.confirm.bind(this);
  }

  confirm(bookid, index){
    this.props.confirmOrder(bookid, this.props.score, index, this.props.token);
  }

  render(){
    return(
      <ul className = "order" >
        {this.props.orders.map((order, index) => {
          return(
            <li key = {index}> 
              <img src = {order.photo_url} alt=""/>
              <div className = "order-detail" >
                <h3 className="order_title" >{order.book_title}</h3>
                <span>{order.book_price}</span>
                <p>{`卖家： ${order.seller_name}`}</p>
                <p>{`微信: ${order.seller_wechat_id}`}</p>
                <p>{`QQ: ${order.seller_qq}`}</p>
                <p>{`电话号码：${order.seller_phone_num}`}</p>
                {order.order_status === 'selling'? <Star index = {index} /> : null}
              </div>
              {order.order_status === 'selling'?  <button onClick = {()=>{this.confirm(order.book_id, index)}}> 确认订单</button> : <button> 交易完成</button> }
            </li>
          );
        })}
      </ul>
    );
  }
}

function select(state){
  return{
    score: state.score,
    token: state.user.token
  }
}

export default connect(select, Order)(OrderList)