const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        width: '30%',
        ...getColumnSearchProps('firstName'),
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: '30%',
        ...getColumnSearchProps('lastName'),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ...getColumnSearchProps('email'),
    },
];

const [apiData, setApiData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const responseData = await response.json();
            setApiData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

const data = apiData.map((item, index) => ({
    key: index.toString(),
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
}));
