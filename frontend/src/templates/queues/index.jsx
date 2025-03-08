// ... rest of the code remains the same ...

const columns = [
  { title: "ID", dataIndex: "id", sorter: true, key: "id", width: "10%", ...getColumnSearchProps("id") },
  { 
    title: "Title", 
    dataIndex: "title", 
    sorter: true, 
    key: "title", 
    width: "20%", 
    ...getColumnSearchProps("title"), 
    render: (text) => <Button type="link" style={{ color: 'white' }} onClick={() => handleTitleClick(text)}>{text}</Button> 
  },
  { title: "Description", dataIndex: "description", sorter: true, key: "description", width: "30%", ...getColumnSearchProps("description") },
  { 
    title: "Contributor", 
    dataIndex: "contributor", 
    sorter: true, 
    key: "contributor", 
    width: "20%", 
    ...getColumnSearchProps("contributor"), 
    render: (text) => <Button type="link" style={{ color: 'white' }} onClick={() => handleContributorClick(text)}>{text}</Button> 
  },
  { title: "Created At", dataIndex: "created_at", sorter: true, key: "created_at", width: "20%", ...getColumnSearchProps("created_at") },
];

// ... rest of the code remains the same ...
