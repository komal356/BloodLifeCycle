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
    const emailRegex = /\S+@\S+\.\S+/;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // First Name Validation
    if (!formData.FirstName || formData.FirstName.length < 2) {
      errors.FirstName = 'First Name is required and must be at least 2 characters long';
    }
    
    if (!formData.FirstName || formData.FirstName.length < 2) {
      errors.FirstName = 'First Name is required and must be at least 2 characters long';
    }
    
    if (formData.LastName && formData.LastName.length < 2) {
      errors.LastName = 'Last Name must be at least 2 characters long';
    }
    
    

    // Contact Number Validation
    if (!formData.contactNo || !phoneRegex.test(formData.contactNo)) {
      errors.contactNo = 'Contact Number is required and must start with +92, 0092, or 03 and be followed by 9 digits';
    }

    // Email Validation
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Valid Email is required';
    }

    // Gender Validation
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }

    // Blood Group Validation
    if (!formData.bloodGroup) {
      errors.bloodGroup = 'Blood Group is required';
    }

    // Address Validation
    if (!formData.address) {
      errors.address = 'Home Address is required';
    }

 // Last Donation Date Validation
if (formData.donateBefore === 'yes') {
  if (!formData.lastDonationDate) {
    errors.lastDonationDate = 'Last Donation Date field is required if you have donated before';
  } else if (new Date(formData.lastDonationDate) > today) {
    errors.lastDonationDate = 'Last Donation Date cannot be in the future';
  }
}


    // Emergency Contact Number Validation
    if (!formData.emergencyContactNo || !phoneRegex.test(formData.emergencyContactNo)) {
      errors.emergencyContactNo = 'Emergency Contact Number is required and must start with +92, 0092, or 03 and be followed by 9 digits';
    }

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
      
      setFormData({
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
      }); // Clear form data after successful submission
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    
      if (error.response) {
        // Server responded with a status code that falls out of the range of 2xx
        setSnackbarMessage(`Failed to submit form: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        // Request was made but no response was received
        setSnackbarMessage('Failed to submit form: No response from server.');
      } else if (error.message.includes("Network Error")) {
        // Handle network errors specifically
        setSnackbarMessage('Failed to submit form: Network Error. Please check your internet connection.');
      } else {
        // Handle other types of errors like validation, unexpected JS errors, etc.
        setSnackbarMessage(`Failed to submit form: ${error.message}`);
      }
    
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
    
  };

  const handleOpenDialog = () => {
    setFormData({
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
      {/* <DialogTitle
  sx={{
    backgroundColor: '#AF0B0A', // Red background color
    color: 'white', // White text color for contrast
    padding: '16px', // Optional: padding for better appearance
  }}
>
  Blood Donation Form
</DialogTitle> */}

<DialogContent>
  <br />
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiFormControl-root': { m: 1, width: '100%' },
              maxWidth: 600,
              bgcolor: 'white',
              p: 3,
              borderRadius: 4,
              boxShadow: 5,
              margin: 'auto',
              border: '3px solid',        // Adding a solid border
              borderColor: '#AF0B0A',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
             <Typography variant="h6" gutterBottom sx={{ color: '#AF0B0A', fontWeight: 'bold',fontSize:'30px' }}>
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
                  style: { color: 'black' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
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
  error={!!formErrors.lastName}
  helperText={formErrors.lastName}
  InputLabelProps={{
    style: { color: 'black' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
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
              value={formData.contactNo}
              onChange={handleChange}
              required
              error={!!formErrors.contactNo}
              helperText={formErrors.contactNo} InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
           
           <FormControl variant="outlined" required>
  <InputLabel
    sx={{
      color: 'black', // Default color
      '&.Mui-focused': {
        color: 'black', // Color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Color when label is shrunk (used when there's a value in the input)
      },
    }}
  >
    Gender
  </InputLabel>
  <Select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    label="Gender"
    error={!!formErrors.gender}
    sx={{
      '& .MuiSelect-select': {
        color: 'black', // Default text color
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Default border color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Border color on hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Border color when focused
      },
      '&.Mui-focused .MuiSelect-select': {
        color: 'black', // Text color when focused
      },
    }}
  >
    <MenuItem value="">
      
    </MenuItem>
    <MenuItem value="male">Male</MenuItem>
    <MenuItem value="female">Female</MenuItem>
    <MenuItem value="other">Other</MenuItem>
  </Select>
  {formErrors.gender && <Typography color="error">{formErrors.gender}</Typography>}
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
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
           <FormControl variant="outlined" required>
  <InputLabel
    sx={{
      color: 'black', // Default color
      '&.Mui-focused': {
        color: 'black', // Color when focused
      },
      '&.MuiInputLabel-shrink': {
        color: 'black', // Color when the label is shrunk
      },
    }}
  >
    Blood Group
  </InputLabel>
  <Select
    name="bloodGroup"
    value={formData.bloodGroup}
    onChange={handleChange}
    label="Blood Group"
    error={!!formErrors.bloodGroup}
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
  {formErrors.bloodGroup && <Typography color="error">{formErrors.bloodGroup}</Typography>}
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
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
                    <FormControl variant="outlined" required sx={{ width: '100%' }}>
  <InputLabel
    htmlFor="donateBefore"
    sx={{
      color: 'black',
      '&.Mui-focused': {
        color: 'black',
      },
      '&.MuiInputLabel-shrink': {
        color: 'black',
      },
    }}
  >
    Have you donated before?
  </InputLabel>
  <Select
    name="donateBefore"
    value={formData.donateBefore}
    onChange={handleChange}
    label="Have you donated before?"
    required
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
    <MenuItem value="">
      {/* Empty value for default */}
    </MenuItem>
    <MenuItem value="yes">Yes</MenuItem>
    <MenuItem value="no">No</MenuItem>
  </Select>
</FormControl>

{/* Conditional display of Last Donation Date */}
{formData.donateBefore === 'yes' && (
  <TextField
    label="Last Donation Date"
    name="lastDonationDate"
    type="date"
    variant="outlined"
    value={formData.lastDonationDate}
    onChange={handleChange}
    InputLabelProps={{
      shrink: true,
    }}
    required
    error={!!formErrors.lastDonationDate} 
    helperText={formErrors.lastDonationDate}
    inputProps={{
      max: new Date().toISOString().split('T')[0], // Prevent future dates
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black', // Border color
        },
        '&:hover fieldset': {
          borderColor: 'black', // Border color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black', // Border color when focused
        },
        '& input': {
          color: 'black', // Text color when entering data
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
          color: 'black', // Label color when shrunk
        },
      },
    }}
  />
)}


<TextField
    label="Medication"
    name="medication"
    variant="outlined"
    value={formData.medication}
    onChange={handleChange}
    error={!!formErrors.medication}
    helperText={formErrors.medication}
    InputLabelProps={{
      style: { color: 'black' },
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
      '& .MuiInputBase-input': {
        color: 'black', // Text color for input
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
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
              <DialogActions>
            <Button
  onClick={handleCloseDialog}
  sx={{
    backgroundColor: '#AF0B0A', // Custom background color
    color: 'white', // White text color
    '&:hover': {
      backgroundColor: '#8A0807', // Darker shade for hover effect
    },
  }}
>
  Cancel
</Button>

              <Button
  type="submit"
  variant="contained"
  sx={{
    bgcolor: '#AF0B0A',
    '&:hover': {
      bgcolor: '#AF0B0A', // Keep the same color on hover
    },
  }}
>
  Submit
</Button>

            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar open={openSnackbar}
       autoHideDuration={6000} onClose={handleCloseSnackbar}
       anchorOrigin={{vertical:'top', horizontal: 'right'}}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}
         sx={{ width: '100%',
          backgroundColor:'white',
          color:'black',
          fontWeight:'bold',
          border:'2px solid #AF0B0A',
          borderRadius:'8px'

          }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Donor;
