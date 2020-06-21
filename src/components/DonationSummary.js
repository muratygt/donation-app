import React from "react";

const DonationSummary = ( {amount, numberOfDonations} ) => {
    return(
        <div>
            <h1 className="card-header">
                { (amount > 0)
                ?
                <span>Only four days left to fund this project</span>
                :
                <span>This project is funded on tiem</span>
                }
            </h1>
            { (amount > 0)
                ?
                <span>Join the <span style={{ fontWeight: 'bold'}}>{numberOfDonations !== 0 && numberOfDonations}</span> other donor{numberOfDonations === 1 ? '' : 's'} who already supported this campaign</span>
                :
                <span>Thanks all of <span style={{ fontWeight: 'bold'}}>{numberOfDonations}</span> donors who supported this campaign</span>
            }
        </div>
    )
}

export default DonationSummary;