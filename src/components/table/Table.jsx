import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 11001,
      product: "Bitcoin",
      date: "1 March",
      amount: '₹8000',
      method: "Paytm Wallet",
    },
    {
      id: 11235,
      product: "Ripple",
      date: "1 March",
      amount: '₹1450',
      method: "UPI",
    },
    {
      id: 11021,
      product: "Bitcoin",
      date: "4 March",
      amount: '₹7500',
      method: "Paytm Wallet",
    },
    {
      id: 19056,
      product: "Dogecoin",
      date: "19 March",
      amount: '₹6000',
      method: "UPI",
    },
    {
      id: 23002,
      product: "Polygon",
      date: "31 March",
      amount: '₹2000',
      method: "UPI",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
