import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Navbar(){
    const {cart} = useSelector(state => state)
    return(
        <nav className="flex bg-slate-900 justify-around items-center py-2">
           <NavLink to='/'>
                <img src={logo} height="30px" width='160px' alt="" />
           </NavLink>
           <div className="flex text-white items-center space-x-7">
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/cart' className='relative'>
                    <MdShoppingCart fontSize={23}/>
                    {cart.length > 0 &&
                        <span className="absolute -top-[6px] -right-[6px] bg-green-600 rounded-full text-[12px] px-[0.35rem]
                        animate-bounce">{cart.length}</span>
                    }
                </NavLink>
           </div>
        </nav>
    )
}