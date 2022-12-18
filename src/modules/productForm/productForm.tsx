import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography 
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { CREATE_PRODUCT } from './queries'
import getSchema from './schema'
import { FormValues } from './types'
import { LOAD_CATEGORY } from 'src/graphql/queries'

const ProductForm = () => {
  const navigate = useNavigate()
  const { categoryId } = useParams()

  const schema = getSchema()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const [createProduct, { 
    loading, error 
  }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{
      query: LOAD_CATEGORY,
      variables: {
        id: categoryId,
      },
    }],
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    await createProduct({
      variables: {
        ...data
      }
    })

    if(!error) {
      navigate(`/category/${categoryId}`)
    }
  }

  return (
    <>
      <Stack sx={{ marginTop: 4}} direction="row" spacing={2} justifyContent="center">
        <IconButton
          aria-label="back"
          color="primary"
          component="label"
          onClick={() => navigate(`/category/${categoryId}`)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ mt: 5 }} variant="h4" gutterBottom>
          Add Product
        </Typography>
      </Stack>
      <Box 
        component="form" 
        noValidate 
        autoComplete="off" 
        onSubmit={handleSubmit(onSubmit)}
        sx={{'& .MuiTextField-root': { m: 1 }}}
      >
        <FormControl fullWidth>
          <input type="number" hidden defaultValue={categoryId} {...register('category_id')}/>
          <TextField
            required
            label="Name"
            {...register('name')}
            helperText={errors.name?.message} 
          />
          <TextField
            required
            label="Description"
            {...register('description')}
            helperText={errors.description?.message}
          />
          <TextField
            helperText={errors.color?.message}
            required
            label="Color"
            {...register('color')}
          />
          <TextField
            type="number"
            required
            label="Stock"
            {...register('stock')}
            helperText={errors.stock?.message}
          />
          <TextField
            type="number"
            required
            label="Price"
            {...register('price')}
            helperText={errors.price?.message}
          />
        </FormControl>

        <Button sx={{ mt: 2 }} variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  )
}

export default ProductForm