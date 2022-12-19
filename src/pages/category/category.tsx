import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { LOAD_CATEGORY } from 'src/graphql/queries'
import { Product } from 'src/graphql/types'
import ProductList from 'src/modules/productList'

const Category = () => {
  const { categoryId } = useParams()

  const { error, loading, data } = useQuery(LOAD_CATEGORY, {
    variables: {
      id: categoryId
    }
  })

  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    if (data) {
      setProducts(data.Category.Products)
    }
  }, [data]);

  if(error){
    return <>Sorry, There was an error to fetch data</>
  }

  if(loading){
    return <>Loading...</>
  }
  return (
    <ProductList
      products={products}
      name={data.Category.name}
      description={data.Category.description}
    />
  )
}

export default Category