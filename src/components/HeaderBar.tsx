import {ShoppingCartOutlined} from "@ant-design/icons";
import {Link, useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {cartSlice} from "../features/cart/cartSlice";
import cartReducer from "../features/cart/cartSlice"
import {RootState} from "../app/store";
import {useEffect, useRef} from "react";

export function HeaderBar(){
    const params = useParams()
    console.log('header params', params)
    const cart_prods = useSelector((state:RootState) => state.cart.products)
    console.log('header cart>>>', cart_prods)
    const isMounted = useRef(false)
    const carturl = params.shop_id + '/cart'

    useEffect(() => {
        if (isMounted.current) {

        const cart_items = JSON.stringify(cart_prods);
        localStorage.setItem('cart', cart_items)
        console.log('Headerbar localStorage', localStorage.getItem('cart'))
        }
        isMounted.current = true
    }, [cart_prods]

    );


    return(
        <header className={"inline-flex w-full py-4"}>
            <nav className={"inline-flex justify-between w-full gap-5 px-4"}>
                <div className={"inline-flex w-auto gap-3"}>
                    <ul className={"inline-flex gap-2"}>
                        <li>
                            <Link to={'/shops/' + params.shop_id}>
                            home
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                            here
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                            self
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to={'/shops/' + params.shop_id + '/cart'}>
                        <ShoppingCartOutlined className="bg-amber-400 rounded h-10 w-16 text-3xl inline-flex justify-center items-center" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}