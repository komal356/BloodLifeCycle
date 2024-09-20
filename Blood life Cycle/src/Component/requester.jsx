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
  Alert,
} from '@mui/material';

const Requester = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    gender: '',
    contactNumber: '',
    email: '',
    bloodGroup: '',
    address: '',
    dateOfBirth: '',
    bloodRequired: '',
    unitsRequired: '',
    bloodNeededDate: '',
    hospitalName: '',
    hospitalAddress: '',
    reasonForBlood: '',
    emergencyContactNumber: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
  
    // Check for required fields
    if (!formData.patientName) {
      errors.patientName = 'Patient Name is required.';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required.';
    }
    if (!formData.contactNumber) {
      errors.contactNumber = 'Contact Number is required.';
    } else if (!/^[0-9]{10,15}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Invalid contact number. Must be 10-15 digits.';
    }
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!formData.bloodGroup) {
      errors.bloodGroup = 'Blood Group is required.';
    }
    if (!formData.address) {
      errors.address = 'Home Address is required.';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required.';
    }
    if (!formData.unitsRequired) {
      errors.unitsRequired = 'Units Required is required.';
    }
    if (!formData.bloodNeededDate) {
      errors.bloodNeededDate = 'Blood Needed Date is required.';
    } else if (new Date(formData.bloodNeededDate) <= new Date()) {
      errors.bloodNeededDate = 'Blood Needed Date must be in the future.';
    }
    if (!formData.hospitalName) {
      errors.hospitalName = 'Hospital Name is required.';
    }
    if (!formData.hospitalAddress) {
      errors.hospitalAddress = 'Hospital Address is required.';
    }
    if (!formData.reasonForBlood) {
      errors.reasonForBlood = 'Reason for Blood is required.';
    }
    if (!formData.emergencyContactNumber) {
      errors.emergencyContactNumber = 'Emergency Contact Number is required.';
    } else if (!/^[0-9]{10,15}$/.test(formData.emergencyContactNumber)) {
      errors.emergencyContactNumber = 'Invalid emergency contact number. Must be 10-15 digits.';
    }
  
    return errors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSnackbarMessage('Please correct the errors in the form.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      console.log('Submitting form data:', formData);

      const response = await axios.post('http://localhost:3100/api/Requester/requester-req', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from server:', response.data);

      setSnackbarMessage('Form submitted successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setOpenDialog(false);
    } catch (error) {
      console.error('There was an error submitting the form:', error);

      if (error.response) {
        console.error('Server responded with:', error.response.data);
        setSnackbarMessage(`Failed to submit form: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        console.error('No response from the server:', error.request);
        setSnackbarMessage('Failed to submit form: No response from server.');
      } else {
        console.error('Error during setup:', error.message);
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
          bgcolor: '#AF0B0A',
          color: 'white',
          '&:hover': {
            bgcolor: '#8A0908',
          },
        }}
      >
        Request
      </Button>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: '70%',
            maxWidth: '600px',
          },
        }}
        fullWidth
      >
        <DialogTitle>Blood Request Form</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiFormControl-root': { m: 1, width: '100%' },
              bgcolor: 'white',
              borderRadius: 2,
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" gutterBottom>
              Please fill out the form below to request blood
            </Typography>
            <TextField
              label="Patient Name"
              name="patientName"
              variant="outlined"
              value={formData.patientName}
              onChange={handleChange}
              required
              error={!!formErrors.patientName}
              helperText={formErrors.patientName}
            />
            <FormControl variant="outlined" required error={!!formErrors.gender}>
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
              </Select>
            </FormControl>
            <TextField
              label="Contact Number"
              name="contactNumber"
              type="tel"
              variant="outlined"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              error={!!formErrors.contactNumber}
              helperText={formErrors.contactNumber}
            />
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
            <FormControl variant="outlined" required error={!!formErrors.bloodGroup}>
              <InputLabel>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                label="Blood Group"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
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
              error={!!formErrors.address}
              helperText={formErrors.address}
            />
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              variant="outlined"
              value={formData.dateOfBirth}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
              error={!!formErrors.dateOfBirth}
              helperText={formErrors.dateOfBirth}
            />
            <TextField
              label="Units Required"
              name="unitsRequired"
              type="number"
              variant="outlined"
              value={formData.unitsRequired}
              onChange={handleChange}
              required
              error={!!formErrors.unitsRequired}
              helperText={formErrors.unitsRequired}
            />
            <TextField
              label="Blood Needed Date"
              name="bloodNeededDate"
              type="date"
              variant="outlined"
              value={formData.bloodNeededDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
              error={!!formErrors.bloodNeededDate}
              helperText={formErrors.bloodNeededDate}
              inputProps={{
                min: new Date().toISOString().split('T')[0], // Ensure the date is not in the past
              }}
            />
            <TextField
              label="Hospital Name"
              name="hospitalName"
              variant="outlined"
              value={formData.hospitalName}
              onChange={handleChange}
              required
              error={!!formErrors.hospitalName}
              helperText={formErrors.hospitalName}
            />
                      <TextField
              label="Hospital Address"
              name="hospitalAddress"
              variant="outlined"
              value={formData.hospitalAddress}
              onChange={handleChange}
              multiline
              rows={2}
              required
              error={!!formErrors.hospitalAddress}
              helperText={formErrors.hospitalAddress}
            />
            <TextField
              label="Reason for Blood"
              name="reasonForBlood"
              variant="outlined"
              value={formData.reasonForBlood}
              onChange={handleChange}
              multiline
              rows={2}
              required
              error={!!formErrors.reasonForBlood}
              helperText={formErrors.reasonForBlood}
            />
            <TextField
              label="Emergency Contact Number"
              name="emergencyContactNumber"
              type="tel"
              variant="outlined"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              required
              error={!!formErrors.emergencyContactNumber}
              helperText={formErrors.emergencyContactNumber}
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

      {/* Snackbar for notifications */}
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

export default Requester;


