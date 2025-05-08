import React, { useEffect, useState } from "react";
import {
  Card, Typography, Switch, Row, Col, Divider, Space, Select, Spin
} from "antd";
import AppLayout from "../../../components/AppLayout";
import config from "../../../assets/config";
import { useSearchParams } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const DiffViewer = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("submissionId");
  if (!slug) {
    return (
      <AppLayout title="Compare Submission Edits">
        <Card>
          <Text type="danger">Error: No submissionId provided in the URL.</Text>
        </Card>
      </AppLayout>
    );
  }
  const [original, setOriginal] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [viewMode, setViewMode] = useState("split");
  const [diff, setDiff] = useState([]);

  const getDiff = (originalText, modifiedText) => {
    const oLines = originalText.split("\n");
    const mLines = modifiedText.split("\n");

    const diff = [];
    let i = 0, j = 0;

    while (i < oLines.length || j < mLines.length) {
      if (i < oLines.length && j < mLines.length && oLines[i] === mLines[j]) {
        diff.push({ type: "same", original: oLines[i], modified: mLines[j] });
        i++; j++;
      } else if (i < oLines.length && j < mLines.length) {
        diff.push({ type: "edited", original: oLines[i], modified: mLines[j] });
        i++; j++;
      } else if (i < oLines.length) {
        diff.push({ type: "removed", original: oLines[i] });
        i++;
      } else if (j < mLines.length) {
        diff.push({ type: "added", modified: mLines[j] });
        j++;
      }
    }

    return diff;
  };

  useEffect(() => {
    const fetchData = async () => {
      const [originalRes, suggestionsRes] = await Promise.all([
        fetch(`http://localhost:8000/data/submissions/${slug}`),
        fetch(`http://localhost:8000/data/submissions/${slug}/edit-suggestions`)
      ]);
      const originalData = await originalRes.json();
      const suggestionsData = await suggestionsRes.json();

      setOriginal(originalData);
      setSuggestions(suggestionsData);
      if (suggestionsData.length > 0) {
        setSelectedId(suggestionsData[0].id);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (original && selectedId !== null) {
      const selectedSuggestion = suggestions.find(s => s.id === selectedId);
      if (selectedSuggestion) {
        const originalText = `${original.title}\n\n${original.description}`;
        const modifiedText = `${selectedSuggestion.title}\n\n${selectedSuggestion.description}`;
        setDiff(getDiff(originalText.trim(), modifiedText.trim()));
      }
    }
  }, [original, selectedId]);

  if (!original || suggestions.length === 0) return (
    <AppLayout title="Loading Submission Diff...">
      <Spin size="large" />
    </AppLayout>
  );

  return (
    <AppLayout title="Compare Submission Edits">
      <Card
        title={
          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Title level={4} style={{ color: config.primaryColor, margin: 0 }}>
              Compare Edits
            </Title>
            <Space>
              <Select
                value={selectedId}
                onChange={setSelectedId}
                style={{ minWidth: 250 }}
                placeholder="Select an edit suggestion"
              >
                {suggestions.map((s) => (
                  <Option key={s.id} value={s.id}>
                    {s.title} — by {s.suggested_by}
                  </Option>
                ))}
              </Select>
              <Switch
                checkedChildren="Split"
                unCheckedChildren="Inline"
                checked={viewMode === "split"}
                onChange={(checked) => setViewMode(checked ? "split" : "inline")}
              />
            </Space>
          </Space>
        }
      >
        {viewMode === "inline" ? (
          <div>
            {diff.map((item, index) => {
              const baseStyle = { marginBottom: 12 };
              if (item.type === "same") {
                return <Paragraph key={index} style={baseStyle}>{item.original}</Paragraph>;
              } else if (item.type === "removed") {
                return <Paragraph key={index} type="danger" delete style={{ ...baseStyle, backgroundColor: "#fff1f0", padding: "4px 8px" }}>{item.original}</Paragraph>;
              } else if (item.type === "added") {
                return <Paragraph key={index} style={{ ...baseStyle, backgroundColor: "#e6fffb", padding: "4px 8px", color: "#08979c" }}>{item.modified}</Paragraph>;
              } else {
                return (
                  <div key={index}>
                    <Paragraph type="danger" delete style={{ ...baseStyle, backgroundColor: "#fff1f0", padding: "4px 8px" }}>{item.original}</Paragraph>
                    <Paragraph style={{ ...baseStyle, backgroundColor: "#e6fffb", padding: "4px 8px", color: "#08979c" }}>{item.modified}</Paragraph>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <Row gutter={16}>
            <Col span={12}>
              <Text strong>Original</Text>
              <Divider />
              {diff.map((item, index) => (
                <Paragraph
                  key={index}
                  type={item.type === "removed" || item.type === "edited" ? "danger" : undefined}
                  delete={item.type === "removed"}
                  style={{
                    backgroundColor: (item.type === "removed" || item.type === "edited") ? "#fff1f0" : "transparent",
                    padding: "4px 8px",
                    marginBottom: 12,
                  }}
                >
                  {item.original || ""}
                </Paragraph>
              ))}
            </Col>
            <Col span={12}>
              <Text strong>Modified</Text>
              <Divider />
              {diff.map((item, index) => (
                <Paragraph
                  key={index}
                  style={{
                    backgroundColor: (item.type === "added" || item.type === "edited") ? "#e6fffb" : "transparent",
                    padding: "4px 8px",
                    color: (item.type === "added" || item.type === "edited") ? "#08979c" : undefined,
                    marginBottom: 12,
                  }}
                >
                  {item.modified || ""}
                </Paragraph>
              ))}
            </Col>
          </Row>
        )}
      </Card>
    </AppLayout>
  );
};

export default DiffViewer;
