import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="log">
          <img src="assests/log.svg" alt="" />
          <span>lamadmin</span>
      </div>
      <div className="icons">
      <img src="assests/search.svg" alt="" className="icon"/>
      <img src="assests/app.svg" alt="" className="icon"/>
      <img src="assests/expand.svg" alt="" className="icon"/>
      <div className="notification">
        <img src="assests/notifications.svg" alt="" />
        <span>1 </span>
      </div>
      <div className="user">
        <img src="assests/.svg" alt="userImg"/>
        <span>User</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar
