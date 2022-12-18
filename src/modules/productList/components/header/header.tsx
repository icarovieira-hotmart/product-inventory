import { useNavigate } from 'react-router-dom'
import { IconButton, Stack, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface IProps {
  name: string,
  description: string
}

const Header = ({ name, description }: IProps) => {
  const navigate = useNavigate()
  return (
    <>
      <Stack sx={{ marginTop: 4}} direction="row" spacing={2} justifyContent="center">
        <IconButton
          aria-label="back"
          color="primary"
          component="label"
          onClick={() => navigate('/')}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ mt: 5 }} variant="h4" gutterBottom>
          Category: {name}
        </Typography>
      </Stack>
      <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
      {description}
    </Typography>
  </>
  )
}

export default Header