import { object, string, number } from 'yup'

const getSchema = () => {
  return (
    object().shape({
      name: string().required('Please fill the name'),
      description: string().required('Please fill the description'),
      color: string().required('Please fill the color'),
      stock: number()
        .moreThan(-1)
        .integer('Stock must be an integer')
        .required('Please fill the stock')
        .typeError('Stock must be a number'),
      price: number()
        .positive('Please write a valid price')
        .required('Please fill the price')
        .typeError('Price must be a number'),
      category_id: number().required()
    })
  )
}

export default getSchema
