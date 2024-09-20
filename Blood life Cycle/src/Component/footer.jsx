import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import QuickLinks from './Router';


const AppFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#AF0B0A', color: 'white', py: 5 }}>
      <Grid container justifyContent="space-between" alignItems="flex-start" >

        <Grid item xs={10} sm={6} md={3} >
          <Box sx={{ ml: 10 }}>
            <img src="./img/loogo.png" alt="StackJunior Logo" width="350px" />
            <Typography width="300px" variant="body1" sx={{ mt: 2, mb: 4 }}>
              © 2024 BloodLife Foundation. Your donation today can save lives tomorrow. Join our community of life-savers and make a difference.

            </Typography>
          </Box>
        </Grid>


        <Grid container item xs={12} sm={6} md={6} spacing={3} justifyContent="flex-end" sx={{ minHeight: '300px' }} >

          <Grid item xs={8} sm={4} md={6} sx={{ mt: 1, pl: '20px' }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 3,fontSize: { xs: '1.5rem', sm: '1.50rem', md: '2rem' } }} // Increase font size
            >
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }} // Increase body text size
            >
              <a href="/Navbar" underline="hover">
        
                About Blood Life Cycle
              </a>
 
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="./process.jsx" underline="hover">
                Donation Process
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="/donate.jsx" underline="hover">
                Donate Blood
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="/Acheivement.jsx" underline="hover">

                Achievement
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="#" underline="hover">
                Feedback
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="#" underline="hover">

                Be a Volunteer
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1rem' } }}
            >
              <a href="#" underline="hover">

                FAQs
              </a>
            </Typography>
          </Grid>

          <Grid item xs={8} sm={6} md={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 4, fontSize: { xs: '0.75rem', sm: '1.50rem', md: '2rem' } }} // Increase font size
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '0.75rem', sm: '0.95', md: '1rem' } }} // Increase body text size
            >
              <CallIcon sx={{ mr: 1 }} /> +234 xxx xxx xxx
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1.2rem' } }} // Increase body text size
            >
              <MailOutlineIcon sx={{ mr: 1 }} /> BloodLifeCycle@gmail.com
            </Typography>
          </Grid>
        </Grid>


        <Grid container sx={{ height: "25px" }}>
          <Box
            sx={{
              textAlign: 'center',
              borderTop: '2px solid white', // Top border with white color
              pt: 3, // Padding for top and bottom
              width: '100%'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.75rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                color: 'white', // Text color
              }}
            >
              ©2022 - BloodLifeCycle
            </Typography>
          </Box>
        </Grid>

      </Grid>


    </Box>
  );
};

export default AppFooter;
