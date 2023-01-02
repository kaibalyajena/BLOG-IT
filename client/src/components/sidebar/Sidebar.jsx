import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage" src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&w=400" alt="my pic" />
                <p>I am a student at Benett University and currently learning full stack web development.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">cinema</li>
                <li className="sidebarListItem">tech</li>
                <li className="sidebarListItem">sports</li>
                <li className="sidebarListItem">style</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME!</span>
            <div className="sidebarSocial">
            <i className="sidebarSocialIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarSocialIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarSocialIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarSocialIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
