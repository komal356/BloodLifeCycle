import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Grid } from '@mui/material';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AppFeedback() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='bg-white h-lg' style={{ borderTop: '2px solid #AF0B0A', paddingBottom: '5rem' }}>
     {/* <Typography style={{ textAlign: 'center', color: '#AF0B0A', marginTop: '5rem' }}> */}
     <div style={{ textAlign: 'center', color: '#AF0B0A', marginTop: '5rem' }}>
     <h1 className="text-4xl font-bold tracking-tight text-red-700 sm:text-6xl" style={{ fontSize: '3rem' ,fontWeight: 'bold',}}>Feedback</h1>
  <h2 style={{ fontSize: '2rem', color:'#AF0B0A'}}>── ⋆⋅☆⋅⋆ ──</h2>

     </div>
{/* </Typography> */}
<Grid container spacing={7} justifyContent="center">
  <Grid item>
    <Card
      sx={{
        width: 300,
        height: 240,
        mt: 7,
        backgroundColor: '#AF0B0A',
        boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0', // Remove padding
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontSize: '1.2rem',
            lineHeight: '1.5', // Set line height for equal spacing
            margin: '0',       // Remove margin
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
             // Allow the text to flex and take up space
             position:'relative',top:'25px',
          }}
        >
          <FormatQuoteIcon sx={{ fontSize: '3rem', ml: 1, transform: 'rotate(180deg)',position:'relative',bottom:'66px' }} />
               "A well-designed site that makes donating simple, perfect for anyone looking to make a difference."
          <FormatQuoteIcon sx={{ fontSize: '3rem', mr: 1 ,position:'relative',top:'50px'
            
          }} />
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: { xs: '1rem', sm: '1rem', md: '1.8rem' },
            lineHeight: '1.5', // Set line height for equal spacing
            margin: '0',       // Remove margin
            padding: '0',      // Remove padding
            flex: 1,
            justifyContent: 'space-between',
            position:'relative',top:'40px'
          }}
        >
          Ali Raza
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid item>
    <Card
      sx={{
        width: 300,
        height: 240,
        mt: 7,
        backgroundColor: '#AF0B0A',
        color: 'white',
        boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0', // Remove padding
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontSize: '1.2rem',
            lineHeight: '1.5', // Set line height for equal spacing
            margin: '0',       // Remove margin
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            flex: 1,
          }}
        >
       <CardContent
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '16px 0', // Add vertical padding to move down the content
  }}
>
  <Typography
    variant="body2"
    sx={{
      color: 'white',
      fontSize: '1.2rem',
      lineHeight: '1.5', // Set line height for equal spacing
      margin: '0',       // Remove margin
      textAlign: 'left', // Align text to the left
      display: 'flex',    // Use flex to align items
      justifyContent: 'space-between', // Distribute space evenly
      alignItems: 'center', // Align items vertically centered
    }}
  >
    <FormatQuoteIcon sx={{ fontSize: '3rem', transform: 'rotate(180deg)',position:'relative',bottom:'64px' }} />
    <span style={{ flex: 1, textAlign: 'center', marginTop: '10px' }}>
      The site is intuitive and streamlined, making it easy to contribute. A fantastic way to make a positive impact!
    </span>
    <FormatQuoteIcon sx={{ fontSize: '3rem',position:'relative',top:'64px' }} />
  </Typography>
  
  <Typography
    sx={{
      textAlign: 'center',
      color: 'white',
      fontSize: { xs: '1rem', sm: '1rem', md: '1.8rem' },
      lineHeight: '1.5', // Set line height for equal spacing
      margin: '0',       // Remove margin
      padding: '0',      // Remove padding
      flex: 1,
      position:'relative',top:'12px',
    }}
  >
    Haider Ali
  </Typography>
</CardContent>


        </Typography>
        
      </CardContent>
    </Card>
  </Grid>

  <Grid item>
    <Card
      sx={{
        width: 300,
        height: 240,
        mt: 7,
        backgroundColor: '#AF0B0A',
        color: 'white',
        boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0', // Remove padding
        }}
      >
       <Typography
  variant="body2"
  sx={{
    color: 'white',
    fontSize: '1.2rem',
    lineHeight: '1.5', // Set line height for equal spacing
    margin: '0',       // Remove margin
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  }}
>
  {/* Adjust position to move the first icon down */}
  <FormatQuoteIcon 
    sx={{ 
      fontSize: '3rem', 
      ml: 1, 
      transform: 'rotate(180deg)', 
      position: 'relative', 
      justifyContent: 'space-between',
      bottom: '40px',  // Move icon down
    }} 
  />
  
  <span style={{  flex: 1,position:'relative',top:'30px'
   }}>
   A well-designed site that makes donating simple, perfect for anyone looking to make a difference.
  </span>
  
  {/* Adjust position to move the second icon down */}
  <FormatQuoteIcon 
    sx={{ 
      fontSize: '3rem', 
      mr: 1, 
      position: 'relative', 
      top: '90px',  // Move icon down
    }} 
  />
</Typography>

        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: { xs: '2rem', sm: '2rem', md: '1.8rem' },
            lineHeight: '1.5', // Set line height for equal spacing
            margin: '0',       // Remove margin
            padding: '0',      // Remove padding
            flex: 1,
            position:'relative',top:'39px',
          }}
        >
          Shazima
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>





    </section>
  );
}
