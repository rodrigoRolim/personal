import '../sass/index.scss';
import button from './button'
const header = () => {
  const headerElement = document.createElement( 'header' );
  headerElement.setAttribute("class", "header")
  headerElement.appendChild(button())
  document.body.appendChild( headerElement )
};

export default header