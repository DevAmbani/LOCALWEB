import React, { useState, useRef, useEffect } from 'react';
import MyImageCard from './MyImagecard';
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import ComplexTable from "views/admin/default/components/ComplexTable";
import Card from "components/card/Card.js";
import Lottie from "lottie-react";
import Click from "../../../animations/Click.json";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import { EmailIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, SimpleGrid, Input, Select, Button, Text, Flex } from "@chakra-ui/react";
import "./Imagecarousel.css";

const Imagecarousel = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [allEmails, setAllEmails] = useState([]);

    useEffect(() => {
        const emails = tableDataComplex
            .filter(item => item.date === selectedDate && item.eventname === selectedEvent)
            .map(item => item.email);
        setAllEmails([...new Set(emails)]);
    }, [selectedDate, selectedEvent]);

    const handleCardClick = (date, event) => {
        setSelectedDate(date);
        setSelectedEvent(event);
        setShowDetails(true);
        const filteredEmailData = tableDataComplex.filter(item => item.date === date && item.eventname === event);
        if (filteredEmailData.length > 0) {
            const emails = filteredEmailData.map(item => item.email);
            setSelectedEmail(emails);
        } else {
            setSelectedEmail([]);
        }
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setSelectedEmail([email]); 
    };

    const boxRef = useRef(null);

    const btnpressprev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
            console.log(width);
        }
    };

    const btnpressnext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
            console.log(width);
        }
    };

    const uniqueDates = [...new Set(tableDataComplex.map(item => item.date))];

    return (
        <div className="product-carousel">
            <div className="carousel-wrapper">
                <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                </button>
                <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                </button>
                <div className="product-container" ref={boxRef}>
                    {uniqueDates.map((date, index) => (
                        <MyImageCard
                            key={index}
                            date={date}
                            info={tableDataComplex.find(item => item.date === date).eventname}
                            onClick={() => handleCardClick(date, tableDataComplex.find(item => item.date === date).eventname)}
                        />
                    ))}
                </div>
            </div>

            <div className="table-wrapper">
            <Card>
                {showDetails ? (
                    <div>
                        <SimpleGrid columns={3} gap='22px' mb='20px'>
                            <FormControl>
                                <FormLabel>Date:</FormLabel>
                                <Input type="text" value={selectedDate || ''} readOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Event:</FormLabel>
                                <Input type="text" value={selectedEvent || ''} readOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email:</FormLabel>
                                <Select value={selectedEmail[0] || ''} onChange={handleEmailChange}>
                                    {allEmails.map((email, index) => (
                                        <option key={index} value={email}>
                                            {email}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl gridColumn="1 / -1">
                                <FormLabel>Message:</FormLabel>
                                <Input type="text" placeholder="Enter your message" />
                            </FormControl>
                        </SimpleGrid>
                        <Flex justifyContent="center">
                            <Button leftIcon={<EmailIcon />} variant="brand">
                                Send Mail
                            </Button>
                        </Flex>
                        <ComplexTable
                            columnsData={columnsDataComplex}
                            tableData={tableDataComplex.filter(item => item.date === selectedDate && item.eventname === selectedEvent)}
                        />
                    </div>
                ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Lottie animationData={Click} />
                        <Text fontSize="14px" fontWeight="bold" lineHeight="100%" >
                            Click a specific date to view its corresponding data !!
                        </Text>
                    </div>
                )}
            </Card>
            </div>
            
        </div>
    );
};

export default Imagecarousel;
