import React, { useState, useEffect } from "react";
import AppLayout from "../../../components/AppLayout";
import config from "../../../assets/config";
import {
  Card,
  Typography,
  Row,
  Col,
  Divider,
  Space,
  List,
  Spin,
  Tag,
} from "antd";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  HourglassOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const ITEMS_PER_PAGE = 5;

const BlogVersionTracker = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const submissionId = "qocYk4ACPKZ"; // Update to dynamic if needed

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [liveRes, versionsRes, suggestionsRes] = await Promise.all([
          fetch(`http://localhost:8000/data/submissions/${submissionId}`),
          fetch(`http://localhost:8000/data/submissions/${submissionId}/versions`),
          fetch(`http://localhost:8000/data/submissions/${submissionId}/edit-suggestions`),
        ]);

        const live = await liveRes.json();
        const versions = await versionsRes.json();
        const suggestions = await suggestionsRes.json();

        // Format entries
        const liveEntry = {
          id: `live-${submissionId}`,
          type: "live",
          title: "Current Submission",
          timestamp: live.updated_at || live.created_at,
          content: live.description,
          user: live.submitted_by,
        };

        const versionEntries = versions.map(v => ({
          id: `version-${v.version_number}`,
          type: "version",
          title: `Version ${v.version_number}`,
          timestamp: v.updated_at,
          content: v.description,
          user: v.updated_by,
        }));

        const suggestionEntries = suggestions.map(s => ({
          id: `suggestion-${s.id}`,
          type: "suggestion",
          title: `Suggestion by ${s.suggested_by}`,
          timestamp: s.created_at,
          content: s.description,
          user: s.suggested_by,
          approved: s.approved,
        }));

        const allEntries = [liveEntry, ...versionEntries, ...suggestionEntries].sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        setEntries(allEntries);
        setSelectedEntry(allEntries[0] || null);
      } catch (error) {
        console.error("Error fetching version data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submissionId]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = entries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentItems.length && !currentItems.find(v => v.id === selectedEntry?.id)) {
      setSelectedEntry(currentItems[0]);
    }
  }, [currentPage]);

  const renderTag = (entry) => {
    switch (entry.type) {
      case "live":
        return <Tag icon={<StarOutlined />} color="geekblue">Live</Tag>;
      case "version":
        return <Tag icon={<CheckCircleOutlined />} color="blue">Version</Tag>;
      case "suggestion":
        if (entry.approved === true) return <Tag color="green">Approved</Tag>;
        if (entry.approved === false) return <Tag color="red">Rejected</Tag>;
        return <Tag icon={<HourglassOutlined />} color="orange">Pending</Tag>;
      default:
        return null;
    }
  };

  return (
    <AppLayout title="Submission Timeline">
      <Card
        title={
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Title level={4} style={{ margin: 0, color: config.primaryColor }}>
              Version & Suggestion History
            </Title>
          </Space>
        }
      >
        {loading ? (
          <Spin size="large" style={{ display: "block", margin: "40px auto" }} />
        ) : (
          <Row gutter={[24, 16]}>
            <Col span={8}>
              <Card
                title={<Text strong>Timeline</Text>}
                bodyStyle={{ padding: 12 }}
                style={{ background: "#f9f9f9", borderRadius: 8 }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={currentItems}
                  pagination={{
                    pageSize: ITEMS_PER_PAGE,
                    total: entries.length,
                    current: currentPage,
                    onChange: setCurrentPage,
                    size: "small",
                  }}
                  renderItem={(item) => (
                    <List.Item
                      onClick={() => setSelectedEntry(item)}
                      style={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedEntry?.id === item.id ? "#e6f7ff" : "transparent",
                        borderRadius: 6,
                        padding: 12,
                        marginBottom: 6,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <List.Item.Meta
                        avatar={
                          <FileTextOutlined
                            style={{ fontSize: 18, color: config.primaryColor }}
                          />
                        }
                        title={
                          <Space>
                            <Text strong>{item.title}</Text>
                            {renderTag(item)}
                          </Space>
                        }
                        description={
                          <Space size="small">
                            <ClockCircleOutlined style={{ fontSize: 12 }} />
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {new Date(item.timestamp).toLocaleString()}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            <Col span={16}>
              <Card
                style={{
                  minHeight: "250px",
                  background: "#ffffff",
                  borderLeft: `4px solid ${config.primaryColor}`,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Title level={5}>{selectedEntry?.title}</Title>
                  <Text type="secondary">{new Date(selectedEntry?.timestamp).toLocaleString()}</Text>
                  <Divider />
                  <Paragraph style={{ fontSize: 15, lineHeight: 1.7 }}>
                    {selectedEntry?.content}
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        )}
      </Card>
    </AppLayout>
  );
};

export default BlogVersionTracker;

