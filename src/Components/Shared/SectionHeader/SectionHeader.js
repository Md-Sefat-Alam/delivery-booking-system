import React from 'react';

const SectionHeader = ({text}) => {
    return (
        <div>
            <h1 className='bg-gray-200 text-gray-500 p-2 my-4 rounded font-bold capitalize'>{text}</h1>
        </div>
    );
};

export default SectionHeader;