import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth, changeUser } from '../../reducers/Data';
import './index.scss';
interface authJSON  {
  tokenType: string,
  accessToken: string
}
const Login: React.FC = () => {
  const dispatch = useDispatch();
  
  async function authorization(email: string, pass: string) {
    const response = await fetch('https://tager.dev.ozitag.com/api/auth/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "clientId": 1,
        "email": email,
        "password": pass
        }),
    });
    return await response.json();
  } 
  async function getData(data : authJSON) {
    const response = await fetch('https://tager.dev.ozitag.com/api/tager/user/profile',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `${data.tokenType} ${data.accessToken}`
      },
 
    });
    return await response.json();
  } 
    const submit = (e: FormEvent<Element>) => {
      e.preventDefault();
      const inputs = e.currentTarget.getElementsByTagName('input');
      const formValues: Array<string> = [];
      for (let i = 0; i < inputs.length; i++) {
        formValues.push(inputs[i].value)
      }
      authorization(formValues[0],formValues[1])
      .then((res)=>{
        if(res.data){
          getData(res.data).then(res=>{
            dispatch(changeUser(res.data))
            dispatch(changeAuth(true))
          });
        }else{          
          alert(res.message)
        }
      })
      
      
    }
  return (
    <form className="login__form" onSubmit={(e)=>submit(e)}>
      <h2>Login</h2>
        <label htmlFor="mail">E-mail : </label>
        <input type="text" id='mail'/>
        <label htmlFor="pass">Password : </label>
        <input type="text" id='pass'/>
        <button type='submit'>Ok</button>
    </form>
  );
}

export default Login;
