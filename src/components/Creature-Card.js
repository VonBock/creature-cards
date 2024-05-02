
import CreatureMedia from '../creatures/Creature_Ram.png';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { CreatureBox } from './Creature-Box';

export class CreatureCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

    render() {
      return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#282c34' }} className="creature-card" raised="true">
        <Box>
            <CreatureBox />
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
    );
    }
  }
  