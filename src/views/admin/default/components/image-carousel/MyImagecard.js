import React from 'react';
import './MyImagecard.css';

const MyImagecard = ({ date, info, onClick }) => {
    return (
        <div className='myimgcard' onClick={onClick}>
            <h1 className="text-lg font-bold mb-2">{date}</h1>
            <div className='myimgcard-content'>
                <div className='insideimgcard'>
                    <h5 className="text-sm fontWeight=semibold ">{info}</h5>
                </div>
            </div>
        </div>
    );
};

export default MyImagecard;
