import React, {useState} from 'react';
import DonationForm from "./components/DonationForm";


function App() {
    const [amount, setAmount] = useState(5000);
    const [numberOfDonation, setNumberOfDonations] = useState(0);

    const handleDonation = (value) => {
        setAmount(amount-value);
        setNumberOfDonations(numberOfDonation + 1);
    }
  return (
    <div className="App">
      <DonationForm amount={amount} giveDonation={handleDonation}/>
    </div>
  );
}

export default App;
