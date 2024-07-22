import React, { useState } from 'react';
import axios from 'axios';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const SignupPanel = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const payload = {
      first_name: { value: firstName },
      last_name: { value: lastName },
      email: { value: email },
      institution: { value: institution },
      dob: { value: dob },
    };

    try {
      const response = await axios.post('https://nchlod.ddev.site/user/register?_format=json', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setSuccess('Signup successful!');
      } else {
        setError('Signup failed. Please check your inputs.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout title="Signup">
      <div className={`dc-page ${config.container}`}>
        <h1>Signup</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution">Institution Affiliated To:</label>
                <input
                  type="text"
                  id="institution"
                  className="form-control"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  className="form-control"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>Fill out the form to create an account.</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPanel;
