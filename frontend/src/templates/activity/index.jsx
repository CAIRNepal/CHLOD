import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import config from "../../assets/config";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Pagination, Spin } from "antd";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [uuids, setUuids] = useState([]);

  useEffect(() => {
    const fetchUuids = async () => {
      try {
        const response = await axios.get('https://nchlod.ddev.site/jsonapi/webform_submission/nchlod1');
        if (response.data && response.data.data) {
          const fetchedUuids = response.data.data.map(submission => submission.id);
          setUuids(fetchedUuids);
        } else {
          console.error('Unexpected response structure:', response);
        }
      } catch (error) {
        console.error('Error fetching UUIDs:', error);
      }
    };

    fetchUuids();
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      if (uuids.length === 0) return;

      try {
        const responses = await Promise.all(
          uuids.map((uuid) =>
            axios.get(`https://nchlod.ddev.site/webform_rest/nchlod1/submission/${uuid}`)
          )
        );
        const fetchedActivities = responses.map(response => {
          const submission = response.data;
  
          const work = 'contributed to NCHLOD';
          return {
            // dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            color: "red",
            children: `${submission.data.first_name || 'No Name'} ${submission.data.last_name || 'No Last Name'} - ${work}`
          };
        });
        setActivities(fetchedActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [uuids]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout title="Activity">
      <div className={`dc-page ${config.container}`}>
        <h1>Activity</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            {loading ? (
              <Spin />
            ) : (
              <>
                <Timeline items={currentItems} />
                <Pagination
                  current={currentPage}
                  pageSize={itemsPerPage}
                  total={activities.length}
                  onChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
