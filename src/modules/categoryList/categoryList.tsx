import { Grid, Typography } from '@mui/material'

import { Category } from 'src/graphql/types'
import CategoryListItem from './components/categoryListItem'

interface IProps {
  categories: Omit<Category, 'Products'>[]
}

const CategoryList = ({ categories }: IProps) => {
  return (
    <>
     <Typography sx={{ mt: 5 }} variant="h2" gutterBottom>
        Categories List
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {categories.map((category, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CategoryListItem
              id={category.id}
              name={category.name}
              description={category.description}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CategoryList