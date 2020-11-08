import '../sass/main.scss'
import SideBar from './sidebar'
const Main = () => {
  const mainElment = document.createElement('main')
  mainElment.setAttribute("class", "main")
  mainElment.appendChild(SideBar())
  return mainElment
}

export default Main