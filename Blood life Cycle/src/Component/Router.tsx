import React from 'react'; // Add this import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import AppProcess from './process';
import AppDonate from './donate';
import AchievementsSection from './Acheivement';
import AppFeedback from './feedback';
import AppVolunteer from './volunteer';
import App1 from './faq';
import AppFooter from './footer'; // Import your footer

// function AppRouter() {
//   return (
    import { Link as RouterLink } from 'react-router-dom';
    import { Link, Typography } from '@mui/material';
    
    const QuickLinks = () => {
      return (
        <div>
          <Typography variant="h6">Quick Links</Typography>
          <ul>
            <li>
              <Link component={RouterLink} to="/about" color="inherit">About Us</Link>
            </li>
            <li>
              <Link component={RouterLink} to="/services" color="inherit">Services</Link>
            </li>
            <li>
              <Link component={RouterLink} to="/contact" color="inherit">Contact Us</Link>
            </li>
          </ul>
        </div>
      );
    };
    
//   );
// }

export default QuickLinks;
