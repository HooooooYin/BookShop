import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import axios from 'axios'

export class RegisterDialog extends React.Component{
    constructor(props){
      super(props);
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    handleUserNameChange(e){
      this.props.onUsername(e.target.value);
    }

    onSubmit(){
      if(document.getElementById('res_password_1').value !== document.getElementById('res_password_2').value){
        alert('请两次输入同一个密码');
        return;
      }
      if(document.getElementById('res_major').value === "null"){
        alert('请选择专业');
        return;
      }
      axios.post('/bookshop/users', {
        username: document.getElementById('res_username').value,
        password1: document.getElementById('res_password_1').value,
        password2: document.getElementById('res_password_2').value,
        email: document.getElementById('res_email').value,
        school: document.getElementById('res_school').value,
        major: document.getElementById('res_major').value,
        grade: document.getElementById('res_grade').value,
        phone_num: document.getElementById('res_phonenum').value,
        wechat_id: document.getElementById('res_wechat').value,
        qq: document.getElementById('res_qq').value,
      }).then((res) => {
        console.log(res)
        if(res.status=== 201){
            this.props.setUser(res.data)
            window.location.reload();
        }
      }).catch((err) => {
        if(err.response){
          alert(err.response.data.message)
        }
        else{
          alert(err.message)
        }
      })
      this.props.onRegister(false);
    }

    render(){
      const majors = ["历史学", "学前教育", "英语", "翻译", "金融数学", "应用统计学", "生物工程", "地理科学", "新闻学", "软件工程", "嵌入式", "数据库", "网络工程", "心理学", "思想政治教育", "社会工作", "设计学"]
      return(
        <div className = "dialog">
          <div className = "register_area" >
            <h1>注册</h1>
            <div>
              <p>
                <label htmlFor="username-1" > 用户名: </label>
                <input type="text" name="username-1" id = "res_username" placeholder="Username" required />
              </p>
              <p>
                <label htmlFor="password-1"> 密码: </label>
                <input type="password" name="password-1" id = "res_password_1" placeholder="Password" minLength = "8" required />
              </p>
              <p>
                <label htmlFor="password-1"> 重新输入密码: </label>
                <input type="password" name="password-2" id = "res_password_2"  placeholder="Password" minLength = "8" required />
              </p>
              <p>
                <label htmlFor="e-mail"> 电子邮箱: </label>
                <input type="email" name="e-mail"  id = "res_email" placeholder="E-mail" required />
              </p>
              <p>
                <label htmlFor="school"> 学校： </label>
                <input type="text" name="school"  id = "res_school" placeholder="school" required />
              </p>
              <p>
                <label htmlFor="major"> 专业： </label>
                <select type="text" name="major"  id = "res_major" placeholder="major" defaultValue="null" required  >
                  <option value="null">专业 </option>
                  {majors.map((major, index) => {
                    return(
                      <option value={major} key = {index}>{major}</option>
                    );
                  })}
                </select>
              </p>
              <p>
                <label htmlFor="grade"> 年级： </label>
                <input type="text" name="grade"  id = "res_grade" placeholder="grade" required />
              </p>
              <p>
                <label htmlFor="phone_num"> 手机号： </label>
                <input type="text" name="phone_num"  id = "res_phonenum" placeholder="phone-num" />
              </p>
              <p>
                <label htmlFor="wechat_num"> 微信号： </label>
                <input type="text" name="wechat_num"  id = "res_wechat" placeholder="wechat-num" />
              </p>
              <p>
                <label htmlFor="QQ"> QQ： </label>
                <input type="text" name="QQ"  id = "res_qq" placeholder="QQ" required />
              </p>
              <p id="dialog-button">
                <button onClick = {this.onSubmit}>确定</button>
                <button onClick = {this.props.onRegister}>取消</button>
              </p>
            </div>
          </div>    
        </div>    
      );
    }
  }