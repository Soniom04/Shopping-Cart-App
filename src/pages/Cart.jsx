// import { useSelector } from "react-redux"
// import { NavLink } from "react-router-dom"
// import CartItem from "../Components/CartItem"
// import { useEffect,useState } from "react"

// export default function Cart(){
//     const {cart} = useSelector(state => state)
//     const [totalAmount,setTotalAmount] = useState(0)

//     useEffect(() =>{
//         setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
//     },[cart])

//     let n = cart.length

//     return(
//         <div className="flex justify-center items-start mx-auto mb-5 relative">
//             {
//                 cart.length === 0 ? 
//                 <div className="mt-52 flex flex-col justify-center items-center gap-y-4">
//                     <p className="text-center text-3xl font-bold">Your cart is Empty!</p>
//                     <NavLink to='/'>
//                         <button className=" bg-green-500 rounded-xl text-white font-bold py-2 px-4 text-lg">Shop Now</button>
//                     </NavLink>
//                 </div>:
//                 <div className="flex justify-between items-center min-w-5xl w-[60%] -mt-1 gap-10">
//                     <div className="w-[60%] space-y-8">
//                         {
//                             cart.map(item =><CartItem item={item} key={item.key}/>)
//                         }
//                     </div>
//                     <div className="w-[40%] flex flex-col justify-between pt-5 {totalAmount} h-full relative">
//                         <div className="flex flex-col gap-1">
//                             <div className="uppercase text-green-600 text-xl font-bold">Your Cart</div>
//                             <div className="uppercase text-green-600 text-[42px] leading-[0.9] font-bold">Summary</div>
//                             <div className="font-bold text-lg mt-4">Total items: {cart.length}</div>
//                         </div>
//                         <div>
//                             <div className="text-slate-700 font-bold text-lg">Total Amount : 
//                                 <span className="text-black font-extrabold"> ${totalAmount.toFixed(2)}</span></div>
//                             <button className="w-full bg-green-600 text-white rounded-lg py-2 text-md font-bold mt-3">Checkout Now</button>
//                         </div>
//                     </div>
//                 </div>
//             }
            
//         </div>
//     )
// }

import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import CartItem from "../Components/CartItem"
import { useEffect, useState } from "react"

export default function Cart() {
    const { cart } = useSelector(state => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div className="flex justify-center mx-auto mb-5 relative min-h-screen">
            {
                cart.length === 0 ?
                    <div className="mt-52 flex flex-col justify-center items-center gap-y-4">
                        <p className="text-center text-3xl font-bold">Your cart is Empty!</p>
                        <NavLink to='/'>
                            <button className="bg-green-500 rounded-xl text-white font-bold py-2 px-4 text-lg">Shop Now</button>
                        </NavLink>
                    </div> :
                    <div className="flex lg:flex-row flex-col justify-between w-[60%] -mt-1 gap-10 h-full min-w-[500px]">
                        <div className="w-full lg:w-[60%] space-y-8 flex flex-col h-full">
                            {
                                cart.map(item => <CartItem item={item} key={item.key} />)
                            }
                        </div>
                        <div className="h-[full] w-full lg:w-[40%] flex lg:flex-col justify-between pt-5">
                            <div className="flex flex-col gap-1">
                                <div className="uppercase text-green-600 text-xl font-bold">Your Cart</div>
                                <div className="uppercase text-green-600 text-[42px] leading-[0.9] font-bold">Summary</div>
                                <div className="font-bold text-lg mt-4">Total items: {cart.length}</div>
                            </div>
                            <div>
                                <div className="text-slate-700 font-bold text-lg">Total Amount:
                                    <span className="text-black font-extrabold"> ${totalAmount.toFixed(2)}</span></div>
                                <button className="w-full bg-green-600 text-white rounded-lg py-2 text-md font-bold mt-3">Checkout Now</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
