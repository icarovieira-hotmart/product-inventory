import { useEffect } from "react"
import { useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { LOAD_CATEGORY } from 'src/graphql/queries'
import { LOAD_PRODUCT_DETAILS } from './queries'
import { UPDATE_PRODUCT, REMOVE_PRODUCT } from './mutations'
import { Header, Info, Actions } from './components'

const ProductDetail = () => {
  const navigate = useNavigate()
  const { categoryId, productId } = useParams()

  const { error, loading, data, refetch } = useQuery(LOAD_PRODUCT_DETAILS, {
    variables: {
      id: productId
    }
  })

  const [updateProduct, { loading: updateLoading }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{
      query: LOAD_CATEGORY,
      variables: {
        id: categoryId,
      },
    }],
  })
  const [removeProduct, { loading: removeLoading }] = useMutation(REMOVE_PRODUCT, {
    refetchQueries: [{
      query: LOAD_CATEGORY,
      variables: {
        id: categoryId,
      },
    }],
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleIncreaseStock = async () => {
    await updateProduct({
      variables: { updateProductId: productId, stock: data.Product.stock + 1 },
    })

    refetch()
  }

  const handleDecreaseStock = async () => {
    if(data.Product.stock !== 0) {
      await updateProduct({
        variables: { updateProductId: productId, stock: data.Product.stock - 1 },
      })
  
      refetch()
    } else {
      console.log('Stock cant be less than zero')
    }
  }

  const handleRemoveProduct = async () => {
    await removeProduct({ variables: { removeProductId: productId }})
    
    navigate(`/category/${data.Product.category_id}`)
  }

  if(error){
    return <>Sorry, There was an error to fetch data</>
  }

  if(loading){
    return <>Loading...</>
  }


  return (
    <>
      <Header name={data.Product.name}/>
      <Info
        description={data.Product.description}
        color={data.Product.color}
        price={data.Product.price}
      />
      <Actions 
        updateLoading={updateLoading}
        removeLoading={removeLoading}
        stock={data.Product.stock}
        handleIncreaseStock={handleIncreaseStock}
        handleDecreaseStock={handleDecreaseStock}
        handleRemoveProduct={handleRemoveProduct}
      />
    </>
  )
}

export default ProductDetail