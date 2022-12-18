
import { useEffect, useState } from "react"
import { Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'

import { Category } from 'src/graphql/types'
import { LOAD_CATEGORIES } from 'src/graphql/queries'
import CategoryListItem from './components/categoryListItem'

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const { error, loading, data } = useQuery<{
    allCategories: Category[]
  }>(LOAD_CATEGORIES)

  useEffect(() => {
    if (data) {
      setCategories(data.allCategories)
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