import React, {useState} from 'react';
import DonationForm from "./components/DonationForm";
import DonationSummary from "./components/DonationSummary";
import ProgressBar from "./components/ProgressBar";
import AmountNeeded from "./components/AmountNeeded";


function App() {
    const [amount, setAmount] = useState(5000);
    const [numberOfDonations, setNumberOfDonations] = useState(0);

    const handleDonation = (value) => {
        setAmount(amount-value);
        setNumberOfDonations(numberOfDonations + 1);
    }
  return (
    <div className="App">
        <AmountNeeded amount={amount} />
        <div className="card">
            <div className="progress-bar">
                <ProgressBar amount={amount}/>
            </div>
            <div className="card-content">
                <DonationSummary amount={amount} numberOfDonations={numberOfDonations} />
                <DonationForm amount={amount} giveDonation={handleDonation}/>
            </div>
        </div>
    </div>
  );
}

export default App;
