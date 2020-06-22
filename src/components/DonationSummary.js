import React from "react";

const DonationSummary = ( {amount, numberOfDonations} ) => {
    return(
        <div>
            <h1 className="card-header">
                { (amount > 0)
                ?
                <span>Only four days left to fund this project</span>
                :
                <span>This project is funded on time</span>
                }
            </h1>
            { (amount !== 0)
                ?
                <p className="donor-message">Join the <span style={{ fontWeight: 'bold'}}>{numberOfDonations !== 0 && numberOfDonations}</span> other donor{numberOfDonations === 1 ? '' : 's'} who already supported this campaign</p>
                :
                <p className="donor-message">Thanks to all donors who supported this campaign</p>
            }
        </div>
    )
}

export default DonationSummary;