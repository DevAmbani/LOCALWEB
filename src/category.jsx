import React, { useState } from "react";
import './index.css';
import { Grid, Card, CardContent, Button} from "@mui/material";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import eateries2 from "./images/eateries2.png";
import salon2 from "./images/salon2.png";
import cinema2 from "./images/cinema2.png";
import back from "./images/bg.png";
import { Redirect } from "react-router-dom"; 

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 630,
        sm: 800,
        md: 1000,
      },
    },
  });

function Category() {
    const [isEateriesHovered, setIsEateriesHovered] = useState(false);
    const [isEventsHovered, setIsEventsHovered] = useState(false);
    const [isActivitiesHovered, setIsActivitiesHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [redirectToEventsCount, setRedirectToEventsCount] = useState(false);

    const handleCardClick = (cardName) => {
        setSelectedCard(cardName === selectedCard ? null : cardName);
    };

    const getCardBorderStyle = (cardName) => {
        return selectedCard === cardName
            ? { border:'#190793 solid 2px' }
            : {};
    };

  
    
    const handleContinue = () => {
       
        if (!selectedCard) {
            Swal.fire({
                icon: 'warning',
                text: 'Please select an option.',
            });
        } else {
            setRedirectToEventsCount(true);
        }
    };

    if (redirectToEventsCount) {
        return <Redirect to="/eventsCount" />;
    }


    return (
        <div>
              <ThemeProvider theme={theme}>
            <Card style={{ backgroundImage: `url(${back})`,backgroundSize: 'cover',
                backgroundPosition: 'center', padding: '3.5%', borderRadius: '0px'}}>
                <CardContent>
                        <Typography style={{textAlign: 'center'}} className="Header2">WHAT CATEGORY DO YOU FALL UNDER?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>

                            <Grid item xs={10} sm={9} md={4} >
                                <Card className="card" onMouseEnter={() => setIsEventsHovered(true)} onMouseLeave={() => setIsEventsHovered(false)}  onClick={()=>handleCardClick("events")} 
                                  style={{ maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("events") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: '#E9E3FF', transform: isEventsHovered ? 'scale(1.05)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0px', position: 'relative' }}>
                                        <img src={cinema2} style={{ width: '100%', height: '105%', clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 0 100%, 0 0)' }} />
                                        <Typography className="text1">Standups, Movies, Acts, Dramas, Sports</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={4} >
                                <Card className="card" onMouseEnter={() => setIsEateriesHovered(true)} onMouseLeave={() => setIsEateriesHovered(false)} onClick={() =>handleCardClick("eateries")}  
                                style={{ maxWidth: '85%', maxHeight: '100%', ...getCardBorderStyle("eateries") , borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background:'#E9E3FF', transform: isEateriesHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                        <img src={eateries2} style={{ width: '100%', height: '105%', clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 0 100%, 0 0)' }} />
                                        <Typography className= "text1">Restaurants, Bakery, Cafes, Bars, Clubs</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={4} >
                                <Card className="card" onMouseEnter={() => setIsActivitiesHovered(true)} onMouseLeave={() => setIsActivitiesHovered(false)} onClick={() =>handleCardClick("activities")} 
                               style={{ marginTop:'2%' , maxWidth: '85%', maxHeight: '100%',  ...getCardBorderStyle("activities") , borderRadius: '0px',  boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background:'#E9E3FF', transform: isActivitiesHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ padding: '0%', position: 'relative' }}>
                                        <img src={salon2} style={{ width: '100%', height: '105%', clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 0 100%, 0 0)' }} />
                                        <Typography className="text1">Barber, Nails, Salons, Spa, Massages</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                     
                        <Button  variant="contained" onClick={handleContinue}  onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)} style={{fontSize:'18px',width:'18%',height:'55px', marginLeft: '41%', marginTop:'50px', border: '#ffffff solid 3px', borderRadius: '20px', backgroundColor:'#E2E8F0', transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer', color:'#190793', fontWeight:'500' }}>
                        CONTINUE</Button>

                    </CardContent>
            </Card>
            </ThemeProvider>
        </div>

    );
};

export default Category;
