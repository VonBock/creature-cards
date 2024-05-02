
import creature from '../creatures/Creature_Ram.png';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import React from 'react';

export class CreatureBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animationPaused: false //TODO: MVP animation state management
    };
  }

  render() {
    return (
      <Box className="creature-box">
        <CardMedia
          component="img"
          image={creature} //TODO: load this image from a dynamic location
          alt="Live from space album cover"
          className='creature-media'
        />
      </Box>
    );
  }
}
