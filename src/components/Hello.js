import React from 'react'
//with using jsx
const Hello= () => {
//     return (
//         <div>
//             <h1>
//                 Hello Sandhya
//             </h1>
//         </div>
//     )
// }
return React.createElement(
    'div',
{id:'hello',className:'dummyClass'},
     React.createElement('h1',null,'Hello Sandhya')
)
}
export default Hello