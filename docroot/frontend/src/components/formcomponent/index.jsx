import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [formData, setFormData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://nchlod.ddev.site/webform_rest/heritage_graph/submission/6b64fbf9-93f1-4d80-a3f5-5b1332f614eb');
                const responseData = await response.json();
                setFormData(responseData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div>
            {formData && (
                <div>
                    <h2>User Information</h2>
                    <p>First Name: {formData.enter_your_first_name}</p>
                    <p>Last Name: {formData.enter_your_last_name}</p>
                    <p>Email: {formData.enter_your_email}</p>
                  
                </div>
            )}
        </div>
    );
};

export default MyComponent;
