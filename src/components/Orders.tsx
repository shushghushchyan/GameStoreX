import Header from './Header';
import arrow from '../assets/Logos/arrow.svg';
import success from '../assets/Logos/success.svg';
import { ordersArray } from '../Data/ordersData.ts';
import { useNavigate } from 'react-router-dom';

interface OrderType {
  transactionId: string;
  date: string;
  status: string;
  gameName: string;
  gameId: string;
  amount: string;
}

export default function Orders() {
  const navigate = useNavigate();

  const handleOrderClick = (index: number) => {
    navigate(`/order/${index}`);
  };

  return (
    <div className="orderPage">
      <Header />
      <div className="arrowAndOrders">
        <img src={arrow} alt="" />
        <h1 className="orderH1">Orders</h1>
      </div>
      <main className="order">
        {ordersArray.map((order: OrderType, index: number) => (
          <div className="card" key={index} onClick={() => handleOrderClick(index)}>
            <div className="lineOforder">
              <div className="order__column">
                <p className="order__title">Transaction ID</p>
                <p className="order__value">{`#${order.transactionId}`}</p>
              </div>
              <div className="order__column">
                <p className="order__title">Date</p>
                <p className="order__value">{order.date}</p>
              </div>
              <div className="order__column">
                <p className="order__title">Status</p>
                <p className="order__value">
                  <img style={{ marginRight: '3px' }} src={success} alt="success" />
                  {order.status}
                </p>
              </div>
            </div>

            <div className="lineOforder">
              <div className="order__column">
                <p className="order__title">Game Name</p>
                <p className="order__value">{order.gameName}</p>
              </div>
              <div className="order__column">
                <p className="order__title">Game Id</p>
                <p className="order__value">{order.gameId}</p>
              </div>
              <div className="order__column">
                <p className="order__title">Amount</p>
                <p className="order__value">{order.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
