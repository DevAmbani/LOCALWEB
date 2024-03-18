import React, { useState } from "react";
import './index.css';
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2'
import concert2 from "./images/concert2.jpg";
import blue1 from "./images/blue1.png";
import blue2 from "./images/blue2.png";
import blue3 from "./images/blue3.png";
import blue4 from "./images/blue4.png";


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 630,
        sm: 800,
        md: 1000,
      },
    },
  });

function EventsCount() {
    const [isA1, setA1] = useState(false);
    const [isA2, setA2] = useState(false);
    const [isA3, setA3] = useState(false);
    const [isA4, setA4] = useState(false);
    const [isB1, setB1] = useState(false);
    const [isB2, setB2] = useState(false);
    const [isB3, setB3] = useState(false);
    const [isB4, setB4] = useState(false);
    const [isB5, setB5] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [selectedCard1, setSelectedCard1] = useState(null);
    const [selectedCard2, setSelectedCard2] = useState(null);

    const handleCardClick1 = (cardName) => {
        setSelectedCard1(cardName === selectedCard1 ? null : cardName);
    };

    const getCardBorderStyle1 = (cardName) => {
        return selectedCard1 === cardName
            ? { border: '#11047A solid 2px'}
            : {};
    };

    const handleCardClick2 = (cardName) => {
        setSelectedCard2(cardName === selectedCard2 ? null : cardName);
    };

    const getCardBorderStyle2 = (cardName) => {
        return selectedCard2 === cardName
            ? { border: '#11047A solid 2px'}
            : {};
    };

    const handleContinue = () => {
        if (!selectedCard1 || !selectedCard2) {
            Swal.fire({
                icon: 'warning',
                text: 'Please select an option for both questions.',
            });
        } else {
            // Navigate to the eventsForm page
            window.location.href = '/eventsForm';
        }
    };

    return (
        <div>
              <ThemeProvider theme={theme}>
            <Card style={{ background:'linear-gradient(0deg, rgba(100,61,184,1) 13%, rgba(98,58,183,1) 13%, rgba(233,227,255,1) 96%)', borderRadius: '0px', zIndex:1, position:'relative'}}>
            <Card style={{ background: '#FFFFFF', borderRadius: '35px', padding:'0%', margin:'3%', zIndex:1, position:'relative'}}>
                <img src={concert2} style={{width: '100%', height: '430px'}}/>
                    
                        <Typography style={{paddingTop:'5%',textAlign:'center', paddingBottom:'2%'}} className="Header2">How many events are you planning to create?</Typography>
                        <Grid container style={{ marginTop: '0.8%',  justifyContent: 'center', paddingBottom:'7%', position:'relative'}} spacing={3}>
                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}}>
                                <Card className="card" onMouseEnter={() => setA1(true)} onMouseLeave={() => setA1(false)}  onClick={()=>handleCardClick1("A1")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle1("A1") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isA1 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center', fontSize:''}} className= "text1">Only 1</Typography>
                                   </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setA2(true)} onMouseLeave={() => setA2(false)}  onClick={()=>handleCardClick1("A2")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle1("A2") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isA2 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center'}} className= "text1">2/10</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setA3(true)} onMouseLeave={() => setA3(false)}  onClick={()=>handleCardClick1("A3")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle1("A3") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isA3 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center'}} className="text1">10+</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}}>
                                <Card className="card" onMouseEnter={() => setA4(true)} onMouseLeave={() => setA4(false)}  onClick={()=>handleCardClick1("A4")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle1("A4"), borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isA4 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center'}} className="text1">Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <img src={blue1} style={{position: 'absolute', left: '0', width: '32%', zIndex:0, marginBottom:'5%', paddingLeft:'2%'}} />
                            <img src={blue2} style={{position: 'absolute', right: '0', width: '32%', zIndex:0, paddingTop:'1%'}} />
                            
                            </Grid>

                    

                       
                        <Typography style={{paddingTop:'10%', textAlign:'center', paddingBottom:'2%', zIndex:1, position:'relative'}} className="Header2">How big is your event?</Typography>
                        <Grid container style={{ marginTop: '0.5%',  justifyContent: 'center'}} spacing={3}>

                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}}>
                                <Card className="card" onMouseEnter={() => setB1(true)} onMouseLeave={() => setB1(false)}  onClick={()=>handleCardClick2("B1")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle2("B1") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background:'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isB1 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center'}} className= "text1">25 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setB2(true)} onMouseLeave={() => setB2(false)}  onClick={()=>handleCardClick2("B2")} 
                                  style={{ width: '200px', height: '200px',  ...getCardBorderStyle2("B2") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isB2 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative', paddingTop:'55px'  }}>
                                        <Typography style={{textAlign:'center'}} className="text1">25-50 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setB3(true)} onMouseLeave={() => setB3(false)}  onClick={()=>handleCardClick2("B3")} 
                                  style={{width: '200px', height: '200px',  ...getCardBorderStyle2("B3") ,borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isB3 ? 'scale(1.1)' : 'scale(1)' , transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative', paddingTop:'55px'  }}>
                                        <Typography style={{textAlign:'center'}} className="text1">50-150 people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setB4(true)} onMouseLeave={() => setB4(false)} onClick={() =>handleCardClick2("B4")}  
                                style={{width: '200px', height: '200px', ...getCardBorderStyle2("B4") , borderRadius: '0px', boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background:'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isB4 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{ position: 'relative' , paddingTop:'55px' }}>
                                      <Typography style={{textAlign:'center'}} className= "text1">150+ people</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={10} sm={9} md={2} style={{zIndex:1}} >
                                <Card className="card" onMouseEnter={() => setB5(true)} onMouseLeave={() => setB5(false)} onClick={() =>handleCardClick2("B5")} 
                               style={{width: '200px', height: '200px', maxHeight: '100%',  ...getCardBorderStyle2("B5") , borderRadius: '0px',  boxShadow: '0 4px 8px rgba(50, 50, 50, 0.5)', background: 'radial-gradient(circle, rgba(190,227,248,1) 7%, rgba(233,227,255,1) 81%)', transform: isB5 ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer' }}>
                                    <CardContent style={{  position: 'relative' , paddingTop:'75px' }}>
                                        <Typography style={{textAlign:'center'}} className="text1">Not Sure</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <img src={blue3} style={{position: 'absolute', bottom:'10',right: '0', width: '35%', zIndex:0, marginTop: '2.5%'}} /> 
                            <img src={blue4} style={{position: 'absolute', left: '0', width: '32%', zIndex:0, marginTop: '2.5%', paddingTop:'5%'}} /> 
                        </Grid>

                        <Button  variant="contained" onClick={handleContinue} onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)} style={{width:'18%',height:'55px',color:'#11047A', marginLeft: '41%', marginTop:'180px', marginBottom:'100px', border: '#ffffff solid 2px', borderRadius: '20px', backgroundColor:'#e2e8f0', transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', cursor: 'pointer', fontSize:'22px' }}>
                           CONTINUE</Button>
            </Card>
            </Card>
            </ThemeProvider>
        </div>

    );
};

export default EventsCount;
