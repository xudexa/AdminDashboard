import React from 'react'
import CSidenav from '@components/sidenav'


function Sidenav() {
  
  const loggedSidenav = {        
    user: {
      email:'',
      firstname: "Xavier",
      lastname: '',
      avatar:'',
      company: {
        name: "MyCompany",
        url: "https://www.google.com"
      }
    },
    navList: [
      {
        heading: {
          title: "messages",
          icon: "far fa-envelope"
        },
        subHeadingList: [
          {
            title: "Inbox",
            icon: "fas fa-envelope",
            items: ["Primary","social","Promo"]
         },
         {           
            title: "Unread",
            icon: "fas fa-eye",
            items: ["Primary","social","Promo"]           
          },
          {             
            title: "Archives",
            icon: "fas fa-book-open",
            items: ["Primary","social","Promo"]            
          }
        ]
      }
    ]
  }


  return(
    <CSidenav sideNav={loggedSidenav} />
  )
}


export default Sidenav