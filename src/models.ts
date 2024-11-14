
export interface IShop {
    _id:string
    catalog?: ICategory[]
}

export interface ICategory{
    _id:number
    tittle:string
    description:string
    img?: string
    products?:IProduct[]
}

export interface IProduct{
    _id: number|string
    tittle: string
    price: number
    description?: string
    img?:string
    rating: {
        value:number
        rate:number
        votes:number
    }
}

export interface IShopUser{
    _id : number|string
}

export interface ICartProduct{
    product: IProduct
    category_id: number | string
    amount: number
}

export interface ICart{
    products: ICartProduct[]
}