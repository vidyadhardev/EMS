import React from 'react';

const SummaryCard = ({ icon, text, number ,color }) => {
    return (
        <div className='rounded flex bg-white'>
            <div className={`text-3xl flex justify-center items-center text-white px-4 ${color}`}>
                {icon}
            </div>
            <div className='pl-4 py-1'>
                <span className='text-lg font-semibold'> {text}</span>
                <p className='text-xl font-bold'>{number}</p>
            </div>
        </div>
    );
}

export default SummaryCard;
