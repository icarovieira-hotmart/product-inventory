import { gql } from "@apollo/client"

export const LOAD_CATEGORY = gql`
  query($id: ID!) {
    Category(id: $id){
      name,
      description,
      Products {
        id,
        name
      }
    }
  }
`

export const LOAD_CATEGORIES = gql`
  query {
    allCategories{
      id,
      name,
      description
    }
  }
`

export const LOAD_PRODUCT_DETAILS = gql`
  query($id: ID!) {
    Product(id: $id){
      name,
      description,
      color,
      stock,
      price,
      category_id
    }
  }
`