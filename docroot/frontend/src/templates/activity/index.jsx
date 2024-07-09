import React, { useState } from "react";
import Layout from "../../components/Layout";
import config from "../../assets/config";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Pagination } from "antd";

const Activity = () => {
  const items = [
    { children: "Create a services site 2015-09-01" },
    { children: "Solve initial network problems 2015-09-01" },
    { dot: <ClockCircleOutlined className="timeline-clock-icon" />, color: "red", children: "Technical testing 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
    { children: "Network problems being solved 2015-09-01" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout title="Activity">
      <div className={`dc-page ${config.container}`}>
        <h1>Activity</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <Timeline items={currentItems} />
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={items.length}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
