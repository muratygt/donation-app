import React from 'react';

const ProgressBar = ( { amount }) => {
    let remainingAmountPercentage = Math.min(100, Math.max(0, (100-((amount/5000)*100))));
    return (
        <div className="progress-bar">
            <span style={{width: `${remainingAmountPercentage}%`}}></span>
        </div>
    );
}

export default ProgressBar;