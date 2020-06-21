import React from 'react';

const AmountNeeded = ( { amount }) => {
    return (
        <div className="tooltip">
            <div className="tooltiptext">
                {(amount >0)
                    ?
                    <span><span className="small-dollar-sign">$ </span><strong>{amount}</strong> still needed to fund the project </span>
                    :
                    <span>Thanks for your generosity. Project is fully funded</span>
                }
            </div>
        </div>
    );
}

export default AmountNeeded;