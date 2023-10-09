import React ,{useState,useEffect}from 'react'
import { Link,useNavigate} from 'react-router-dom';
import {message} from 'antd'
import "../../styles/NavbarStyles.css"
import man from "../../Images/man.png"
import todo from "../../Images/to-do-list.png"
const Header = () => {
  const [loginUser,setLoginUser] = useState('')
  const navigate = useNavigate()  //making navigate object
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
  },[]);

  const logoutHandler = () =>{
    localStorage.removeItem('user')
    message.success("Logout Successfully");
    navigate('/login')
  }

  return (
    <>
       <nav className="navstyle navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="head navbar-brand" to="/">Todoist</Link>
      <img className='nav-link' src={todo} alt='f'/>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <img className='nav-link' src={man}/>  
        </li>
        <li className="nav-item">
           <p className='name nav-link'>{loginUser&&loginUser.name}</p>  
        </li>
        <li className=" nav-item">
           <button onClick={logoutHandler} className='logout 
           btn btn-primary'>Logout</button> 
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;