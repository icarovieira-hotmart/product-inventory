import { gql } from "@apollo/client"

export const LOAD_CATEGORIES = gql`
  query {
    allCategories{
      id,
      name,
      description
    }
  }
`