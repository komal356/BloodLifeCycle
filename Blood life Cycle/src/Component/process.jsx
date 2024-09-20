import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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

export default function AppProcess() {


  return (
    <section className='bg-white h-100' style={{ borderTop: '2px solid #AF0B0A', paddingBottom: '5rem' }}>
      <Typography className="text-4xl font-bold tracking-tight text-red-700 sm:text-5xl"
        variant="h2"
        style={{
          marginTop: '6rem',
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '6xl', md: '3rem' }, // Responsive font sizes
          color: '#AF0B0A',
          fontWeight: 'bold',
          
        }}>
        Donation Process
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#AF0B0A',
          fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '4rem',
          },
        }}
      >
        ── ⋆⋅☆⋅⋆ ──
      </Typography>

      <Grid container spacing={7} justifyContent="center">
        <Grid item>
          <Card sx={{ width: 300, height: 385, mt: 7, boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)` }}>
            <CardMedia
              sx={{ p: 2 }}
              component="img"
              height="190"
              image="./img/reg.jpg"
              alt="Registration"
            />
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  color: '#AF0B0A',
                  paddingBottom:'8px',
                  fontSize: {
                    xs: '1rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                    lg: '2rem',
                    fontWeight: 'bold',

                  },
                }}
              >
                Registration
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', fontSize: '1rem' }}>
                Users can register by entering personal information, medical reports, and an emergency contact, then clicking "Register."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 300, height: 385, mt: 7, boxShadow: `0px 8px 16px rgba(175, 11, 10, 0.5)` }}>
            <CardMedia
              sx={{ p: 2 }}
              component="img"
              height="190"
              image="./img/sca.jpg"
              alt="Scanning"
            />
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  color: '#AF0B0A',
                  paddingBottom:'8px',
                  fontSize: {
                    fontWeight: 'bold',
                    xs: '1rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                    lg: '2rem',
                  },
                }}
              >
                Scanning
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', fontSize: '1rem' }}>
                Users can explore the site via the menu, interact with sliders and forms, and access policies and social media through footer links.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ width: 300, height: 385, mt: 7, boxShadow: `0px 6px 10px rgba(175, 11, 10, 0.5)` }}>
            <CardMedia
              sx={{ p: 2 }}
              component="img"
              height="190"
              image="./img/donate.jpg"
              alt="Donate"
            />
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  color: '#AF0B0A',
                  fontSize: {
                    fontWeight: 'bold',
                    paddingBottom:'8px',
                    xs: '1rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                    lg: '2rem',
                  },
                }}
              >
                Donate
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', fontSize: '1rem' }}>
                Become a Hope for Others. Your generous donation can make a world of difference and save lives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
