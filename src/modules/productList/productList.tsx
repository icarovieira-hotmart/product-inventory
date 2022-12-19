import { useParams, useNavigate } from 'react-router-dom'
import { 
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'

import { Product } from 'src/graphql/types'
import Header from './components/header'

interface IProps {
  name: string,
  description: string,
  products: Product[]
}

const ProductList = ({ products, name, description }:IProps) => {
  const navigate = useNavigate()
  const { categoryId } = useParams()

  return (
    <>
      <Header
        name={name}
        description={description}
      />

      <Divider sx={{ mt: 2 }} />

      <List>
        {products.map((product, index) => (
          <ListItem 
            disablePadding 
            key={`product-${index}`}
            onClick={
              () => navigate(`/category/${categoryId}/product/${product.id}`)
            }
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
        onClick={() => navigate(`/category/${categoryId}/product/add`)}
      >
        Add Product
      </Button>
    </>
  )
}

export default ProductList