import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Input, Space, Button, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const WebformSubmissionTable = ({ uuids }) => {
  const [submissionData, setSubmissionData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          uuids.map(uuid =>
            axios.get(`https://nchlod.ddev.site/webform_rest/heritage_graph/submission/${uuid}`)
          )
        );
        const data = responses.map(response => response.data);
        setSubmissionData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [uuids]);

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
      (record[dataIndex] || "")
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
      title: "UUID",
      dataIndex: "uuid",
      sorter: (a, b) => (a.uuid || "").localeCompare(b.uuid || ""),
      fixed: "left",
      key: "uuid",
      width: "15%",
      ...getColumnSearchProps("uuid")
    },
    {
      title: "First Name",
      dataIndex: "enter_your_first_name",
      sorter: (a, b) => (a.enter_your_first_name || "").localeCompare(b.enter_your_first_name || ""),
      key: "enter_your_first_name",
      width: "15%",
      ...getColumnSearchProps("enter_your_first_name")
    },
    {
      title: "Last Name",
      dataIndex: "enter_your_last_name",
      sorter: (a, b) => (a.enter_your_last_name || "").localeCompare(b.enter_your_last_name || ""),
      key: "enter_your_last_name",
      width: "15%",
      ...getColumnSearchProps("enter_your_last_name")
    },
    {
      title: "Email",
      dataIndex: "enter_your_email",
      sorter: (a, b) => (a.enter_your_email || "").localeCompare(b.enter_your_email || ""),
      key: "enter_your_email",
      width: "20%",
      ...getColumnSearchProps("enter_your_email")
    },
    {
      title: "Confirm Email",
      dataIndex: "confirm_your_email",
      sorter: (a, b) => (a.confirm_your_email || "").localeCompare(b.confirm_your_email || ""),
      key: "confirm_your_email",
      width: "20%",
      ...getColumnSearchProps("confirm_your_email")
    },
    {
      title: "Data Usage Consent",
      dataIndex: "do_you_allow_the_use_of_your_data_for_provenance_purposes",
      sorter: (a, b) => (a.do_you_allow_the_use_of_your_data_for_provenance_purposes || "").localeCompare(b.do_you_allow_the_use_of_your_data_for_provenance_purposes || ""),
      key: "do_you_allow_the_use_of_your_data_for_provenance_purposes",
      width: "15%",
      ...getColumnSearchProps("do_you_allow_the_use_of_your_data_for_provenance_purposes")
    }
  ];

  const data = submissionData.map(submission => ({
    key: submission.entity.uuid[0].value,
    uuid: submission.entity.uuid[0].value,
    enter_your_first_name: submission.data.enter_your_first_name || "",
    enter_your_last_name: submission.data.enter_your_last_name || "",
    enter_your_email: submission.data.enter_your_email || "",
    confirm_your_email: submission.data.confirm_your_email || "",
    do_you_allow_the_use_of_your_data_for_provenance_purposes: submission.data.do_you_allow_the_use_of_your_data_for_provenance_purposes || "",
  }));

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      scroll={{ x: 1800, y: 1200 }}
      width={1200}
    />
  );
};

export default WebformSubmissionTable;
