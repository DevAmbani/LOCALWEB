import React from 'react';
import './MyDatecard.css';

const MyDatecard = ({ date, info, onClick }) => {
    return (
        <div className='mycard' onClick={onClick}>
            <h1 className="text-lg font-bold mb-2">{date}</h1>
            <div className='mycard-content'>
                <div className='insidecard'>
                    <h5 className="text-sm fontWeight=semibold ">{info}</h5>
                </div>
            </div>
        </div>
    );
};

export default MyDatecard;
