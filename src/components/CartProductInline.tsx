import {ICartProduct, IProduct} from "../models";
import {useState} from "react";
import {Collapse, Image, InputNumber, InputNumberProps, Rate} from "antd";
import {CaretRightOutlined, DeleteOutlined, DownOutlined, ShoppingCartOutlined, UpOutlined} from "@ant-design/icons";
import {MY_API_ENDPOINT} from "../constants";
import {useDispatch} from "react-redux";
import {cartAddProd, cartDelProd} from "../features/cart/cartSlice";
import {useParams} from "react-router-dom";

export function CartProductInline({prod}: {prod:ICartProduct }) {
    const params = useParams()
    console.log('prodinline params', params)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState<number>(prod.amount);
    const cartItems= [
        {
            label: <strong>{prod.product.tittle}</strong>,
            children: <p>{prod.product.description}</p>,
        },]
    const onChangeAmount: InputNumberProps['onChange'] = (value) => {
        setAmount(Number(value))
    }
    return(
        <div className={"container inline-flex mb-10 justify-between"}>
            <div className="w-2/12 flex flex-col items-center">
                <Image src={MY_API_ENDPOINT + prod.product.img} alt="alt" preview={false} className={"w-full object-contain max-h-24"}/>
                <Rate defaultValue={prod.product.rating?.value} disabled key="rate" className="w-full inline-flex justify-center"/>
            </div>
            <div className={"flex flex-col gap-5 w-9/12"}>
                <Collapse
                    expandIconPosition={"end"}
                    bordered={true}
                    expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? -90 : 90}/>}
                    items={cartItems}
                />
                <div className={"inline-flex justify-between gap-2 w-full max-h-24"}>
                    <div className={"w-3/12"}>
                        <strong>
                            {prod.product.price} &#8377;
                        </strong>
                    </div>
                    <div className={"w-6/12 inline-flex gap-5 justify-end"}>
                        <InputNumber
                            className={"h-10"}
                            variant={"filled"}
                            upHandler={<UpOutlined/>} downHandler={<DownOutlined/>}
                            max={25} min={0} defaultValue={0}
                            value={amount}
                            onChange={onChangeAmount}
                            key="amount"/>
                        <span>шт</span>
                    </div>
                    <div>
                        <span>{prod.product.price * amount}  &#8377;</span>
                    </div>
                    <DeleteOutlined
                        className="bg-amber-400 rounded h-10 w-16 text-3xl inline-flex justify-center items-center"
                        onClick={(event) => dispatch(cartDelProd(prod))}
                    />
                </div>
            </div>
        </div>
    )
}