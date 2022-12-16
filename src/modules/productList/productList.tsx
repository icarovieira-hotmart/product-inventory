import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { 
  Button,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText } from '@mui/material'

import { LOAD_CATEGORY } from 'src/graphql/queries'

const ProductList = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { error, loading, data } = useQuery(LOAD_CATEGORY, {
    variables: {
      id: id
    }
  })
  const [products, setProducts] = useState<any[]>([])
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
    <>
      <Typography sx={{ mt: 5 }} variant="h4" gutterBottom>
        Category: {data.Category.name}
      </Typography>
      <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
        {data.Category.description}
      </Typography>

      <Divider sx={{ mt: 2 }} />

      <List>
        {products.map((product, index) => (
          <ListItem 
            disablePadding 
            key={`product-${index}`}
            onClick={() => navigate(`/product/${id}`)}
          >
            <ListItemButton>
              <ListItemText primary={product.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ mt: 2 }} />

      <Button 
        sx={{ mt: 2 }}
        variant="contained"
        onClick={() => navigate('/category/product/add')}
      >
        Add Product
      </Button>
    </>
  )
}

export default ProductList