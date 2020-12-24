import React, { useState } from 'react';
import './index.css';

export default (props) => {
    const [visible] = useState(props.visible);

    return (
        <div className={`loading ${visible ? 'hidden' : ''}`}>
            <div className="text_loading">
                <h2>Loading...</h2>
            </div>
        </div>
    );
};
