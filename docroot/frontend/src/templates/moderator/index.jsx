import React, { useEffect, useState } from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const Moderator = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Dummy data
        const dummySubmissions = [
            { id: 1, title: "Historic Site A", submittedBy: "John Doe" },
            { id: 2, title: "Artifact B", submittedBy: "Jane Smith" },
            { id: 3, title: "Museum Exhibit C", submittedBy: "Alice Johnson" }
        ];

        // Simulating API call with a timeout
        setTimeout(() => {
            setSubmissions(dummySubmissions);
            setLoading(false);
        }, 1000);
    }, []);

    const handleApprove = (id) => {
        // Handle approve action
        console.log(`Approved submission with ID: ${id}`);
    };

    const handleReject = (id) => {
        // Handle reject action
        console.log(`Rejected submission with ID: ${id}`);
    };

    return (
        <Layout title="Moderate">
            <div className={`dc-page ${config.container}`}>
                <h1>Moderate Heritage Graph</h1>
                <div className="dc-page-content row">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading submissions: {error.message}</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Submitted By</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map(submission => (
                                    <tr key={submission.id}>
                                        <td>{submission.id}</td>
                                        <td>{submission.title}</td>
                                        <td>{submission.submittedBy}</td>
                                        <td>
                                            <button onClick={() => handleApprove(submission.id)}>Approve</button>
                                            <button onClick={() => handleReject(submission.id)}>Reject</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <br />
                <br />
                <div className="dc-page-content row">
                    <div className="col-12">
                        {/* <p>data-catalog-app: {version}</p>
                        <p>data-catalog-components: {dependencies["@civicactions/data-catalog-components"]}</p> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Moderator;
