import React, { useEffect, useState } from "react";
import axios from "axios";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from '../../assets/config';
import { version, dependencies } from '../../../package.json';

const WebformSubmissions = () => {
  const [submissionIds, setSubmissionIds] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON:API endpoint
    axios.get('https://nchlod.ddev.site/jsonapi/webform_submission/heritage_graph')
      .then(response => {
        console.log('API response:', response); // Log the entire response
        if (response.data && response.data.data) {
          const ids = response.data.data.map(submission => submission.id);
          console.log('Extracted IDs:', ids); // Log the extracted IDs
          setSubmissionIds(ids);
        } else {
          console.error('Unexpected response structure:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Layout title="WebformSubmissions">
      <div className={`dc-page ${config.container}`}>
        <h1>Webform Submissions</h1>
        <div className="dc-page-content row">
          <div className="col-12">
            <Announcement variation="info" heading="Note">
              <p>Fetching and displaying webform submission IDs.</p>
            </Announcement>
          </div>
        </div>

        <h2>Webform Submission IDs:</h2>
        <div className="dc-page-content row">
          <div className="col-12">
            <ul>
              {submissionIds.length > 0 ? (
                submissionIds.map(id => (
                  <li key={id}>{id}</li>
                ))
              ) : (
                <li>No IDs found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebformSubmissions;
