import {ICartProduct, IProduct} from "../models";
import {useState} from "react";
import {Collapse, Image, InputNumber, InputNumberProps, Rate} from "antd";
import {CaretRightOutlined, DownOutlined, ShoppingCartOutlined, UpOutlined} from "@ant-design/icons";
import {MY_API_ENDPOINT} from "../constants";
import {useDispatch} from "react-redux";
import {cartAddProd} from "../features/cart/cartSlice";
import {useParams} from "react-router-dom";

export function ProductInline({prod}: {prod: IProduct }) {
    const params = useParams()
    console.log('prodinline params', params)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState<number>(1);
    const colapsItems= [
        {
            label: <strong>{prod.title}</strong>,
            children: <p>{prod.description}</p>,
        },]
    const cart_prod: ICartProduct = {product:prod, category_id:Number(params.cat_id), amount:amount}
    const onChangeAmount: InputNumberProps['onChange'] = (value) => {
        setAmount(Number(value))
    }
    return(
        <div className={"product container inline-flex mb-10 justify-between"}>
            <div className="w-full flex flex-col items-center">
                <Image src={MY_API_ENDPOINT + prod.img} alt="alt" preview={false} className={"w-full object-contain max-h-24"}/>
                <Rate defaultValue={prod.rating?.value} disabled key="rate" className="w-full inline-flex justify-center"/>
            </div>
            <div className={"flex flex-col gap-5 w-6/12"}>
                <Collapse
                    expandIconPosition={"end"}
                    bordered={true}
                    expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? -90 : 90}/>}
                    items={colapsItems}
                />
                <div className={"inline-flex justify-between gap-2 w-full max-h-24"}>
                    <div className={"w-3/12"}>
                        <strong>
                            {prod.price?? 100} &#8377;
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

                        <ShoppingCartOutlined className="bg-amber-400 rounded h-10 w-16 text-3xl inline-flex justify-center items-center"
                                              onClick={(event) => dispatch(cartAddProd(cart_prod))}/>
                    </div>
                </div>
            </div>
        </div>
    )
}