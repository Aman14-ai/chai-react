function customRender(reactElement, root) {
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = `<b>${reactElement.text}</b>`;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    root.appendChild(domElement);*/ // there is problem in this approach that we have to set attribute explicitly.


    //    second approach
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = `<i><b>${reactElement.text}</b></i>`;
    for (const key in reactElement.props) {
        domElement.setAttribute(key,reactElement.props[key] );
    }
    root.appendChild(domElement);


}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.facebook.com',
        target: "_blank"
    },
    text: 'Click me to visit facebook',
}


const root = document.getElementById('root')

customRender(reactElement, root);
