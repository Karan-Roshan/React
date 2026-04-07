function customRender(reactElement, container) {
    /*
    const domElemet = document.createElement(reactElement.type);
    domElemet.innerHTML = reactElement.children;
    domElemet.setAttribute("href", reactElement.props.href);
    domElemet.setAttribute("target", reactElement.props.target);

    container.appendChild(domElemet);
    */


    const domElemet = document.createElement(reactElement.type);
    domElemet.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === "children") continue;

        domElemet.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElemet);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank_"
    },
    children: "Click me to visit Gogle"
}

const container = document.querySelector("#root");

customRender(reactElement, container);