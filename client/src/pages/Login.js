import React,{useState,useEffect} from 'react'
import {Form,Input,message} from 'antd'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'
import '../styles/LoginStyles.css'

const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
     const submitHandler = async (values)=>{
        try{
            setLoading(true);
            const {data} = await axios.post('/users/login',values);
            message.success('Login Successfull');
            setLoading(false);
            localStorage.setItem('user',JSON.stringify({...data.user,password:''}));
            navigate('/');

        }catch(error){
            setLoading(false);
            message.error('Something went wrong');    
        }
    };

    useEffect(()=>{
        if(localStorage.getItem("user")){
            navigate('/')
        }
    },[navigate]);
    
  return (
    <>
     <div className='register-page'>
         {loading && <Spinner/>}
         <Form layout='vertical' onFinish ={submitHandler} className='form'>
            <h1>Login</h1>
            <Form.Item label='Email' name="email">
                <Input type='email'/>
            </Form.Item>
            <Form.Item label='Password' name="password">
                <Input type='password'/>
            </Form.Item>
            <div >
                <Link className='te' to='/register'>
                    Not a user? Click here to register  
                </Link>
            <button className='bt btn btn-primary'>Login</button>
            </div>
         </Form>
      </div>
    </>
  )
}

export default Login