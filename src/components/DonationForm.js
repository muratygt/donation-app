import React, { useState } from 'react';

function DonationForm ( {amount, giveDonation} ) {
    const [value, setValue] = useState("");

    const minAmountError = (value && value < 5);
    const maxAmountError = (value > amount)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value && !(minAmountError || maxAmountError)){
            giveDonation(value);
        }
        setValue("");
    }

    const handleKeyPress = (e) => {
        if(e.which < 48 || e.which > 57){
            e.preventDefault();
        }
    }


    return (
        <div>
            <div className="donation-form">
                <form onSubmit={handleSubmit}>
                    <span className="input-dollar left">
                        <label htmlFor="donationAmount"></label>
                        <input
                            id="donation-form"
                            type="text"
                            value={value}
                            name="donation"
                            className="input-box"
                            onKeyPress={handleKeyPress}
                            onChange={e => setValue(Number(e.target.value))}
                            disabled={amount === 0}
                        />
                    </span>
                    <button className="donate-button" disabled={false}>Give Now</button>
                </form>
            </div>
            <div className="errors">
                {minAmountError ? <p>This campaign only accepts amounts greater than $5</p> : <p></p>}
                {maxAmountError ? <p>Please enter an amount less than or equal to the remaining balance of {amount}</p> : <p></p>}

            </div>
        </div>
    )
}

export default DonationForm;