import React from 'react'; 
import { Button } from 'reactstrap'; 
// import pdf from '../../assets/images/Jason-Bolton-CV-S12.pdf';

export default function Resume() { 

    return (

        <div>
            <div>
                <p>click the link below to see my CV</p>
            </div>
            <Button className="btn btn-outline-info btn-lg">
            <a href='/Jason-Bolton-CV-S12.pdf' target="_blank">PDF</a>
            </Button>
        </div>
    )
}