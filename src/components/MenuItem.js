import React from 'react'


function MenuItem(props) {

    return (
        <li key={props.id}>
            <p>{props.item}</p>
            <button type="button">${props.costCents}</button>
        </li>
    )
}

export default MenuItem