import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const AchievementsSection = () => {
  return (
    <section>
      <Box
        sx={{
          position: 'relative',
          minHeight: '50rem',
          backgroundColor: { xs: '#AF0B0A', md: 'transparent' }, // Background color for xs and sm, none for md and above
          backgroundImage: { md: 'url(/img/ach.jpg)' }, // Background image for md and above
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            height: { xs: 'auto', md: '45rem' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 3,
            zIndex: 2,
            py: { xs: 10, md: 0 },
          }}
        >
          {/* Title */}
          <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{marginBottom:"3rem"}}>
            OUR ACHIEVEMENTS
         </h4> 

          {/* Divider with Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 3,
              mt:0,
            }}
          >
            <Box sx={{ width: 50, height: 2, backgroundColor: 'white', mx: 2 }} />
            <FavoriteIcon sx={{ fontSize: 30 }} />
            <Box sx={{ width: 50, height: 2, backgroundColor: 'white', mx: 2 }} />
          </Box>

          {/* Subtitle */}
          <h6 className="text-4xl  tracking-tight text-white sm:text-3xl" >
            Behind every great achievement is a dreamer of great dreams
        </h6>

          {/* Stats Grid */}
          <Grid container spacing={-25} sx={{ mt: '2rem' }} justifyContent="center">
            <Grid item xs={12} sm={3} md={3}>
              <FavoriteIcon sx={{ fontSize: 60 }} />
              <Typography variant="h4">100</Typography>
              <Typography variant="subtitle1">Success Smiles</Typography>
            </Grid>

            <Grid item xs={12} sm={3} md={3}>
              <PeopleIcon sx={{ fontSize: 60 }} />
              <Typography variant="h4">80</Typography>
              <Typography variant="subtitle1">Happy Donors</Typography>
            </Grid>

            <Grid item xs={12} sm={3} md={3}>
              <EmojiEventsIcon sx={{ fontSize: 60 }} />
              <Typography variant="h4">50</Typography>
              <Typography variant="subtitle1">Total Awards</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default AchievementsSection;
