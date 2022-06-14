export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Cryptcurrency",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  

  {
    field: "age",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "status",
    headerName: "Profit/Loss",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Bitcoin",
    status: "profit",
    age: 10000,
  },
  {
    id: 2,
    username: "Ripple",
    status: "profit",
    age: 7200,
  },
  {
    id: 3,
    username: "Dogecoin",
    status: "loss",
    age: 4500,
  },
  {
    id: 4,
    username: "BAT",
    status: "loss",
    age: 2600,
  },
  {
    id: 5,
    username: "Polygon",
    status: "profit",
    age: 3200,
  },
  {
    id: 6,
    username: "Etherium",
    status: "loss",
    age: 1500,
  },
  {
    id: 7,
    username: "Litecoin",
    status: "loss",
    age: 4400,
  },
  {
    id: 8,
    username: "Luna",
    status: "loss",
    age: 1060,
  },
  {
    id: 9,
    username: "Cosmos",
    status: "profit",
    age: 5000,
  },
  {
    id: 10,
    username: "Matic",
    status: "loss",
    age: 2500,
  },
];
