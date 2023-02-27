import React from 'react'
import { CartItem } from './CartItem'
import SectionTitle from './SectionTitle'

const data=[
    {
        id:1,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:2,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:3,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:4,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:5,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:6,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:7,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    },
    {
        id:8,
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        name:"Md Harun Ali",
        rating: 5,
        jobs:12,      
    }
]

const Cart = () => {
  return (
    <div className='cart container mx-auto py-10'>
        <SectionTitle title="Clients rate Legal Consultants Rating 4.8/5 based on 3,522 client reviews"/>
        <div className="cart-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-4">
        {data.map((cart)=>(
        <CartItem cart={cart}/>
        ))}
        </div>
    </div>
  )
}

export default Cart