import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Component/Navbar';
import AppProcess from './Component/process';
import AppDonate from './Component/donate';
import AppFeedback from './Component/feedback';
import AppVolunteer from './Component/volunteer';
import App1 from './Component/faq';
import AppFooter from './Component/footer';
import AchievementsSection from './Component/Acheivement';


// Define your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <AppProcess />
        <AppDonate />
        <AchievementsSection />
        <AppFeedback />
        <AppVolunteer />
        <App1 />
      
        <AppFooter />
      </>
    </ThemeProvider>
  );
}

export default App;
