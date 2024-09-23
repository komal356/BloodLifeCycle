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

const Donor = () => {
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
    if (formData.FirstName.length < 2) {
      errors.FirstName = 'First Name must be at least 2 characters long';
    } else if (formData.FirstName.length > 20) {
      errors.FirstName = 'First Name must be at most 20 characters long';
    }
    
    if (formData.lastName.length < 2) {
      errors.lastName = 'Last Name must be at least 2 characters long';
    } else if (formData.lastName.length > 20) {
      errors.lastName = 'Last Name must be at most 20 characters long';
    }
    

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
          bgcolor: '#AF0B0A',
          color: 'white',
          '&:hover': {
            bgcolor: '#AF0B0A',
          },
        }}
      >
        Donor
      </Button>

      <Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  sx={{
    '& .MuiPaper-root': {
      borderRadius: '16px',  // Adjust this value for the desired radius
    },
  }}
>

      <DialogTitle>
  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
    Blood Donation Form
  </Typography>
</DialogTitle>

        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiFormControl-root': { m: 1, width: '100%' },
              maxWidth: 600,
              bgcolor: 'white',
              p: 3,
              borderRadius: 4,  // Increase the border radius (e.g., 4 corresponds to 16px)
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
  InputLabelProps={{
    style: { color: 'black' }, // Set the label color to black
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Set the outline color to black by default
      },
      '&:hover fieldset': {
        borderColor: 'black', // Outline color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Set the outline color when focused to #AF0B0A
      },
    },
  }}
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
                InputLabelProps={{
                  style: { color: 'black' }, // Set the label color to black
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black', // Set the outline color to black by default
                    },
                    '&:hover fieldset': {
                      borderColor: 'black', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Set the outline color when focused to #AF0B0A
                    },
                  },
                }}
              />
            </Box>
            <TextField
  label="Contact Number"
  name="contactNo"
  type="tel"
  variant="outlined"
  value={formData.contactNo} // Ensure this references the correct value
  onChange={handleChange}
  required
  error={!!formErrors.contactNo} // Update error reference
  helperText={formErrors.contactNo} // Update helper text reference
  InputLabelProps={{
    style: { color: 'black' }, // Set the label color to black
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Set the outline color to black by default
      },
      '&:hover fieldset': {
        borderColor: 'black', // Outline color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Set the outline color when focused
      },
      '& input': {
        color: 'black', // Text color
        backgroundColor: 'white', // Background color
      },
    },
  }}
/>
Text={formErrors.contactNo}
            
            <FormControl variant="outlined" required sx={{ width: '100%' }}>
  <InputLabel
    htmlFor="gender"
    sx={{
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'red', // Change label color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Change label color when the field has a value
      },
    }}
  >
    Gender
  </InputLabel>
  <Select
    id="gender"
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    label="Gender"
    sx={{
      '& .MuiSelect-select': {
        color: 'black', // Text color when entering data
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color by default
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color on hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Outline color when focused
      },
    }}
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
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Black border color
      },
      '&:hover fieldset': {
        borderColor: 'black', // Black border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Black border color when focused
      },
      '& input': {
      
        color: 'black', // Text color
      },
      '& input:focus': {
        color: 'black', // Text color when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'black', // Label color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Label color when shrunk (when text is above)
      },
    },
  }}
/>

<FormControl variant="outlined" required sx={{ width: '100%' }}>
  <InputLabel
    htmlFor="bloodGroup"
    sx={{
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'black', // Label color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Label color when shrunk (when text is above)
      },
    }}
  >
    Blood Group
  </InputLabel>
  <Select
    id="bloodGroup"
    name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
    label="Blood Group"
    sx={{
      '& .MuiSelect-select': {
       
        color: 'black', // Text color
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color by default
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color on hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Outline color when focused
      },
      '&.MuiSelect-select:not(.MuiSelect-select):focus': {
        color: 'black', // Text color when focused
      },
    }}
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
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Black border color
      },
      '&:hover fieldset': {
        borderColor: 'black', // Black border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Black border color when focused
      },
      '& textarea': {
      
        color: 'black', // Text color
      },
      '& textarea:focus': {
        color: 'black', // Text color when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'black', // Label color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Label color when shrunk (when text is above)
      },
    },
  }}
/>

<FormControl variant="outlined" required sx={{ width: '100%' }}>
  <InputLabel
    htmlFor="donateBefore"
    sx={{
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'black', // Label color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Label color when shrunk (when text is above)
      },
    }}
  >
    Have you donated before?
  </InputLabel>
  <Select
    id="donateBefore"
    name="donateBefore"
    value={formData.donateBefore}
    onChange={handleChange}
    label="Have you donated before?"
    sx={{
      '& .MuiSelect-select': {
      
        color: 'black', // Text color
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color by default
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Black outline color on hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Outline color when focused
      },
    }}
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
    style: { color: 'black' }, // Label color
  }}
  inputProps={{
    max: new Date().toISOString().split('T')[0], // Disable future dates
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Black border color
      },
      '&:hover fieldset': {
        borderColor: 'black', // Black border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Black border color when focused
      },
      '& input': {
    
        color: 'black', // Text color
      },
      '& input:focus': {
        color: 'black', // Text color when focused
      },
    },
  }}
/>

        
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
  InputLabelProps={{
    style: { color: 'black' }, // Label color
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Black border color
      },
      '&:hover fieldset': {
        borderColor: 'black', // Black border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Black border color when focused
      },
      '& input': {
      
        color: 'black', // Text color
      },
      '& input:focus': {
        color: 'black', // Text color when focused
      },
    },
  }}
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

export default Donor;
