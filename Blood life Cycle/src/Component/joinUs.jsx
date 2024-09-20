import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    lastName: '',
    contactNo: '',
    gender: '',
    email: '',
    bloodGroup: '',
    address: '',
    donateBefore: '',
    lastDonationDate: '',
    medication: '',
    emergencyContactNo: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    const phoneRegex = /^(?:\+92|0092|0)3\d{9}$/; // Accepts numbers starting with +92, 0092, or 03 and followed by 9 digits
    const emailRegex = /^[\w-]+@gmail\.com$/;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // First Name and Last Name Validation
    if (formData.FirstName.length < 2) errors.FirstName = 'First Name must be at least 2 characters long';
    if (formData.lastName.length < 2) errors.lastName = 'Last Name must be at least 2 characters long';

    // Contact Number Validation
    if (!phoneRegex.test(formData.contactNo)) errors.contactNo = 'Contact Number must start with +92, 0092, or 03 and be followed by 9 digits';

    // Email Validation
    if (!emailRegex.test(formData.email)) errors.email = 'Email must be a valid @gmail.com address';

    // Last Donation Date Validation
    if (formData.lastDonationDate && formData.lastDonationDate > today) {
      errors.lastDonationDate = 'Last Donation Date cannot be in the future';
    }

    // Medication Field Validation
    if (formData.donateBefore === 'yes' && !formData.medication) {
      errors.medication = 'Medication field is required if you have donated before';
    }
    
    if (!phoneRegex.test(formData.emergencyContactNo)) errors.emergencyContactNo = 'Emergency Contact Number must start with +92, 0092, or 03 and be followed by 9 digits';
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop form submission if validation fails
    }

    try {
      console.log("Submitting form data:", formData);

      const response = await axios.post('http://localhost:3100/api/Donor/donor-req', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response from server:", response.data);

      setSnackbarMessage('Form submitted successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setOpenDialog(false);
    } catch (error) {
      console.error('There was an error submitting the form:', error);

      if (error.response) {
        setSnackbarMessage(`Failed to submit form: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        setSnackbarMessage('Failed to submit form: No response from server.');
      } else {
        setSnackbarMessage(`Failed to submit form: ${error.message}`);
      }

      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpenDialog}
        sx={{
          bgcolor: 'white',
          color: '#AF0B0A',
          '&:hover': {
            bgcolor: 'white',
          },
        }}
      >
        Be a Volunteer
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Blood Donation Form</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiFormControl-root': { m: 1, width: '100%' },
              maxWidth: 600,
              bgcolor: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              margin: 'auto',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" gutterBottom>
              Blood Donor Information
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="First Name"
                name="FirstName"
                variant="outlined"
                value={formData.FirstName}
                onChange={handleChange}
                required
                error={!!formErrors.FirstName}
                helperText={formErrors.FirstName}
              />
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
                required
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </Box>
            <TextField
              label="Contact Number"
              name="contactNo"
              type="tel"
              variant="outlined"
              value={formData.contactNo}
              onChange={handleChange}
              required
              error={!!formErrors.contactNo}
              helperText={formErrors.contactNo}
            />
            <FormControl variant="outlined" required>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <FormControl variant="outlined" required>
              <InputLabel>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                label="Blood Group"
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Home Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={2}
              required
            />
            <FormControl variant="outlined" required>
              <InputLabel>Have you donated before?</InputLabel>
              <Select
                name="donateBefore"
                value={formData.donateBefore}
                onChange={handleChange}
                label="Have you donated before?"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Last Donation Date"
              name="lastDonationDate"
              type="date"
              variant="outlined"
              value={formData.lastDonationDate}
              onChange={handleChange}
              error={!!formErrors.lastDonationDate}
              helperText={formErrors.lastDonationDate}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split('T')[0], // Disable future dates
              }}
            />
            {formData.donateBefore === 'yes' && (
              <TextField
                label="Medication"
                name="medication"
                variant="outlined"
                value={formData.medication}
                onChange={handleChange}
                required
                error={!!formErrors.medication}
                helperText={formErrors.medication}
              />
            )}
            <TextField
              label="Emergency Contact Number"
              name="emergencyContactNo"
              type="tel"
              variant="outlined"
              value={formData.emergencyContactNo}
              onChange={handleChange}
              required
              error={!!formErrors.emergencyContactNo}
              helperText={formErrors.emergencyContactNo}
            />
         <DialogActions>
              <Button
                onClick={handleCloseDialog}
                sx={{
                  backgroundColor: '#AF0B0A',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#AF0B0A',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: '#AF0B0A',
                  '&:hover': {
                    bgcolor: '#AF0B0A',
                  },
                }}
              >
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
     
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default JoinUs;
