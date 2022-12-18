import { gql } from "@apollo/client"

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