import { render, screen } from '@testing-library/react'
import Chance from 'chance'
import { MemoryRouter } from 'react-router-dom'

import { Category } from 'src/graphql/types'
import CategoryList from './categoryList'

const chance = new Chance()

const mockCategory = (): Omit<Category, 'Products'> => {
  return ({
    id: chance.integer(),
    name: chance.word(),
    description: chance.paragraph({ sentences: 1 })
  })
}

const categories = [
  mockCategory(),
  mockCategory(),
  mockCategory()
]

const setup = () => {
  return render(
  <MemoryRouter>
    <CategoryList categories={categories}/>
  </MemoryRouter>
  )
}

test('Should render the header', () => {
  setup()

  expect(
    screen.getByRole('heading', { name: /categories list/i })
  ).toBeInTheDocument()
})

test('Should render the cards', () => {
  setup()

  const cards = screen.getAllByRole('button')

  categories.forEach(({ name, description}, index) => {
    expect(cards[index]).toHaveTextContent(name)
    expect(cards[index]).toHaveTextContent(description)
  })
})
