import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { Announcement } from '@civicactions/data-catalog-components';

const SubmissionForm = () => {
  // State to hold form data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Validate the required fields
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    const payload = {
      title,
      description,
      status: 'pending'  // Status is always set to 'pending'
    };

    console.log(payload);

    try {
      // Sending POST request to backend
      const response = await axios.post('http://127.0.0.1:8000/your-api-endpoint/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccess('Submission created successfully!');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while submitting. Please try again.');
    }
  };

  return (
    <Layout title="Submit New Entry">
      <div className={`dc-page ${config.container}`}>
        <h1>Contribute to HeritageGraph</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description"
                  required
                />
              </div>

              <button type="submit" className="custom-button">Submit</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
          </div>

          <div className="col-md-3 col-sm-12">
          <Announcement variation="info" heading="Note">
              <p>Make sure to fill in all fields and submit your work properly. The status will automatically be set to "Pending".</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubmissionForm;
