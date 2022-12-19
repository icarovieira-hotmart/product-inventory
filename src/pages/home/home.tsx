import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { Category } from 'src/graphql/types'
import { LOAD_CATEGORIES } from 'src/graphql/queries'
import CategoryList from 'src/modules/categoryList'

const Home = () => {
  const [categories, setCategories] = useState<Omit<Category, 'Products'>[]>([])
  const { error, loading, data } = useQuery<{
    allCategories: Omit<Category, 'Products'>[]
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

  return <CategoryList categories={categories}/>
}

export default Home