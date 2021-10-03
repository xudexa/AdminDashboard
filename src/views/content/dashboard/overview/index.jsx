import React from 'react'
import COverview from '@components/main/overviews'




function Overviews() {

  const cards = [
    {
      icon: 'far fa-eye',      
      bgColor: 'visitor',
      title: 'Online Visitors',
      subtitle: 'In last 30 minutes',
      onClick: null
    },
    {      
      icon: 'fas fa-shopping-cart',
      bgColor: 'cart',
      title: 'Active Shopping Carts',
      subtitle: 'In last 30 minutes',
      onClick: null
    },
    {      
      icon: 'far fa-envelope',
      bgColor: 'mail',
      title: 'Recent Emails',
      subtitle: '+10',
      onClick: null
    },
    {      
      icon: 'far fa-chart-bar',
      bgColor: 'stat',
      title: 'Stats',
      subtitle: 'All statistics',
      onClick: null
    }

  ]

  return(
    <COverview overviewCards={cards}/>
  )
}

export default Overviews