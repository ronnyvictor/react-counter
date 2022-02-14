import React, { useState, useEffect } from 'react'

function Coffees() {
    const [coffeeList, setCoffeeList] = useState()
    useEffect(() => {
        fetch('https://api.sampleapis.com/coffee/hot')
            .then(response => response.json())
            .then(data => setCoffeeList(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='coffee-container'>
            <h2>Coffee Recipes</h2>
            {!coffeeList
                ? <h3>Loading...</h3>
                : <ol>
                    {coffeeList.map(coffee => {
                        return <li key={coffee.id}>{coffee.title}</li>
                    })}
                </ol>}

        </div>
    )
}

export default Coffees
