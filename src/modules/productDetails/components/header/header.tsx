import { useNavigate } from 'react-router-dom'
import { IconButton, Stack, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface IProps {
  name: string
}

const Header = ({name}: IProps) => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{ marginTop: 4, marginBottom: 4}}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <IconButton
        aria-label="back"
        color="primary"
        component="label"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography sx={{ mt: 5 }} variant="h4">
        Name:{name}
      </Typography>
    </Stack>
  )
}

export default Header