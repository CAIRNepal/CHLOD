import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { Announcement } from '@civicactions/data-catalog-components';
import { Alert, Form, Input, Button, Checkbox, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const SubmissionForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [heritageTitle, setHeritageTitle] = useState('');
  const [heritageDescription, setHeritageDescription] = useState('');
  const [location, setLocation] = useState('');
  const [historicalContext, setHistoricalContext] = useState('');
  const [consentToShare, setConsentToShare] = useState(false);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track if the user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setIsUserLoggedIn(false); // Set to false if token is not available
    } else {
      axios.get('http://127.0.0.1:8000/api/user/info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const userInfo = response.data;
        setUserName(userInfo.username || '');
        setUserEmail(userInfo.email || '');
        setIsUserLoggedIn(true); // Set to true if user is logged in
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
        setError('Error fetching user information. Please try again.');
      });
    }
  }, [navigate]);

  const handleSubmit = async (values) => {
    setError('');
    setSuccess('');
    setLoading(true);

    if (
      !userName ||
      !userEmail ||
      !heritageTitle ||
      !heritageDescription ||
      !location ||
      !historicalContext ||
      !confirmAccuracy
    ) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const payload = {
      user: {
        name: userName,
        email: userEmail,
      },
      heritage: {
        title: heritageTitle,
        description: heritageDescription,
        location: location,
        historicalContext: historicalContext,
        mediaFiles: mediaFiles,
      },
      contributor: {
        name: 'nabin2004',  
        consentToShare: consentToShare,
      },
      verification: {
        confirmAccuracy: confirmAccuracy,
      },
      status: 'Pending',
    };

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('You must be logged in to submit.');
        setLoading(false);
        return;
      }

      const response = await axios.post('http://127.0.0.1:8000/data/form-submit/', payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setSuccess('Submission created successfully!');
        // Reset form fields here
        setUserName('');
        setUserEmail('');
        setHeritageTitle('');
        setHeritageDescription('');
        setLocation('');
        setHistoricalContext('');
        setMediaFiles([]);
        setConsentToShare(false);
        setConfirmAccuracy(false);
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Axios error:', error);
      setError('An error occurred while submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Submit New Entry">
      <div className={`dc-page ${config.container}`}>
        <h1>Contribute to HeritageGraph</h1>

        {/* Show warning if user is not logged in */}
        {!isUserLoggedIn && (
          <Alert 
            message="Authentication Required" 
            description="You must be logged in to submit your entry. Please log in first."
            type="warning" 
            showIcon 
            style={{ marginBottom: '20px' }} 
          />
          
        )}

        {/* Show form only if user is authenticated */}
        {isUserLoggedIn && (
          <div className="dc-page-content row">
            <div className="col-md-9 col-sm-12">
              <Form onFinish={handleSubmit} layout="vertical">
                {/* Section 1: User Information */}
                <h2>User Information</h2>
                <Form.Item
                  label="Username"
                  required
                  name="userName"
                  rules={[{ required: true, message: 'Please enter your username!' }]}>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  required
                  name="userEmail"
                  rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
                  <Input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </Form.Item>

                {/* Section 2: Cultural Heritage Details */}
                <h2>Cultural Heritage Details</h2>
                <Form.Item
                  label="Title"
                  required
                  name="heritageTitle"
                  rules={[{ required: true, message: 'Please enter the heritage title!' }]}>
                  <Input
                    value={heritageTitle}
                    onChange={(e) => setHeritageTitle(e.target.value)}
                    placeholder="Enter the title"
                  />
                </Form.Item>

                <Form.Item
                  label="Description"
                  required
                  name="heritageDescription"
                  rules={[{ required: true, message: 'Please provide a description!' }]}>
                  <TextArea
                    value={heritageDescription}
                    onChange={(e) => setHeritageDescription(e.target.value)}
                    placeholder="Enter a description"
                    rows={4}
                  />
                </Form.Item>

                {/* More form sections... */}

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loading}
                    disabled={loading}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>

              {error && <Alert message={error} type="error" showIcon />}
              {success && <Alert message={success} type="success" showIcon />}
            </div>

            <div className="col-md-3 col-sm-12">
              <Announcement variation="info" heading="Note">
                <p>Ensure all fields are filled before submitting.</p>
              </Announcement>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SubmissionForm;
