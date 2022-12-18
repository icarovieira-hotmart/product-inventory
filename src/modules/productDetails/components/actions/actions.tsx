import { Button, IconButton, Stack, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

interface IProps {
  updateLoading: boolean,
  removeLoading: boolean,
  stock: number,
  handleIncreaseStock: (stock: number) => void,
  handleDecreaseStock: (stock: number) => void,
  handleRemoveProduct: () => void
}

const Actions = ({
  updateLoading,
  removeLoading,
  stock,
  handleIncreaseStock,
  handleDecreaseStock,
  handleRemoveProduct
}: IProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton 
        aria-label="increase"
        color="primary"
        component="label"
        onClick={() => handleIncreaseStock(stock)}
      >
        <AddCircleOutlineIcon />
      </IconButton>

      <Typography sx={{ textAlign: 'left'}} variant="overline">
        Stock: {updateLoading ? 'Loading...' : stock}
      </Typography>

      <IconButton
        aria-label="decrease"
        color="primary"
        disabled={stock === 0}
        component="label"
        onClick={() => handleDecreaseStock(stock)}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>

      <Button
        sx={{ mt: 2 }}
        disabled={removeLoading}
        variant="contained"
        color="error"
        onClick={() => handleRemoveProduct()}
      >
        {removeLoading ? 'Loading...' : 'Remove'}
      </Button>
    </Stack>
  )
}

export default Actions