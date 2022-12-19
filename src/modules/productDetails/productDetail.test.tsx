import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

import { LOAD_PRODUCT_DETAILS } from 'src/graphql/queries'

import ProductDetail from './productDetail'

const mocks = [
  {
    request: {
      query: LOAD_PRODUCT_DETAILS,
      variables: {
        id: 1
      }
    },
    result: {
      data: {
        Product: {
          name: 'Tasty Rubber Pizza',
          description: 'They were lost without the loving seal that composed their apricot.',
          color: 'lime',
          stock: 4,
          price: 24.95,
          category_id: '1'
        }
      }
    }
  }
]

const setup = () => {
  return render(
  <MockedProvider mocks={mocks} addTypename={false}>
    <MemoryRouter>
      <ProductDetail />
    </MemoryRouter>
  </MockedProvider>
  )
}

test.skip('Should render the header', async () => {
  setup()

  expect(screen.getByText('Loading...')).toBeInTheDocument()

  const title = await screen.findByText('Tasty Rubber Pizza')
  expect(title).toBeInTheDocument()

  const description = await screen.findByText('They were lost without the loving seal that composed their apricot.')
  expect(description).toBeInTheDocument()
})
