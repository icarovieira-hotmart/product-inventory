import Container from '@mui/material/Container'

import RoutesApp from './routes/routes'

function App() {
  return (
    <div className="App">
      <Container sx={{ textAlign: 'center' }} maxWidth="md">
        <RoutesApp />
      </Container>
    </div>
  )
}

export default App
