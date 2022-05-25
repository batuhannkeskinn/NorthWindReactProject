import React,{useState} from 'react'
import {  Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SingedOut'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function 
Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useNavigate()
  function handleSignOut(){
    setIsAuthenticated(false)
    history("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
        <Menu inverted fixed='top'>
        <Container>
        <Menu.Item
        


        
          name='home'
          
        />
        <Menu.Item
          name='messages'
          
        />

        <Menu.Menu position='right'>
          {cartItems.length>0&&<CartSummary/>}
          {isAuthenticated?<SignedIn singOut={handleSignOut}/>:<SignedOut singIn={handleSignIn}/>}
          
          
          
          
        </Menu.Menu>
        </Container>
        
        
      </Menu>
    </div>
  )
}
