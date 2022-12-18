import { Typography } from '@mui/material'

interface IProps {
  description: string,
  color: string,
  price: number
}

interface Item {
  label: string,
  value: string | number
}

const Info = ({description, color, price}: IProps) => {
  const Item = ({label, value}: Item) => {
    return (
      <Typography sx={{ textAlign: 'left'}} variant="body1" gutterBottom>
        {label}: {value}
      </Typography>
    )
  }
  return (
    <>
      <Item label="Description" value={description} />
      <Item label="Color" value={color} />
      <Item label="Price" value={price} />
    </>
  )
}

export default Info