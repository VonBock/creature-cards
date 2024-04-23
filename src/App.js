import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';

const darkPurple = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkPurple}>   
      <div className="App">
        <header className="App-header">
          <Card className="card-component" raised="true">
            <Box>
          <CardMedia
              component="img"
              image={logo}
              alt="Live from space album cover"
              className='App-logo'
            />
            <CardContent>
          <Button>
            Test
          </Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </CardContent>
          </Box>
          </Card>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
