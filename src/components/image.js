import React from 'react';
import moment from 'moment';

export default ({ image, timestamp }) => {
    return (
        <div className="card bg-dark text-white mb-2" style={{ width: '70%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
        <img src={image} className="card-img" alt="..." />
        </div>
    )
}