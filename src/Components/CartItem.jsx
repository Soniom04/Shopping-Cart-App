import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"
import { remove } from "../redux/slices/CartSlice";

export default function CartItem({item}){
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)
    const removeFromCart = ()=>{
        dispatch(remove(item.id))
        toast.error('Item Removed')
    }
    return(
        <div>
            {(cart.length > 1) &&
                <div className="w-full bg-black h-[1.5px]"></div>
            }
            <div className="flex justify-between items-center pt-6 px-2">
                <div><img src={item.image} className="h-[200px] aspect-[0.8/1]"/></div>
                <div className="flex flex-col gap-y-3 w-[60%]">
                    <h1 className="text-lg font-bold">{item.title}</h1>
                    <p className="text-[15px]">{item.description.substring(0,120)}...</p>
                    <div className="flex items-center justify-between">
                        <p className="text-green-500 font-extrabold text-lg">${item.price}</p>
                        <button onClick={removeFromCart} className="bg-red-200 p-3 rounded-full"><MdDelete className="text-red-800"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}