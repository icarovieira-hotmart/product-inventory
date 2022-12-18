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