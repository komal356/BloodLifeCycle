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
  const initialFormData = {
    patientName: '',
    gender: '',
    contactNumber: '',
    email: '',
    bloodGroup: '',
    address: '',
    dateOfBirth: '',
    unitsRequired: '',
    bloodNeededDate: '',
    hospitalName: '',
    hospitalAddress: '',
    reasonForBlood: '',
    emergencyContactNumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);
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
     
    } else if (!/^[0-9]{10,15}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Invalid contact number. Must be 10-15 digits.';
      errors.contactNumber = 'Contact Number is required.';
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
    } else {
      const neededDate = new Date(formData.bloodNeededDate);
      const today = new Date();
      
      // Set the time of today's date to midnight for a proper comparison
      today.setHours(0, 0, 0, 0); // Set to 00:00:00.000
    
      if (neededDate.getTime() < today.getTime()) {
        errors.bloodNeededDate = 'Blood Needed Date must be today or in the future.';
      }
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
      // Reset form data after successful submission
      setFormData(initialFormData);
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
    setFormData(initialFormData); // Reset the form data when opening the dialog
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
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Blood Request Form
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
              Requester Information
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <FormControl variant="outlined" required error={!!formErrors.gender}>
              <InputLabel
                htmlFor="gender"
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
                Gender
              </InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
                sx={{
                  '& .MuiSelect-select': {
                    color: 'black', // Text color when entering data
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color by default
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color when focused
                  },
                }}
              >
                <MenuItem value="">
                
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {formErrors.gender && <div style={{ color: 'red' }}>{formErrors.gender}</div>}
            </FormControl>

            <TextField
              label="Contact Number"
              name="contactNumber"
              variant="outlined"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              error={!!formErrors.contactNumber}
              helperText={formErrors.contactNumber}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              error={!!formErrors.email}
              helperText={formErrors.email}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <FormControl variant="outlined" required error={!!formErrors.bloodGroup}>
              <InputLabel
                htmlFor="bloodGroup"
                sx={{
                  color: 'black', // Default label color
                  '&.Mui-focused': {
                    color: 'black', // Label color when focused
                  },
                  '&.MuiInputLabel-shrink': {
                    color: 'black', // Label color when shrunk
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
                sx={{
                  '& .MuiSelect-select': {
                    color: 'black', // Text color when entering data
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color by default
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Border color when focused
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
              {formErrors.bloodGroup && <div style={{ color: 'red' }}>{formErrors.bloodGroup}</div>}
            </FormControl>

            <TextField
              label="Home Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              required
              error={!!formErrors.address}
              helperText={formErrors.address}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              variant="outlined"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              error={!!formErrors.dateOfBirth}
              helperText={formErrors.dateOfBirth}
              InputLabelProps={{
                shrink: true,
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
          
            <TextField
              label="Units Required"
              name="unitsRequired"
              variant="outlined"
              type="number"
              value={formData.unitsRequired}
              onChange={handleChange}
              required
              error={!!formErrors.unitsRequired}
              helperText={formErrors.unitsRequired}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Blood Needed Date"
              name="bloodNeededDate"
              type="date"
              variant="outlined"
              value={formData.bloodNeededDate}
              onChange={handleChange}
              required
              error={!!formErrors.bloodNeededDate}
              helperText={formErrors.bloodNeededDate}
              InputLabelProps={{
                shrink: true,
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
            <TextField
              label="Hospital Name"
              name="hospitalName"
              variant="outlined"
              value={formData.hospitalName}
              onChange={handleChange}
              required
              error={!!formErrors.hospitalName}
              helperText={formErrors.hospitalName}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Hospital Address"
              name="hospitalAddress"
              variant="outlined"
              value={formData.hospitalAddress}
              onChange={handleChange}
              required
              error={!!formErrors.hospitalAddress}
              helperText={formErrors.hospitalAddress}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Reason for Blood"
              name="reasonForBlood"
              variant="outlined"
              value={formData.reasonForBlood}
              onChange={handleChange}
              required
              error={!!formErrors.reasonForBlood}
              helperText={formErrors.reasonForBlood}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
            <TextField
              label="Emergency Contact Number"
              name="emergencyContactNumber"
              variant="outlined"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              required
              error={!!formErrors.emergencyContactNumber}
              helperText={formErrors.emergencyContactNumber}

              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change border color when focused
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
        <DialogActions>
          
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Requester;
