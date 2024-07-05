import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
     <div className="navbar bg-primary text-white">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-2xl font-poppins uppercase hover:bg-transparent">CollabSpace</Link>
  </div>
  <div className="flex-none gap-10">
    <div className="form-control w-96">
      <input type="text" placeholder="Search" className="input input-bordered h-10 opacity-45 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>   
    </>
  )
}

export default Header