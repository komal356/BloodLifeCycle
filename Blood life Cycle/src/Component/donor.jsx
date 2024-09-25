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

    // First Name and Last Name Validation
    if (formData.FirstName.length < 2) {
      errors.FirstName = 'First Name must be at least 2 characters long';
    } 

    // Contact Number Validation
    if (!phoneRegex.test(formData.contactNo)) errors.contactNo = 'Contact Number must start with +92, 0092, or 03 and be followed by 9 digits';

    // Email Validation
    if (!emailRegex.test(formData.email)) errors.email = 'Email must be a valid';

    // Last Donation Date Validation
    if (formData.lastDonationDate && formData.lastDonationDate < today) {
      errors.lastDonationDate = 'Last Donation Date cannot be in the Past & currunt';
    } 
    
    // Address Validation
    if (formData.address.length < 5) {
      errors.address = 'Address must be at least 5 characters long';
    }
  
    // // Medication Field Validation
    // if (formData.donateBefore === 'yes' && !formData.medication) {
    //   errors.medication = 'Medication field is required if you have donated before';
    // }
  

     // Blood Group Validation
  if (!formData.bloodGroup) {
    errors.bloodGroup = 'Blood Group is required';
  }  
  
    // Check if last donation date is filled when donateBefore is yes
    if (formData.donateBefore === 'yes' && !formData.lastDonationDate) {
      errors.lastDonationDate = 'Last Donation Date is required if you have donated before';
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
          // width:'110%',
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
            borderRadius: '16px',
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
              borderRadius: 4,
              boxShadow: 5,
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
              helperText={formErrors.contactNo}
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
                htmlFor="gender"
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
                Gender
              </InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
                required
                error={!!formErrors.gender}
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
                htmlFor="bloodGroup"
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
                <MenuItem value="">
                
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
              label="Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              required
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

{/* Medication field now always visible */}
<TextField
  label="Medication"
  name="medication"
  variant="outlined"
  value={formData.medication}
  onChange={handleChange}
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
