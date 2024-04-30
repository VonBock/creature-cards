import logo from './creatures/Creature_Ram.png';
import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { Box, Link, Typography } from '@mui/material';

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
          <Card sx={{ maxWidth: 345, backgroundColor: '#282c34' }} className="card-component" raised="true">
            <Box>
              <CardMedia
                  component="img"
                  image={logo}
                  alt="Live from space album cover"
                  className='App-logo'
                />
                <CardContent>
                  <Typography> Ram </Typography>
                  <Button>
                    Feed
                  </Button>
                  <Button>
                    Play
                  </Button>
                  <Typography>
                    Make sure to play with and feed your creature!
                  </Typography>
                  
              </CardContent>
            </Box>
          </Card>
          {/* <Box>
            <Typography>



              <Link
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
                Help?
              </Link>
            </Typography>
          
          </Box> */}
          
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
