import { gql } from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation Mutation(
    $name: String!
    $description: String!
    $color: String!
    $stock: Int!
    $price: Float!
    $category_id: ID!
  ) {
    createProduct(
      name: $name
      description: $description
      color: $color
      stock: $stock
      price: $price
      category_id: $category_id
    ) {
      id
      name
      description
      color
      stock
      price
      category_id
    }
  }
`