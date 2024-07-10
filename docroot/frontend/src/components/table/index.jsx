import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Input, Space, Button, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import Layout from '../../components/Layout';
import config from '../../assets/config';
import { version, dependencies } from '../../../package.json';

const WebformSubmissionTable = ({ uuid }) => {
  const [submissionData, setSubmissionData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    axios.get(`https://nchlod.ddev.site/webform_rest/heritage_graph/submission/${uuid}`)
      .then(response => {
        console.log('API response:', response);
        setSubmissionData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [uuid]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
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
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#076096" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });

  const columns = [
    {
      title: "target_uuid",
      dataIndex: "target_uuid",
      sorter: true,
      fixed: "left",
      key: "target_uuid",
      width: "5%",
      ...getColumnSearchProps("target_uuid")
    },
    {
      title: "enter_your_first_name",
      dataIndex: "enter_your_first_name",
      sorter: true,
      key: "enter_your_first_name",
      width: "10%",
      ...getColumnSearchProps("enter_your_first_name")
    },
    {
      title: "enter_your_email",
      dataIndex: "enter_your_email",
      sorter: true,
      key: "enter_your_email",
      ...getColumnSearchProps("enter_your_email")
    },
    {
      title: "enter_your_last_name",
      dataIndex: "enter_your_last_name",
      sorter: true,
      key: "enter_your_last_name",
      ...getColumnSearchProps("enter_your_last_name")
    }
    // {
    //   title: "Submitted",
    //   dataIndex: "submitted",
    //   sorter: true,
    //   fixed: "right",
    //   key: "submitted",
    //   ...getColumnSearchProps("submitted"),
    // },
  ];

  const data = submissionData
    ? submissionData.data.map((item, index) => ({
        key: item.id,
        target_uuid: item.target_uuid,
        enter_your_first_name: item.enter_your_first_name,
        enter_your_email: item.enter_your_email,
        enter_your_last_name: item.enter_your_last_name,
        // submitted: item.submitted,
      }))
    : [];

  return (
    <>
      <div className={`dc-page ${config.container}`}>
        <h1>Webform Submission</h1>
        <div className="dc-page-content row">
          <div className="col-md-12">
            {submissionData ? (
              <Table
                columns={columns}
                dataSource={data}
                bordered
                scroll={{ x: 1800, y: 1200 }}
                width={1200}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebformSubmissionTable;
