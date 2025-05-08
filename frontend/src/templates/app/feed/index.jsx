import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import AppLayout from "../../../components/AppLayout";
import { Card, Input, Spin, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ExploreFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/data/submissions");
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.submission_id,
          title: item.title,
          description: item.description,
          author: item.contributor_username,
          date: item.created_at,
        }));
        setFeedData(formattedData);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = feedData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/explore/${id}`); 
  };

  return (
    <AppLayout title="Explore Feed">
      <div>
        <Input
          placeholder="Search posts..."
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: 20 }}
        />
        {loading ? (
          <Spin size="large" />
        ) : (
          <div style={{ overflowY: "scroll" }}>
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={filteredData}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card
                    title={item.title}
                    onClick={() => handleCardClick(item.id)} // Add onClick event to navigate
                    style={{ cursor: "pointer" }} // Make it look clickable
                  >
                    <p>{item.description}</p>
                    <p><strong>By:</strong> {item.author}</p>
                    <p><em>{new Date(item.date).toLocaleDateString()}</em></p>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default ExploreFeed;
