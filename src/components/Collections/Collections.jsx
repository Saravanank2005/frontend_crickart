import React from 'react'
import './Collections.css'
import new_collection from'../assets/new_collections'
import Item from '../Item/Item'

const Collections = () => {
  return (
    <div className='new-collections'>
       <span>ㅤ</span>
        <h1>New Launches</h1>
        <hr/>
        <div className="collections">
                {new_collection.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>

  
  )
}

export default Collections