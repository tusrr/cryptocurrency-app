import React from 'react'

export const Coin = ({name,icon,price,symbol})=>{
    return (
        <div className="coin">
            <h1>Name: {name}  </h1>
            <img src= {icon} />
            <h2>Price: {price} </h2>
            <h2>Symbol: {symbol} </h2>
        </div>
    )
}
