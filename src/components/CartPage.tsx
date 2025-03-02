import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {ProductInline} from "./ProductInline";
import {InputNumber, List} from "antd";
import {ICartProduct, IProduct} from "../models";
import {HeaderBar} from "./HeaderBar";
import {CartProductInline} from "./CartProductInline";
import {cartClear} from "../features/cart/cartSlice";


export function CartPage(){
    const dispatch = useDispatch()
    const cartState = useSelector((state:RootState) => state)
    return  (
        <div className='container flex flex-col flex-nowrap items-start gap-10 mt-2 w-full px-4'>
            <HeaderBar></HeaderBar>
            <List className='list_ant_elem flex flex-col w-full'
                  itemLayout="vertical"
                  size="large"
                  bordered={true}
                  dataSource={cartState.cart.products}
                  pagination={{
                      onChange: (page) => {
                          console.log(page);
                      },
                      align: "start",
                      pageSize: 5,
                  }}
                  renderItem = {(item:ICartProduct) => (
                      <CartProductInline
                          prod={item}
                      />
                  )}
            />
            <div className={"w-full flex gap-4"}>
                <button
                    className={'w-36 h-10 bg-red-400 rounded-xl'}
                    onClick={(event) => dispatch(cartClear(cartState))}
                >
                    Очистить корзину
                </button>
                <button className={'w-36 h-10 bg-yellow-400 rounded-xl'}>
                    Оплатить
                </button>
            </div>
        </div>
    )
}