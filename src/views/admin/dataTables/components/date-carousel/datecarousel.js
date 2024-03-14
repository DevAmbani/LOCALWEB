import React, { useRef, useState } from 'react';
import MyDatecard from './MyDatecard';
import "./MyDatecard.css";
import CheckTable from '../CheckTable';
import tableDataCheck from "../../variables/tableDataCheck.json";
import "./datecarousel.css";
import Card from "components/card/Card";
import { Flex, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import NoDataFound from "../../../animations/NoDataFound.json";
import checkIN from "../../../animations/checkIN.json";
import Search from '../Search';

const Datecarousel = () => {
  const boxRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [checkedBookings, setCheckedBookings] = useState([]);
  const [containerPressed, setContainerPressed] = useState(false);
  const [searchText, setSearchText] = useState("");

  const btnpressprev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
    }
  };

  const handleCardClick = (date, day) => {
    setSelectedDate(date);
    setSelectedDay(day);
    setContainerPressed(true);

    const filteredUpcomingBookings = tableDataCheck.filter(item => item.date === date && item.day === day && !item.showedUp);
    setUpcomingBookings(filteredUpcomingBookings);

    const filteredCheckedBookings = tableDataCheck.filter(item => item.date === date && item.day === day && item.showedUp);
    setCheckedBookings(filteredCheckedBookings);
  };

  const handleCheckboxChange = (bookingId, isUpcoming) => {
    if (isUpcoming) {
      const updatedUpcoming = upcomingBookings.map(booking => {
        if (booking.bookingId === bookingId) {
          return { ...booking, showedUp: !booking.showedUp };
        }
        return booking;
      });
      const updatedBooking = updatedUpcoming.find(booking => booking.bookingId === bookingId);
      if (updatedBooking.showedUp) {
        setUpcomingBookings(prev => prev.filter(booking => booking.bookingId !== bookingId));
        setCheckedBookings(prev => [...prev, updatedBooking]);
      } else {
        setUpcomingBookings(prev => prev.filter(booking => booking.bookingId !== bookingId));
      }
    } else {
      const updatedChecked = checkedBookings.map(booking => {
        if (booking.bookingId === bookingId) {
          return { ...booking, showedUp: !booking.showedUp };
        }
        return booking;
      });
      const updatedBooking = updatedChecked.find(booking => booking.bookingId === bookingId);
      if (updatedBooking.showedUp) {
        setCheckedBookings(prev => prev.filter(booking => booking.bookingId !== bookingId));
      } else {
        setCheckedBookings(prev => prev.filter(booking => booking.bookingId !== bookingId));
        setUpcomingBookings(prev => [...prev, updatedBooking]);
      }
    }
  };

  const filteredUpcomingBookings = upcomingBookings.filter(booking =>
    booking.bookingName.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCheckedBookings = checkedBookings.filter(booking =>
    booking.bookingName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="product-carousel">
      <div className='carousel-wrapper'>
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container" ref={boxRef}>
        {Array.from(new Set(tableDataCheck.map(item => item.date))).map((date, index) => {
          const correspondingItem = tableDataCheck.find(item => item.date === date);
          return (
            <MyDatecard
              key={index}
              date={correspondingItem.date}
              info={correspondingItem.day}
              onClick={() => handleCardClick(correspondingItem.date, correspondingItem.day)}
            />
          );
        })}
      </div>
      </div>

      <div className='table-wrapper'>
      <Card>
        <Search onSearch={setSearchText} />
        <br />
        {!containerPressed ? (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Lottie animationData={checkIN} />
            <Text fontSize="14px" fontWeight="bold" lineHeight="100%">
              Select a specific date to view its corresponding data !!
            </Text>
          </div>
        ) : (
          <div>
            {selectedDate && selectedDay && (
              <div>
                <div style={{ margin: 0 }}>
                  <Flex px="25px" justify="space-between" mb="20px" align="center">
                    <Text fontSize="22px" fontWeight="700" lineHeight="100%">
                      Upcoming Booking
                    </Text>
                  </Flex>
                  {filteredUpcomingBookings.length > 0 ? (
                    <CheckTable
                      tableData={filteredUpcomingBookings}
                      onCheckboxChange={(bookingId) => handleCheckboxChange(bookingId, true)}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Lottie animationData={NoDataFound} style={{ width: "300px", height: "200px" }} />
                    </div>
                  )}
                </div>

                <br />

                <div style={{ margin: 0 }}>
                  <Flex px="25px" justify="space-between" mb="20px" align="center">
                    <Text fontSize="22px" fontWeight="700" lineHeight="100%">
                      Checked Booking
                    </Text>
                  </Flex>
                  {filteredCheckedBookings.length > 0 ? (
                    <CheckTable
                      tableData={filteredCheckedBookings}
                      onCheckboxChange={(bookingId) => handleCheckboxChange(bookingId, false)}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Lottie animationData={NoDataFound} style={{ width: "300px", height: "200px" }} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
      </div>
      
    </div>
  );
};

export default Datecarousel;
