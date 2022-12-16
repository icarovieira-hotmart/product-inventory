import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'

interface IProps {
  id: number,
  name: string,
  description: string
}

const CategoryListItem = ({id, name, description}: IProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea 
        sx={{ width: 280, height:140 }}
        onClick={() => navigate(`/category/${id}`)}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ textAlign: 'left' }} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryListItem
