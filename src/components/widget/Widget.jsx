import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 750
  const diff = 10;

  switch (type) {
    case "user":
      data = {
        title: "Bitcoin",
        isMoney: true,
        
      };
      break;
    case "order":
      data = {
        title: "Polygon",
        isMoney: true,
        
      };
      break;
    case "earning":
      data = {
        title: "Ethrium",
        isMoney: true,
        
      };
      break;
    case "balance":
      data = {
        title: "Ripple",
        isMoney: true,
        
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
