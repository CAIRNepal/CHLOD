import React, { useState } from 'react';
import axios from 'axios';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


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
        <h1>Your Profile</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
   
    <div>
    <Avatar size={164} icon={<UserOutlined />} />
    <h1>Nabin Oli </h1>

    
    </div>
      






          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>This is your profile</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPanel;
