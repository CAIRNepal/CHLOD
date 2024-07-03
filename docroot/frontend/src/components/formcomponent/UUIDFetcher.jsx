import React, { useState, useEffect } from 'react';

const MyComponent = React.memo(({ uuid }) => {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!uuid) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://nchlod.ddev.site/webform_rest/heritage_graph/submission/${uuid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setFormData(responseData.data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uuid]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {formData ? (
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formData.enter_your_first_name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formData.enter_your_last_name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formData.enter_your_email}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
});

const UUIDFetcher = () => {
    const [uuids, setUuids] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUuids = async () => {
            try {
                const response = await fetch('https://nchlod.ddev.site/jsonapi/webform_submission/heritage_graph');
                if (!response.ok) {
                    throw new Error('Failed to fetch UUIDs');
                }
                const responseData = await response.json();
                const uuids = responseData.data.map(item => item.id);
                setUuids(uuids);
            } catch (error) {
                setError('Error fetching UUIDs');
                console.error('Error fetching UUIDs:', error);
            }
        };

        fetchUuids();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {uuids.map(uuid => (
                <div key={uuid} onClick={() => setSelectedUuid(uuid)} style={{cursor: 'pointer', color: 'blue'}}>
                    <MyComponent uuid={uuid} />
                </div>
            ))}
        </div>
    );
};

export default UUIDFetcher;
