import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import CartPage from "./pages/customer/cart"
import DescriptionPage from "./pages/customer/description"
import ListingPage from "./pages/customer/listing"
import Home from "./pages/home"

function RoutesApp() {
    return (
        <Router>
            <Route path="/">
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path="/category/:category"
                >
                    <ListingPage />
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

