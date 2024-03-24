import React, { useState } from "react";
import './index.css';
import { Grid, Card, CardContent, Typography, Button , Box, TextField, Checkbox, FormControlLabel} from "@mui/material";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Switch, MenuItem, Select, InputLabel } from "@mui/material";
import placard from "./images/placard.png";
import party from "./images/party.png";
import calendar from "./images/calendar.png";
import clock from "./images/clock.png";
import descrp from "./images/notes.png";
import pricetag from "./images/pricetag.png";
import location from "./images/location.png";
import axios from 'axios';
import { Redirect } from "react-router-dom"; 

function EventsForm() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState(""); 
  const [isFreeEvent, setIsFreeEvent] = useState(false);
  const [categoryPrices, setCategoryPrices] = useState({});
  const [categoryTickets, setCategoryTickets] = useState({});
  const [categories, setCategories] = useState(['']);
  const [isBannerUploaded, setIsBannerUploaded] = useState(false);
  const [highlightCount, setHighlightCount] = useState(0);
  const [locations, setLocations] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsMultiDay(event.target.checked);
    setSelectedDateRange([null, null]);
  };

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const handleFreeEventToggle = () => {
    setIsFreeEvent(!isFreeEvent);
  };

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const handleCategoryPriceChange = (category, price) => {
    setCategoryPrices({
      ...categoryPrices,
      [category]: price,
    });
  };

  const handleCategoryTicketChange = (category, tickets) => {
    setCategoryTickets({
      ...categoryTickets,
      [category]: tickets,
    });
  };

  const handleBannerUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setIsBannerUploaded(true);
    }
  };

  const handleHighlightsUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setHighlightCount(files.length);
    }
  };

  
 
  // const handleChange = async (event) => {
  //   const userInput = event.target.value;
  //   setInputValue(userInput);
  
  //   try {
  //     const response = await axios.get('https://chrislim2888-ip-address-geolocation.p.rapidapi.com/', {
  //       params: {
  //         key: '<REQUIRED>',
  //         ip: userInput,
  //         format: 'json',
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '2b7f7115f8mshb57e9048252d59ap1197f8jsnff702884dc6f',
  //         'X-RapidAPI-Host': 'chrislim2888-ip-address-geolocation.p.rapidapi.com',
  //       },
  //     });
  
  //     if (response.status === 200) {
  //       setLocations(response.data.results || []); // Assuming data.results contains locations
  //       setError(null);
  //     } else {
  //       setError('Failed to fetch locations');
  //     }
  //   } catch (error) {
  //     setError('Error fetching locations: ' + error.message);
  //   }
  // };
  

  return (
    <div>
      <Card style={{ backgroundColor: "#f3f0ff", padding: '1.7%', borderRadius: '0px', display: 'flex' }}>
        <Card style={{borderRadius:'25px', position: 'relative', zIndex: 1,height:'100%', width: "85%", margin: '0 auto', marginTop: '6px', backgroundColor: '#ffffff' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div style={{display:'flex'}}>
                <img src={placard} style={{width:'45px' , marginRight:'10px'}}/>
                <Typography className="formHeadings" style={{marginTop:'15px',marginBottom:'5px'}}>Name of business</Typography>
                </div>
                <TextField id="filled-basic" label="Event Name" variant="filled" style={{marginTop:'15px',marginBottom:'40px', width:'70%'}}/>

                <div style={{display:'flex'}}>
                <img src={location} style={{width:'40px', marginRight:'10px', marginBottom:'5px'}}/>
                <Typography className="formHeadings" style={{marginTop:'10px',marginBottom:'5px'}}>Location</Typography>
                </div>
                <TextField id="filled-basic" 
                label="Enter location of the event" 
                variant="filled" 
                style={{marginTop:'15px',marginBottom:'40px', width:'70%'}}
                value={inputValue}
                // onChange={handleChange} 
                />

                <div style={{display:'flex'}}>
                  <img src={clock} style={{width:'40px', marginRight:'10px', marginBottom:'8px'}}/>
                  <Typography className="formHeadings" >Timings</Typography>
                </div>
                <Typography className="formSubHeadings">Start Time</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={startTime}
                    onChange={handleStartTimeChange}
                    renderInput={(params) => <TextField {...params} style={{marginBottom:'20px'}} />}
                  />
                </LocalizationProvider>
                <Typography className="formSubHeadings">End time</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={endTime}
                    onChange={handleEndTimeChange}
                    renderInput={(params) => <TextField {...params}/>}
                  />
                </LocalizationProvider>

                <React.Fragment>
                  <InputLabel style={{fontSize:'100%'}}>Prices for services</InputLabel>
                  {categories.map((category, index) => (
                    <div key={index} style={{marginBottom:'12px'}}>
                      <Select
                        value={category}
                        onChange={(e) => handleCategoryChange(index, e.target.value)}
                        label={`Category ${index + 1}`}
                        style={{ width: '150px', marginRight: '10px' }}>
                        <MenuItem value="VIP">Massage</MenuItem>
                        <MenuItem value="EarlyBird">Nails</MenuItem>
                      </Select>
                      {!isFreeEvent && (
                      <TextField
                        label="Price"
                        value={categoryPrices[category] || ''}
                        onChange={(e) => handleCategoryPriceChange(category, e.target.value)}
                        type="number"
                        style={{ marginRight: '10px', width:'20%' }}
                      />)}
                      <TextField
                        label="Duration(in mins)"
                        value={categoryTickets[category] || ''}
                        onChange={(e) => handleCategoryTicketChange(category, e.target.value)}
                        type="number"
                        style={{ marginRight: '10px' }}
                      />
                    </div>
                  ))}
                  <Button onClick={handleAddCategory} variant="contained" color='brand100' style={{ marginTop: '10px' }}>Add Services</Button>
                </React.Fragment>



               
              </Grid>
              <Grid item xs={6}>
               
                 {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {locations.map((location, index) => (
                  <Typography key={index}>{location}</Typography>
                  ))}
                  </div> */}

                <div style={{display:'flex'}}>
                <img src={pricetag} style={{width:'40px', marginRight:'10px', marginBottom:'5px'}}/>
                <Typography className="formHeadings">Ticket Price</Typography>
                </div>
                <div style={{display:'flex'}}>
                  <div><Switch checked={isFreeEvent} onChange={handleFreeEventToggle} /></div>
                  <div><Typography style={{marginTop:'5px'}} >{isFreeEvent ? 'Free event' : 'Paid event'}</Typography></div>
                </div>
               
                <div style={{ marginTop: '30px', display:'flex'}}>
                  <Button variant="contained" name="banner" component="label" color="brand200" className="buttonText1" style={{marginTop:'25px', width:'35%'}}>
                  Upload Banner <input id="contained-button-file" type="file" onChange={handleBannerUpload} style={{ display: 'none' }}/>
                  </Button>
                  {isBannerUploaded && <Typography className="formSubHeadings" style={{marginTop:'30px', marginLeft:'10px', textDecoration:'underline'}}>Banner uploaded</Typography>}
                </div>
                <Typography className="formSubHeadings" style={{marginTop:'6px'}}>(Only 1) Will be seen as the front cover of the app</Typography>
                <div style={{ marginTop: '20px', display:'flex'}}>
                  <Button variant="contained" component="label" color="brand200" className="buttonText1" style={{marginTop:'10px', width:'35%'}}>
                  Upload Highlights <input id="contained-button-file" type="file" onChange={handleHighlightsUpload} style={{ display: 'none' }} multiple/>
                  </Button>
                  {highlightCount > 0 && (
                  <Typography  className="formSubHeadings"  style={{ marginTop:'30px', marginLeft:'10px', textDecoration:'underline'}}>
                  {highlightCount} {highlightCount === 1 ? "image" : "images"} uploaded for highlights
                  </Typography>
                  )}
                  </div>
                  <Typography className="formSubHeadings" style={{marginTop:'6px'}}>(Max 25) Help people see what they can expect from this event</Typography>
              
                  <div style={{ marginTop: '30px', display:'flex'}}>
                  <Button variant="contained" name="banner" component="label" color="brand200" className="buttonText1" style={{marginTop:'25px', width:'35%'}}>
                  Upload any Pamplet <input id="contained-button-file" type="file" onChange={handleBannerUpload} style={{ display: 'none' }}/>
                  </Button>
                  {isBannerUploaded && <Typography className="formSubHeadings" style={{marginTop:'30px', marginLeft:'10px', textDecoration:'underline'}}>Pamplet uploaded</Typography>}
                </div>

                  <div style={{display:'flex', marginTop:'40px'}}>
                <img src={descrp} style={{width:'30px', marginRight:'10px', marginBottom:'8px'}} />
                <Typography className="formHeadings" style={{ paddingBottom:'5px'}}>Description of the event</Typography>
                </div>
                <TextField
                  id="filled-basic"
                  label="Enter a description"
                  variant="filled"
                  value={description}
                  onChange={handleDescriptionChange}
                  multiline
                  rows={4}
                  style={{width:'70%'}}
                />
                
                <div style={{display:'flex'}}>
                <img src={placard} style={{width:'45px' , marginRight:'10px'}}/>
                <Typography className="formHeadings" style={{marginTop:'15px',marginBottom:'5px'}}>Category of business</Typography>
                </div>
                <TextField id="filled-basic" label="Category" variant="filled" style={{marginTop:'15px',marginBottom:'40px', width:'70%'}}/>

                <div style={{display:'flex', marginTop:'40px'}}>
                <img src={descrp} style={{width:'30px', marginRight:'10px', marginBottom:'8px'}} />
                <Typography className="formHeadings" style={{ paddingBottom:'5px'}}>Tags (to gain relevance)</Typography>
                <Typography className="formSubHeadings" style={{marginTop:'6px'}}>Seperated by commas</Typography>
              
                </div>
                <TextField
                  id="filled-basic"
                  label="Enter a description"
                  variant="filled"
                  value={description}
                  onChange={handleDescriptionChange}
                  multiline
                  rows={2}
                  style={{width:'70%'}}
                />

                <div>
                  <Link to={"/admin"}><Button variant="contained" className="buttonText2" color="brand500" style={{marginTop:'80px' , width:'80%',height:'42px',justifyContent:'center'}}>Publish Now</Button></Link>
                </div>
                <div>
                  <Button variant="contained" className="buttonText2" color="brand500" style={{marginTop:'30px', width:'80%',height:'42px'}}>Save Draft</Button>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};

export default EventsForm;
