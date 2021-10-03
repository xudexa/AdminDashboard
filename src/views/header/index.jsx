import React from 'react'
import CHeader from '@components/header'


function Header() {

  const unLoggedItems = [
    {
      icon:"fas fa-sign-in-alt",
      label:"Log In",
      onClick:null
    },
    {      
      icon:"fas fa-file-signature",
      label:"Privacy Policy",
      onClick:null 
    },
    {      
      label:"divider"      
    },
    {      
      icon:"fab fa-wpforms",
      label:"Registration",
      onClick:null 
    }

  ]

  return(
    <CHeader items={unLoggedItems} />
  )
}

export default Header