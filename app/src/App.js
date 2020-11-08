import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import "./sass/app.scss"
(function() {
  const appElement = document.getElementById("app")
  appElement.appendChild(Header())
  //appElement.appendChild(SideBar())
  appElement.appendChild(Main())
  appElement.appendChild(Footer())
})()
