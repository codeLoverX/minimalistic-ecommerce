import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import CartPage from "./pages/customer/cart"
import DescriptionPage from "./pages/customer/description"
import ListingPage from "./pages/customer/listing"

function RoutesApp() {
    return (
        <Router>
            <Route path="/">
                <Route exact path="/">
                    <Redirect to='category/tech' />
                </Route> 
                <Route
                    path="/category/:category"
                >
                    <ListingPage/>
                </Route>
                <Route path="/product/:productId">
                    <DescriptionPage />
                </Route> 
                <Route path="/cart">
                    <CartPage />
                </Route> 
                {/* <Route path="*" element={<ListingPage />}/> */}
            </Route>
        </Router>
    )
}

export default RoutesApp

