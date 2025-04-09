import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import success from '../assets/Logos/success.svg';
import { ordersArray } from '../Data/ordersData';
import Header from './Header.js';
import chackbox from '../assets/Logos/checkbox.svg';
import { useNavigate } from 'react-router-dom';

interface OrderType {
  transactionId: string;
  date: string;
  status: string;
  gameName: string;
  gameId: string;
  amount: string;
}


export default function Order() {
  const { index } = useParams<{ index: string | undefined }>();
  const [order, setOrder] = useState<OrderType | null>(null);
  const navigate = useNavigate();

  const handleNavigateToOrders = () => {
    navigate('/orders');
  }
  

  useEffect(() => {
    if (index !== undefined && !isNaN(Number(index))) {
      const idx = Number(index);
      if (idx >= 0 && idx < ordersArray.length) {
        setOrder(ordersArray[idx]);
      }
    }
  }, [index]);

  return (
    <div>
      <Header />
      <div className="arrowAndOrders">
        <img src={chackbox} onClick={handleNavigateToOrders} alt="" />
        <h1  className="orderH1">{order ? `#${order.transactionId}` : 'Loading...'}</h1>
      </div>

      {order && (
        <div className="card">
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
      )}

      <main className="order">
        <div className="secondDiv">
          <div className="topDiv">
            <div>YOUR GOODS:</div>
            <div>1-279,99$</div>
          </div>
          <div className="bottomDiv">
            <div className="centerDiv">
              <div className="innerCenterDivTop">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18.4vw',
                    height: '4.9vh',
                  }}
                >
                  40,500
                </div>
                <div className="total">+1,500</div>
              </div>
              <div className="innerCenterDivBottom">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18.4vw',
                    height: '4.9vh',
                  }}
                >
                  279,99
                </div>
                <div className="deleted">748.99$</div>
              </div>
            </div>
          </div>
        </div>
        <button className="bottomAsk">Ask ?</button>
      </main>
    </div>
  );
}
