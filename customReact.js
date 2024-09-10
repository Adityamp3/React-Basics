function customRender(reactElement, container) {

  //! Create a new DOM element with the type of reactElement.type  
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.children
  // domElement.setAttribute('href', reactElement.props.href)
  // domElement.setAttribute('target', reactElement.props.target)

  // container.appendChild(domElement);
  
  //? The above code is not generic and will only work for anchor tags. We need to make it generic so that it can work for any type of element.
  //? We can use a for loop to iterate over the props and set them to the domElement. We can also use the children property to set the innerHTML of the domElement. We can use the setAttribute method to set the attributes of the domElement.
  
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// Usage of customRender function to render a simple anchor tag element with props and children text content in the mainContainer
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
