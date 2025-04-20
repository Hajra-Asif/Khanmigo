import React from 'react'

import Accordion from 'react-bootstrap/Accordion';

function Faq({question, answer, eventKey}) {
    return (
        <>
        <div className="container-xxl " style={{width : "90%"}}>
        <Accordion>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
        </>
    );
}



export default Faq