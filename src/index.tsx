import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ShopPage} from "./components/ShopPage";
import{loader as catloader}  from "./components/ShopPage" ;
import {CategoryPage} from "./components/CategoryPage";
import { store } from './app/store'
import { Provider } from 'react-redux'
import {CartPage} from "./components/CartPage";
import {AdminPage} from "./components/AdminPage";
import {CourierPage} from "./components/CourierPage";


const router = createBrowserRouter([
    {
        path: "shops/:shop_id",
        element: <ShopPage   />,
        loader:  async ({params}) => {
            console.log('index>router>loader>params', params)
            return await catloader(params.shop_id)
        },

    },
    {
        path:"shops/:shop_id/:cat_id/",
        element: <CategoryPage />,
    },
    {
        path:"shops/:shop_id/cart/",
        element: <CartPage />,
    },
    {
        path:"lk/:shop_id/courier",
        element: <CourierPage />,
    },
    {
        path:"lk/:user_id/dashboard",
        element: <AdminPage />,
    },


])


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement

);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)

