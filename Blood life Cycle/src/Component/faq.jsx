import React, { useState } from 'react';
import Faq from 'react-faq-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App1 = () => {
  const [clickedIndex, setClickedIndex] = useState(null); // State to track which question was clicked

  const data = {
    title: (
      <Typography 
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font sizes
          color: '#AF0B0A', // Set color to red
          fontWeight: 'bold',
          mb: 4 // Margin bottom for spacing
        }}
      >
        Blood Donation FAQs
      </Typography>
    ),

    rows: [
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 0 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 0 ? null : 0)} // Toggles the clickedIndex
          >
            Who can donate blood?
          </Box>
        ),
        content: `Most people who are in good health, weigh at least 110 pounds, and are at least 17 years old can donate blood. Some states allow 16-year-olds to donate with parental consent.`
      },
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 1 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 1 ? null : 1)} // Toggles the clickedIndex
          >
            How often can I donate blood?
          </Box>
        ),
        content: `You can donate whole blood every 56 days, up to six times a year. However, the frequency can vary for different types of donations such as platelets or plasma.`
      },
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 2 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 2 ? null : 2)} // Toggles the clickedIndex
          >
            Is blood donation safe?
          </Box>
        ),
        content: `Yes, donating blood is safe. The equipment used is sterile and disposable, ensuring that you cannot contract any disease from donating blood.`
      },
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 3 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 3 ? null : 3)} // Toggles the clickedIndex
          >
            What should I do before donating blood?
          </Box>
        ),
        content: `Before donating blood, eat a healthy meal and drink plenty of water. Avoid fatty foods as they can affect the tests performed on your blood. Make sure you bring a valid ID.`
      },
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 4 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 4 ? null : 4)} // Toggles the clickedIndex
          >
            How long does the blood donation process take?
          </Box>
        ),
        content: `The entire process, from registration to resting after donation, usually takes about an hour. The actual blood donation takes about 8-10 minutes.`
      },
      {
        title: (
          <Box
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font sizes
              padding: '12px',
              borderRadius: '12px',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              color: clickedIndex === 5 ? '#AF0B0A' : 'inherit', // Turns red when clickedIndex matches
              '&:hover': {
                backgroundColor: 'rgba(175, 11, 10, 0.1)' // Light background on hover
              }
            }}
            onClick={() => setClickedIndex(clickedIndex === 5 ? null : 5)} // Toggles the clickedIndex
          >
            What happens after I donate blood?
          </Box>
        ),
        content: `After donating blood, you will be asked to rest for a few minutes and have some refreshments. It's important to drink plenty of fluids and avoid heavy exercise for the rest of the day.`
      }
    ]
  };

  const styles = {
    bgColor: "transparent",
    titleTextColor: "#AF0B0A", // Change title text color
    rowTitleColor: "#AF0B0A", // Change question text color
    rowContentColor: "black", // Change answer text color
    arrowColor: "#AF0B0A", // Change dropdown icon color
    // Add other styles as needed
  };

  return (
    <Box
      id="faq"
      sx={{
        padding: { xs: '2rem', sm: '4rem', md: '6rem' }, // Responsive padding
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          border: '2px solid #AF0B0A',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '100%', // Ensure it doesn't exceed container width
          boxShadow: 1 // Optional: Add some shadow for better visual appeal
        }}
      >
        <Faq data={data} styles={styles} />
      </Box>
    </Box>
  );
};

export default App1;
