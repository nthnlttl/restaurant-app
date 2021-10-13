import React from 'react'
import MenuItem from './MenuItem' 

function MenuList(props) {
    

    
    const MenuListHTML = props.menuItems.map(menuItem =>
        <MenuItem key={menuItem.id} {...menuItem}/>)
    
    
    
    
    
    
    
    
    
    
    return (
        <ul>{MenuListHTML}</ul>
    )
}

export default MenuList;