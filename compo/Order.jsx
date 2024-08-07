import React from "react";
import "./Order.css";

const Order = ({ orders }) => {
  return (
    <div className="order-table">
      <div className="">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderNumber}>
                <td>
                  <img
                    src={order.customerImage}
                    alt={order.customerName}
                    className="customer-image"
                  />
                  {order.customerName}
                </td>
                <td>{order.orderNumber}</td>
                <td>{order.amount}</td>

                <td className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
