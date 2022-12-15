import { Grid, Typography } from '@mui/material';

import CategoryListItem from './components/categoryListItem'

const CategoryList = () => {
  return (
    <>
     <Typography sx={{ mt: 5 }} variant="h2" gutterBottom>
        Categories List
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CategoryListItem />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CategoryList