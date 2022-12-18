import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { RouteNames } from './constants'

const Home = React.lazy(() => import('../pages/home'))
const Category = React.lazy(() => import('../pages/category'))
const AddProduct = React.lazy(() => import('../pages/category/addProduct'))
const Product = React.lazy(() => import('../pages/product'))
const NotFound = React.lazy(() => import('../pages/notFound'))

const RoutesApp = () => (
  <Routes>
    <Route path={RouteNames.ROOT} element={<Home />} />
    <Route path={RouteNames.CATEGORY} element={<Category />} />
    <Route path={RouteNames.CATEGORY_PRODUCT_ADD} element={<AddProduct />} />
    <Route path={RouteNames.PRODUCT} element={<Product />} />
    <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
  </Routes>
)

export default RoutesApp
