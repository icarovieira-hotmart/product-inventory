import { useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { IconButton, Stack, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { LOAD_PRODUCT_DETAILS } from 'src/graphql/queries'


const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { error, loading, data } = useQuery(LOAD_PRODUCT_DETAILS, {
    variables: {
      id: id
    }
  })

  useEffect(() => {
    console.log(data)
  }, [data]);

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
        <IconButton color="primary" aria-label="increase" component="label">
          <AddCircleOutlineIcon />
        </IconButton>
        <Typography sx={{ textAlign: 'left'}} variant="overline">
          Stock: {data.Product.stock}
        </Typography>
        <IconButton color="primary" aria-label="decrease" component="label">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Stack>
    </>
  )
}

export default ProductDetail