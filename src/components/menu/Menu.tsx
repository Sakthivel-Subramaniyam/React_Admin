import { Link } from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data"

const Menu = () => {
  return (
    <div className="menu">

      {
        menu.map((item) => (
            <div className="item">
              <span className="title">{item.title}</span>

              {item.listItems.map((link) => (
                <Link to={link.url} className="listItem">
                <img src={link.icon} alt="" />
                <span className="listItemTitle">{link.title}</span>
              </Link>
              ))

              }
             
            </div>
        ))
      }
      
      
    </div>
  )
}

export default Menu