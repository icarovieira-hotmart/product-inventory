import { render, screen } from '@testing-library/react'
import Chance from 'chance'
import { MemoryRouter } from 'react-router-dom'

import { Product } from 'src/graphql/types'
import ProductList from './productList'

const chance = new Chance()

const mockProduct = (): Product => {
  return ({
    id: chance.integer(),
    name: chance.word(),
    description: chance.paragraph({ sentences: 1 }),
    color: chance.word(),
    stock: chance.integer(),
    price: chance.integer(),
    category_id: chance.integer()
  })
}

const category = {
  name: chance.word(),
  description: chance.paragraph({ sentences: 1 })
}

const products = [
  mockProduct(),
  mockProduct(),
  mockProduct()
]

const setup = () => {
  return render(
  <MemoryRouter>
    <ProductList
      products={products}
      name={category.name}
      description={category.description}
    />
  </MemoryRouter>
  )
}

test('Should render the header', () => {
  setup()

  expect(
    screen.getByRole('heading', {
      name: `Category: ${category.name}`
    })
  ).toBeInTheDocument()

  expect(
    screen.getByText(category.description)
  ).toBeInTheDocument()
})

test('Should render the product list', () => {
  setup()

  expect(screen.getByRole('list')).toBeInTheDocument()

  products.forEach(({ name }, index) => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
