import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { add,remove } from "../redux/slices/CartSlice";

export default function Product({item}){
    const {cart} = useSelector(state => state)
    console.log(cart)
    const dispatch = useDispatch(); 

    const addToCart = ()=>{
        dispatch(add(item))
        toast.success('Item added to Cart')
    }

    const removeFromCart = ()=>{
        dispatch(remove(item.id))
        toast.error('Item removed from Cart')
    }   

    return(
        <div className="flex flex-col rounded-xl items-center justify-evenly hover:scale-110 
        transition duration-200 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] 
        hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-2 gap-3 text-gray-800 group">
            <h1 className="text-center font-bold text-lg">{item.title.substring(0,15) + '...'}</h1>
            <p className="text-gray-400  font-normal w-44 max-w-[176px] text-[13px]">{item.description.split(' ').slice(0,10).join(' ') + '...'}</p>
            <img src={item.image} className="h-[190px]"/>
            <div className="flex justify-between items-center w-full px-2">
                <p className="text-green-500 font-extrabold text-lg">${item.price}</p>
                <button>
                    {
                        cart.some(obj => obj.id === item.id)? <button onClick={removeFromCart}
                        className="uppercase font-semibold rounded-2xl border-2 border-black text-[12px] px-2 py-[0.15rem] 
                        group-hover:bg-black group-hover:text-white transition duration-200 ease-in">Remove Item</button> 
                        : <button onClick={addToCart}
                        className="uppercase font-semibold rounded-2xl border-2 border-black text-[12px] px-2 py-[0.15rem]
                         group-hover:bg-black group-hover:text-white transition duration-200 ease-in">Add to Cart</button>
                    }
                </button>
            </div>
        </div>
    )
}