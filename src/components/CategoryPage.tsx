import {ICategory, IProduct} from "../models";
import {useLocation} from "react-router-dom";
import {List} from "antd";
import {ProductInline} from "./ProductInline";
import {HeaderBar} from "./HeaderBar";

export function CategoryPage() {
    const props:ICategory = useLocation().state.cat
    console.log('Category Page runinG>>>props>>>>', props)
    return (
        <div className='categorypage container flex flex-col flex-nowrap items-start gap-10 mt-2 mx-auto w-full px-8'>
            <HeaderBar></HeaderBar>
            <strong>{props.tittle}</strong>
            <strong>{props.description}</strong>
            <List className='list_ant_elem flex flex-col'
                  itemLayout="vertical"
                  size="large"
                  bordered={true}
                  dataSource={props.products}
                  pagination={{
                      onChange: (page) => {
                          console.log(page);
                      },
                      align: "start",
                      pageSize: 5,
                  }}
                renderItem = {(item:IProduct) => (
                      <ProductInline
                          prod={item}
                          key={item._id}
                      />
                  )}
            />
        </div>
    )
}

