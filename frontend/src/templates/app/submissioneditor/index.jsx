import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppLayout from '../../../components/AppLayout';
import config from '../../../assets/config';
import {
  Form, Input, Button, Alert, Typography, Card, Row, Col, Divider, Space, Switch, Spin
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const SubmissionEditor = () => {
  const submissionId = 'qocYk4ACPKZ';
  const [form] = Form.useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const [original, setOriginal] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [viewMode, setViewMode] = useState('split');
  const [diff, setDiff] = useState([]);

  const [liveTitle, setLiveTitle] = useState('');
  const [liveDescription, setLiveDescription] = useState('');

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
    axios.get(`http://localhost:8000/data/submissions/${submissionId}/`)
      .then(res => {
        const data = res.data;
        setOriginal(data);
        setLiveTitle(data.title);
        setLiveDescription(data.description);
        form.setFieldsValue({
          title: data.title,
          description: data.description,
          field1: data.contribution_data?.field1 || '',
          field2: data.contribution_data?.field2 || '',
        });
      })
      .catch(() => setError('Failed to fetch submission data.'));

    axios.get(`http://localhost:8000/data/submissions/${submissionId}/edit-suggestions`)
      .then(res => {
        const suggestions = res.data;
        setSuggestions(suggestions);
        if (suggestions.length > 0) {
          setSelectedId(suggestions[0].id);
        }
      })
      .catch(() => setError('Failed to load suggestions.'));
  }, [submissionId, form]);

  useEffect(() => {
    if (original) {
      const originalText = `${original.title}\n\n${original.description}`;
      const modifiedText = `${liveTitle}\n\n${liveDescription}`;
      setDiff(getDiff(originalText.trim(), modifiedText.trim()));
    }
  }, [original, liveTitle, liveDescription]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      setError('');
      setSuccess('');

      const payload = {
        submission: submissionId,
        title: values.title,
        description: values.description,
        contribution_data: {
          field1: values.field1,
          field2: values.field2,
        },
        suggested_by: null,
      };

      const response = await axios.post(
        'http://localhost:8000/data/submission-suggestions/',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201 || response.status === 200) {
        setSuccess('Suggestion submitted successfully!');
        form.resetFields();
      } else {
        setError('Failed to submit suggestion.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during submission.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Suggest an Edit">
      <div className={`dc-page ${config.container}`}>
        <Title level={2}>Suggest an Edit</Title>
        <Paragraph>Propose changes to improve this submission. Your suggestion will be reviewed by moderators.</Paragraph>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Updated Title" name="title" rules={[{ required: true }]}> 
            <Input placeholder="Enter updated title" onChange={e => setLiveTitle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Updated Description" name="description" rules={[{ required: true }]}> 
            <TextArea rows={4} placeholder="Enter updated description" onChange={e => setLiveDescription(e.target.value)} />
          </Form.Item>
          <Form.Item label="Field 1" name="field1" rules={[{ required: true }]}> 
            <Input placeholder="New value for field1" />
          </Form.Item>
          <Form.Item label="Field 2" name="field2" rules={[{ required: true }]}> 
            <Input type="number" placeholder="New value for field2" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>Submit Suggestion</Button>
          </Form.Item>
        </Form>

        {error && <Alert message={error} type="error" showIcon style={{ marginTop: 16 }} />}
        {success && <Alert message={success} type="success" showIcon style={{ marginTop: 16 }} />}

        <Divider />

        <Card
          title={
            <Space style={{ justifyContent: "space-between", width: "100%" }}>
              <Title level={4} style={{ color: config.primaryColor, margin: 0 }}>Live Preview Diff</Title>
              <Switch
                checkedChildren="Split"
                unCheckedChildren="Inline"
                checked={viewMode === "split"}
                onChange={(checked) => setViewMode(checked ? "split" : "inline")}
              />
            </Space>
          }
        >
          {!original ? (
            <Spin size="large" />
          ) : viewMode === "inline" ? (
            <div>
              {diff.map((item, index) => {
                const baseStyle = { marginBottom: 12 };
                if (item.type === "same") {
                  return <Paragraph key={index} style={baseStyle}>{item.original}</Paragraph>;
                } else if (item.type === "removed") {
                  return (
                    <Paragraph key={index} type="danger" delete style={{ ...baseStyle, backgroundColor: "#fff1f0", padding: "4px 8px" }}>{item.original}</Paragraph>
                  );
                } else if (item.type === "added") {
                  return (
                    <Paragraph key={index} style={{ ...baseStyle, backgroundColor: "#e6fffb", padding: "4px 8px", color: "#08979c" }}>{item.modified}</Paragraph>
                  );
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
                      backgroundColor: ["removed", "edited"].includes(item.type) ? "#fff1f0" : "transparent",
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
                      backgroundColor: ["added", "edited"].includes(item.type) ? "#e6fffb" : "transparent",
                      padding: "4px 8px",
                      color: ["added", "edited"].includes(item.type) ? "#08979c" : undefined,
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
      </div>
    </AppLayout>
  );
};

export default SubmissionEditor;