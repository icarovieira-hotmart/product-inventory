import { Typography} from '@mui/material'

interface IProps {
  name: string,
  description: string
}

const Header = ({ name, description }: IProps) => {
  return (
    <>
      <Typography sx={{ mt: 5 }} variant="h4" gutterBottom>
        Category: {name}
      </Typography>
      <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
        {description}
      </Typography>
    </>
  )
}

export default Header