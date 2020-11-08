import "../sass/sidebar.scss"
const SideBar = () => {
  const sideBarElement = document.createElement("aside")
  sideBarElement.setAttribute("class", "sidebar")
  return sideBarElement
}

export default SideBar