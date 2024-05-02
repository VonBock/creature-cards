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
import { CreatureCard } from './components/Creature-Card';

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
          <CreatureCard />
          
          
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
