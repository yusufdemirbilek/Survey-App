import React, { useState } from "react";
import {  MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";

export default function Basic(props) {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the selected option value
    const selectedOptionValue = event.target.elements.flexRadioDefault.value;
    setSelectedOption(selectedOptionValue)

    // Send the selected option to the server
    fetch('https://.....com/submit-answer', {
      method: 'POST',
      body: JSON.stringify({
        question: props.question,
        answer: selectedOptionValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    });
  }

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-white mt-3" action="" onSubmit={handleSubmit}>
            <p className="fw-bold">{props.question}</p>
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault1"
              label={props.option1}
              defaultChecked
              value={props.option1}
              onChange={() => setSelectedOption(props.option1)}
            />
            <MDBRadio
              name="flexRadioDefault"
              id="flexRadioDefault2"
              label={props.option2}
              value={props.option2}
              onChange={() => setSelectedOption (props.option2)}
            />
            <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label={props.option3}
                value={props.option3}
                onChange={() => setSelectedOption (props.option3)}
            />
            </form>
<div className="text-end">

</div>
</MDBCol>
</MDBRow>
</MDBContainer>
);
}
