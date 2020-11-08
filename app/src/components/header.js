import '../sass/header.scss';
//import button from './button'
const Header = () => {

  const headerElement = document.createElement( 'header' );
  headerElement.setAttribute("class", "header")
  //headerElement.appendChild(button())
  return headerElement
};

export default Header