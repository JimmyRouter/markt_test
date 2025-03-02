import {ICategory} from "../models"
import {Image} from "antd";
import {MY_API_ENDPOINT} from "../constants";
import {Link} from "react-router-dom";

export function CategoryInline({cat}: {cat: ICategory }){
    console.log('CategoryInline props>>>>>', cat._id.toString())
    return(
        <div className={"categoryinline flex flex-col w-full justify-start items-center rounded p-2"}>
            <Link
                className="w-full rounded"
                to={cat._id.toString()}
                state={{ 'cat':cat }}
            >
                <strong className={"w-full inline-flex justify-center"}>
                    {cat.title}
                </strong>
                <div className={"inline-flex  justify-center items-center w-full"}>
                    <Image src={MY_API_ENDPOINT + cat.img} className={"w-3/12  max-h-24 object-contain bg-transparent"} />
                    <div className={"w-9/12 bg-amber-50"}>{cat.description}</div>
                </div>
            </Link>
        </div>
    )
}