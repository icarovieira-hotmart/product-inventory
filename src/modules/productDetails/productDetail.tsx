import { useEffect } from "react"
import { useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { LOAD_PRODUCT_DETAILS } from './queries'
import { UPDATE_PRODUCT, REMOVE_PRODUCT } from './mutations'

const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { error, loading, data, refetch } = useQuery(LOAD_PRODUCT_DETAILS, {
    variables: {
      id: id
    }
  })

  const [updateProduct, { loading: updateLoading }] = useMutation(UPDATE_PRODUCT)
  const [removeProduct, { loading: removeLoading }] = useMutation(REMOVE_PRODUCT)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleIncreaseStock = async () => {
    await updateProduct({
      variables: { updateProductId: id, stock: data.Product.stock + 1 },
    })

    refetch()
  }

  const handleDecreaseStock = async () => {
    if(data.Product.stock !== 0) {
      await updateProduct({
        variables: { updateProductId: id, stock: data.Product.stock - 1 },
      })
  
      refetch()
    } else {
      console.log('Stock cant be less than zero')
    }
  }

  const handleRemoveProduct = async () => {
    await removeProduct({ variables: { removeProductId: id }})
    
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
      <Typography sx={{ mt: 5 }} variant="h4" gutterBottom>
        Name:{data.Product.name}
      </Typography>
      <Typography sx={{ textAlign: 'left'}} variant="body1" gutterBottom>
        Description:{data.Product.description}
      </Typography>
      <Typography sx={{ textAlign: 'left'}} variant="body1" gutterBottom>
        Color:{data.Product.color}
      </Typography>
      <Typography sx={{ textAlign: 'left'}} variant="body1" gutterBottom>
        Price: {data.Product.price}
      </Typography>

      <Stack direction="row" spacing={2}>
        <IconButton 
          aria-label="increase"
          color="primary"
          component="label"
          onClick={() => handleIncreaseStock()}
        >
          <AddCircleOutlineIcon />
        </IconButton>

        <Typography sx={{ textAlign: 'left'}} variant="overline">
          Stock: {updateLoading ? 'Loading...' : data.Product.stock}
        </Typography>

        <IconButton
          aria-label="decrease"
          color="primary"
          component="label"
          onClick={() => handleDecreaseStock()}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>

        <Button
          sx={{ mt: 2 }}
          disabled={removeLoading}
          variant="contained"
          color="error"
          onClick={() => handleRemoveProduct()}
        >
          {removeLoading ? 'Loading...' : 'Remove'}
        </Button>
      </Stack>
    </>
  )
}

export default ProductDetail