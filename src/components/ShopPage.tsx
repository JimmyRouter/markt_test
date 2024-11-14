import {MY_API_ENDPOINT} from "../constants";
import axios from "axios";
import {ICategory, IShop} from "../models";
import {CategoryInline} from "./CategoryInline";
import {useLoaderData} from "react-router-dom";
import {List} from "antd";
import {HeaderBar} from "./HeaderBar";



export async function loader(shop_id: string | undefined){
    console.log('shoppage shopid got>>>>>', shop_id)
    console.log('shoppage shopid got>>type>>>', typeof(shop_id))
    const shop = await axios.get<IShop>(MY_API_ENDPOINT + 'shops/' + shop_id )
    const catalog = shop.data.catalog
    console.log('shop_page catalog obj>>>>>', catalog)
    return catalog
}

export function ShopPage () {
    const catalog = useLoaderData() as ICategory[]

    return (
        <div className="shoppage container flex flex-col flex-nowrap items-start gap-10 mt-2 mx-auto w-full px-8'"
             id="maindiv">
            <HeaderBar></HeaderBar>
            <h1>КАТАЛОГ</h1>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    align: "start",
                    pageSize: 2,
                }}
                dataSource={catalog}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <CategoryInline
                        cat={item}
                        key={item._id}
                    />
                )}
            />
        </div>

    )
}

