import React from 'react';
import '../App.css';
import './fields.css';

function MyComponent() {
    // Define your custom field names here
    const customFieldNames = [
        "Name",
        "Established_date",
        "Location",
        "Area",
        "IsVulnerable",
        "dateofRecorded",
        "associatedWith",
        "recordedBy",
        "isMonitored",
        "hasShape",
        "type",
        "linkedWith",
        "madeBy",
        "madeFor",
        "isMadeFor"
        // Add more field names as needed
    ];

    const inputs = customFieldNames.map((fieldName, index) => (
        <input key={index} className='inputContainer' type='text' placeholder={fieldName} />
    ));

    return (
        <div className="main">
            <h1 className='projectName'>NCHLOD</h1>

            <div className='fields'>
                {inputs}
            </div>
        </div>
    );
}

export default MyComponent;
