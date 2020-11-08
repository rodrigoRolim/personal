import '../sass/button.scss';

const eventElement = (element, event) => {
  element.addEventListener(event, (e) => {
    alert("clicou me")
  })
}
const button = () => {
  const buttonElement = document.createElement( 'button' )
  buttonElement.textContent = "click me"
  eventElement(buttonElement, "click")
  return buttonElement
}

export default button