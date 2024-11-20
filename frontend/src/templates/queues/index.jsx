import React, { useState, useRef } from "react";
import Layout from "../../components/Layout";
import config from "../../assets/config";
import { version, dependencies } from "../../../package.json";
import UUIDFetcher from "../../components/formcomponent/UUIDFetcher";
import { Input, Space, Button, Table, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const Queues = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#076096" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: true,
      fixed: "left",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: true,
      key: "status",
      width: "10%",
      ...getColumnSearchProps("status"),
    },
    {
      title: "Topic",
      dataIndex: "topic",
      sorter: true,
      key: "topic",
      ...getColumnSearchProps("topic"),
    },
    {
      title: "Submitter",
      dataIndex: "submitter",
      sorter: true,
      key: "submitter",
      ...getColumnSearchProps("submitter"),
    },
    {
      title: "Submitted",
      dataIndex: "submitted",
      sorter: true,
      fixed: "right",
      key: "submitted",
      ...getColumnSearchProps("submitted"),
    },
  ];

  const data = [
    {
      id: "1",
      submitter: "Alice Smith",
      status: "Pending",
      topic: "Topic A",
      submitted: "2024-07-08",
    },
    {
      id: "2",
      submitter: "Bob Johnson",
      status: "Approved",
      topic: "Topic B",
      submitted: "2024-07-07",
    },
    {
      id: "3",
      submitter: "Charlie Brown",
      status: "Pending",
      topic: "Topic C",
      submitted: "2024-07-06",
    },
    {
      id: "4",
      submitter: "David Lee",
      status: "Rejected",
      topic: "Topic D",
      submitted: "2024-07-05",
    },
    {
      id: "5",
      submitter: "Eva Green",
      status: "Approved",
      topic: "Topic E",
      submitted: "2024-07-04",
    },
  ];

  return (
    <Layout title="Queues">
      <div className={`dc-page ${config.container}`}>
        <h1>Queues</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <Table
              columns={columns}
              dataSource={data}
              bordered
              scroll={{ x: 1800, y: 1200 }}
              width={1200}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Queues;
