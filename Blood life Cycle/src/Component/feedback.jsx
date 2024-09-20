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
      <Card sx={{ width: 300, height: 240, mt: 7,backgroundColor:'#AF0B0A', boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)` }}>
          <CardContent>
           
            <Typography variant="body2" sx={{ color: 'white', fontSize: '1.2rem',padding: '2px' }}>
            <FormatQuoteIcon sx={{ fontSize: '3rem', ml: 1, transform: 'rotate(180deg)' }} />A well-designed site that simplifies the donation process. Perfect for anyone eager to help and make a meaningful difference!   <FormatQuoteIcon sx={{ fontSize: '3rem', mr: 1 }} /> 
            </Typography>
            <Typography
  sx={{
        textAlign: 'center',
        color: 'white',
        fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' }, // Responsive font sizes
        
  }}
>
  Ali Raza
</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
      <Card sx={{ width: 300, height: 240, mt: 7,backgroundColor:'#AF0B0A',color: 'white', boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)` ,}}>
         
          <CardContent>
            
            <Typography variant="body2" sx={{ color: 'white', fontSize: '1.2rem' ,padding: '2px'}}>
            <FormatQuoteIcon sx={{ fontSize: '3rem', ml: 1, transform: 'rotate(180deg)' }} />The site is intuitive and streamlined, making it easy to contribute. A fantastic way to make a positive impact!<FormatQuoteIcon sx={{ fontSize: '3rem', mr: 1 }} /> 
            </Typography>
            <Typography
  sx={{
    textAlign: 'center',
    color: 'white',
    fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' }, // Responsive font sizes
    mt:'1.5rem'
  }}
>
Haider Ali
</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
      <Card sx={{ width: 300, height: 240, mt: 7,backgroundColor:'#AF0B0A', color: 'white',boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)`}}>
    
          <CardContent>
        
            <Typography variant="body2" sx={{ color: 'white', fontSize: '1.2rem' , padding: '2px' }}>
            <FormatQuoteIcon sx={{ fontSize: '3rem', ml: 1, transform: 'rotate(180deg)' }} />This service is efficient and simple to use, making the act of giving effortless. A great tool for those who want to make a difference!<FormatQuoteIcon sx={{ fontSize: '3rem', mr: 1 }} /> 
            </Typography>
            <Typography
  sx={{
    textAlign: 'center',
    color: 'white',
    fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' } ,// Responsive font sizes
 
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
