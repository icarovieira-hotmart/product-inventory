import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { RouteNames } from './constants'

const Home = React.lazy(() => import('./pages/home'))
const Category = React.lazy(() => import('./pages/category'))
const Product = React.lazy(() => import('./pages/product'))

const RoutesApp = () => (
  <Routes>
    <Route path={RouteNames.ROOT} element={<Home />} />
    <Route path={RouteNames.CATEGORY} element={<Category />} />
    <Route path={RouteNames.PRODUCT} element={<Product />} />
  </Routes>
)

export default RoutesApp
