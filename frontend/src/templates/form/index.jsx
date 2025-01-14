import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { Announcement } from '@civicactions/data-catalog-components';
import { Alert, Form, Input, Select, Button, Checkbox, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const SubmissionForm = () => {
  // State to hold form data
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [heritageType, setHeritageType] = useState('Tangible');
  const [heritageTitle, setHeritageTitle] = useState('');
  const [heritageDescription, setHeritageDescription] = useState('');
  const [location, setLocation] = useState('');
  const [historicalContext, setHistoricalContext] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);
  const [contributorName, setContributorName] = useState('');
  const [relationshipToHeritage, setRelationshipToHeritage] = useState('');
  const [consentToShare, setConsentToShare] = useState(false);
  const [confirmAccuracy, setConfirmAccuracy] = useState(false);
  const [references, setReferences] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Validate required fields
    if (
      !userName ||
      !userEmail ||
      !heritageTitle ||
      !heritageDescription ||
      !location ||
      !historicalContext ||
      !contributorName ||
      !relationshipToHeritage ||
      !confirmAccuracy
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    // Prepare payload
    const payload = {
      user: {
        name: userName,
        email: userEmail,
        role: userRole,
        organization: organization,
      },
      heritage: {
        type: heritageType,
        title: heritageTitle,
        description: heritageDescription,
        location: location,
        historicalContext: historicalContext,
        mediaFiles: mediaFiles,
      },
      contributor: {
        name: contributorName,
        relationship: relationshipToHeritage,
        consentToShare: consentToShare,
      },
      verification: {
        confirmAccuracy: confirmAccuracy,
        references: references,
      },
      status: 'Pending', // Default status
    };

    try {
      // Send POST request to backend
      const response = await axios.post('http://127.0.0.1:8000/data/submissions/create/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccess('Submission created successfully!');
        // Reset form fields
        setUserName('');
        setUserEmail('');
        setUserRole('');
        setOrganization('');
        setHeritageType('Tangible');
        setHeritageTitle('');
        setHeritageDescription('');
        setLocation('');
        setHistoricalContext('');
        setMediaFiles([]);
        setContributorName('');
        setRelationshipToHeritage('');
        setConsentToShare(false);
        setConfirmAccuracy(false);
        setReferences('');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting. Please try again.');
    }
  };

  return (
    <Layout title="Submit New Entry">
      <div className={`dc-page ${config.container}`}>
        <h1>Contribute to HeritageGraph</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            {/* Show the form */}
            <Form onFinish={handleSubmit} layout="vertical">
              {/* Section 1: User Information */}
              <h2>User Information</h2>
              <Form.Item
                label="Name"
                required
                name="userName"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
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
                rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Role"
                required
                name="userRole"
                rules={[{ required: true, message: 'Please select your role!' }]}
              >
                <Select
                  value={userRole}
                  onChange={(value) => setUserRole(value)}
                  placeholder="Select your role"
                >
                  <Select.Option value="Researcher">Researcher</Select.Option>
                  <Select.Option value="Community Member">Community Member</Select.Option>
                  <Select.Option value="Tourist">Tourist</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Organization (optional)" name="organization">
                <Input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Enter your organization"
                />
              </Form.Item>

              {/* Section 2: Cultural Heritage Details */}
              <h2>Cultural Heritage Details</h2>
              <Form.Item
                label="Type of Heritage"
                required
                name="heritageType"
                rules={[{ required: true, message: 'Please select the type of heritage!' }]}
              >
                <Select
                  value={heritageType}
                  onChange={(value) => setHeritageType(value)}
                  placeholder="Select heritage type"
                >
                  <Select.Option value="Tangible">Tangible (e.g., monuments, artifacts)</Select.Option>
                  <Select.Option value="Intangible">Intangible (e.g., traditions, stories, music)</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Title"
                required
                name="heritageTitle"
                rules={[{ required: true, message: 'Please enter the heritage title!' }]}
              >
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
                rules={[{ required: true, message: 'Please provide a description!' }]}
              >
                <TextArea
                  value={heritageDescription}
                  onChange={(e) => setHeritageDescription(e.target.value)}
                  placeholder="Enter a description"
                  rows={4}
                />
              </Form.Item>

              <Form.Item
                label="Location"
                required
                name="location"
                rules={[{ required: true, message: 'Please enter the location!' }]}
              >
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter the location"
                />
              </Form.Item>

              <Form.Item
                label="Historical Context"
                required
                name="historicalContext"
                rules={[{ required: true, message: 'Please provide historical context!' }]}
              >
                <TextArea
                  value={historicalContext}
                  onChange={(e) => setHistoricalContext(e.target.value)}
                  placeholder="Enter historical context"
                  rows={4}
                />
              </Form.Item>

              <Form.Item label="Upload Media">
                <Upload
                  fileList={mediaFiles}
                  onChange={(info) => setMediaFiles(info.fileList)}
                  multiple
                  beforeUpload={() => false} // Prevent auto upload
                >
                  <Button icon={<UploadOutlined />}>Upload Files</Button>
                </Upload>
              </Form.Item>

              {/* Section 3: Contributor Details */}
              <h2>Contributor Details</h2>
              <Form.Item
                label="Contributor's Name"
                required
                name="contributorName"
                rules={[{ required: true, message: 'Please enter the contributor name!' }]}
              >
                <Input
                  value={contributorName}
                  onChange={(e) => setContributorName(e.target.value)}
                  placeholder="Enter contributor's name"
                />
              </Form.Item>

              <Form.Item
                label="Relationship to Heritage"
                required
                name="relationshipToHeritage"
                rules={[{ required: true, message: 'Please enter the relationship to heritage!' }]}
              >
                <Input
                  value={relationshipToHeritage}
                  onChange={(e) => setRelationshipToHeritage(e.target.value)}
                  placeholder="Enter relationship to heritage"
                />
              </Form.Item>

              <Form.Item
                name="consentToShare"
                valuePropName="checked"
                required
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('You must consent to share the information!') }]}
              >
                <Checkbox
                  checked={consentToShare}
                  onChange={(e) => setConsentToShare(e.target.checked)}
                >
                  I consent to share this information.
                </Checkbox>
              </Form.Item>

              {/* Section 4: Verification */}
              <h2>Verification</h2>
              <Form.Item
                name="confirmAccuracy"
                valuePropName="checked"
                required
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('You must confirm the accuracy of the information!') }]}
              >
                <Checkbox
                  checked={confirmAccuracy}
                  onChange={(e) => setConfirmAccuracy(e.target.checked)}
                >
                  I confirm the accuracy of the information provided.
                </Checkbox>
              </Form.Item>

              <Form.Item label="References/Sources (optional)" name="references">
                <TextArea
                  value={references}
                  onChange={(e) => setReferences(e.target.value)}
                  placeholder="Enter references or sources"
                  rows={4}
                />
              </Form.Item>

              {/* Section 5: Submission */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>

            {error && <Alert message={error} type="error" showIcon />}
            {success && <Alert message={success} type="success" showIcon />}
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
