import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">MERN</span>
            <span className="headerTitleLg">Blog-it</span>
        </div>
        {/* <img className="headerImage" src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header pic" /> */}
        <img className="headerImage" src="https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header pic" />
    </div>
  )
}
