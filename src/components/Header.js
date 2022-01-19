import React from "react";

function Header(headerProp){
    console.log(headerProp)
    return(
        <header>
            <h1>{headerProp.name}</h1>
        </header>
    )
}

// Alternative solution where we grab the prop's name using {name} as argument
// function Header({ name }) {
//     return (
//       <header>
//         <h1>{name}</h1>
//       </header>
//     );
//   }

export default Header;