import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { Product } from 'src/graphql/types'
import { LOAD_CATEGORY, LOAD_PRODUCT_DETAILS } from 'src/graphql/queries'
import { UPDATE_PRODUCT, REMOVE_PRODUCT } from 'src/graphql/mutations'
import { Header, Info, Actions } from './components'

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate()
  const { categoryId, productId } = useParams()
  const { error, loading, data, refetch } = useQuery<{
    Product: Product
  }>(LOAD_PRODUCT_DETAILS, {
    variables: {
      id: productId
    }
  })

  useEffect(() => {
    if (data) {
      setProduct(data.Product);
    }
  }, [data])

  const [updateProduct, { 
    loading: updateLoading
  }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{
      query: LOAD_CATEGORY,
      variables: {
        id: categoryId,
      },
    }],
  })

  const [removeProduct, {
    loading: removeLoading
  }] = useMutation(REMOVE_PRODUCT, {
    refetchQueries: [{
      query: LOAD_CATEGORY,
      variables: {
        id: categoryId,
      },
    }],
  })

  const handleIncreaseStock = async (stock: number) => {
    await updateProduct({
      variables: {
        updateProductId: productId,
        stock: stock + 1 
      },
    })
    refetch()
  }

  const handleDecreaseStock = async (stock: number) => {
    if(stock !== 0) {
      await updateProduct({
        variables: {
          updateProductId: productId,
          stock: stock - 1
        },
      })
      refetch()
    }
  }

  const handleRemoveProduct = async () => {
    await removeProduct({ variables: {
       removeProductId: productId 
    }})
    
    navigate(`/category/${product?.category_id}`)
  }

  if (error) {
    return <>Sorry, There was an error to fetch data</>
  }

  if (loading) {
    return <>Loading...</>
  }

  if (product) {
    const { name, description, color, price, stock } = product

    return (
      <>
        <Header name={name}/>
        <Info
          description={description}
          color={color}
          price={price}
        />
        <Actions 
          updateLoading={updateLoading}
          removeLoading={removeLoading}
          stock={stock}
          handleIncreaseStock={handleIncreaseStock}
          handleDecreaseStock={handleDecreaseStock}
          handleRemoveProduct={handleRemoveProduct}
        />
      </>
    )
  }

  return (
    <>Nothing to be displayed...</>
  )
}

export default ProductDetail