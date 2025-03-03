import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.facebook.com',
//         target: "_blank"
//     },
//     text: 'Click me to visit facebook',
// } not allowed reason is clear.

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>visit Google</a>
)

const reactElement = React.createElement(
    'a', {href: "https://www.google.com" , target: "_blank" ,class: "link"},"I am a element created by react and click me to go google.com"
)

ReactDom.createRoot(document.getElementById('root')).render
(   
    reactElement
)   
