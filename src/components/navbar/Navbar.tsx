import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg"/>
        <span>ARIOS</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.svg" alt="" className="icons" />
        <img src="/expand.svg" alt="" className="icons" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />

        </div>
        <span>Sakthi</span>
        <img src="/settings.svg" alt="" className="icons" />
      </div>
      
    </div>
  )
}

export default Navbar