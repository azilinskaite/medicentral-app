import React from "react";
import "./DashboardComponent.css";

const ListItem = ({ text }) => {
  return (
    <li className="dashboard-list-item">
      <svg
        className="icon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M33.5784 12.2983C33.3634 11.6683 32.795 11.2233 32.1317 11.1716L22.63 10.4166L18.5184 1.31498C18.25 0.716646 17.655 0.333313 17 0.333313C16.345 0.333313 15.75 0.716646 15.4817 1.31331L11.37 10.4166L1.86838 11.1716C1.21671 11.2233 0.655046 11.6516 0.433379 12.2666C0.211713 12.8816 0.36838 13.57 0.836713 14.0266L7.85838 20.8716L5.37505 31.625C5.22171 32.29 5.49005 32.9816 6.05171 33.37C6.33838 33.5667 6.66838 33.6666 7.00005 33.6666C7.32171 33.6666 7.64505 33.5733 7.92505 33.3867L17 27.3366L26.075 33.3867C26.655 33.7733 27.4167 33.7583 27.9834 33.3466C28.5467 32.935 28.795 32.2133 28.6034 31.5433L25.555 20.8766L33.115 14.0733C33.6101 13.6266 33.7917 12.93 33.5784 12.2983Z" />
      </svg>
      <span className="text">{text}</span>
    </li>
  );
};

const DashboardComponent = () => {
  return (
    <aside className="dashboard">
      <h3>Dashboard</h3>
      <ul>
        <ListItem text="First item" />
        <ListItem text="Second item" />
        <ListItem text="Third item" />
      </ul>
    </aside>
  );
};

export default DashboardComponent;
