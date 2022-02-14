import React, { useState, useEffect } from 'react'

function Coffees() {
    const [coffeeList, setCoffeeList] = useState()
    const [temp, setTemp] = useState('hot')
    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
            .then(response => response.json())
            .then(data => setCoffeeList(data))
            .catch(err => console.error(err))
    }, [temp])
    return (
        <div className='coffee-container' id='coffees'>
            <h2>Coffee Recipes</h2>
            <button onClick={() => setTemp('hot')}>Hot</button>
            <button onClick={() => setTemp('iced')}>Iced</button>
            <div className=''>
                {!coffeeList
                    ? <h3>Loading...</h3>
                    : <ol>
                        {coffeeList.map(coffee => {
                            return <li key={coffee.id}>{coffee.title}</li>
                        })}
                    </ol>}
            </div>
        </div>
    )
}


export default Coffees
