import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AppDonate() {
  return (
    <section 
      className='bg-white h-lg' 
      style={{ 
        borderTop: '2px solid #AF0B0A', 
        padding: '2rem 0', // Add padding to the section
      }}>
      
      <Typography 
        variant="h4" 
        component="h4"
        sx={{
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font sizes
          color: '#AF0B0A',
          fontWeight: 'bold',
          mt: { xs: '2rem', md: '4rem' }, // Adjust top margin responsively
        }}
      >
        Donate Blood Save Life
      </Typography>

      <Card 
        sx={{ 
          display: 'flex', 
          backgroundColor: 'white',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
          mt: { xs: '1rem', md: '2rem' }, // Adjust top margin responsively
          boxShadow: 0, // Remove box shadow
          padding: { xs: 2, md: 4 }, // Add padding to the card for responsiveness
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            p: { xs: 2, md: 4 }, // Padding for responsiveness
            pl: { xs: 3, md: 10 }, // Padding left for text
            textAlign: { xs: 'center', md: 'justify' }, // Center text on small screens, justify on larger
          }}
        >
          <CardContent 
            sx={{ 
              flex: '1 0 auto', 
              maxWidth: { xs: '100%', md: '90%' }, // Full width on smaller screens, limited on larger
              mx: { xs: 'auto', md: 0 }, // Center content horizontally on small screens
            }}
          >
            <Typography 
              component="div" 
              variant="body1" 
              sx={{ 
                mt: '3px', // Small margin-top
                fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
                lineHeight: 1.5, // Adjust line height for better readability
                
              }}
            >
              Blood donation is a selfless act that saves lives. Many are motivated by the desire to help others, knowing their donation can make a life-saving difference. The sense of civic duty and personal experiences, like seeing a loved one benefit from a transfusion, often inspire people to donate regularly.
            </Typography>
          </CardContent>
        </Box>
        
        <CardMedia
          component="img"
          sx={{ 
            width: { xs: '90%', md: 450 }, // Full width on small screens
            mx: 'auto', // Center image horizontally on small screens
            mt: { xs: '1rem', md: '0' }, // Adjust margin-top
            pr: { xs: 3, md: 8 }, // Padding right for image
          }}
          image="./img/saveLife.png"
          alt="Save Life"
        />
      </Card>
    </section>
  );
}
