import Header from './Header';
import arrow from '../assets/Logos/arrow.svg';
import success from '../assets/Logos/success.svg';


const ordersArray = [
  {
    transactionId: "15325",
    date: "2025-04-06",
    status: "Success",
    gameName: "Game A",
    gameId: "GA001",
    amount: "$20.00"
  },
  {
    transactionId: "15326",
    date: "2025-04-07",
    status: "Success",
    gameName: "Game B",
    gameId: "GB002",
    amount: "$15.00"
  },
  {
    transactionId: "15328",
    date: "2025-04-08",
    status: "Success",
    gameName: "Game C",
    gameId: "GC003",
    amount: "$30.00"
  },
  {
    transactionId: "15329",
    date: "2025-04-09",
    status: "Success",
    gameName: "Game D",
    gameId: "GD004",
    amount: "$50.00"
  },
  {
    transactionId: "15330",
    date: "2025-04-10",
    status: "Success",
    gameName: "Game E",
    gameId: "GE005",
    amount: "$25.00"
  },
  {
    transactionId: "15331",
    date: "2025-04-11",
    status: "Success",
    gameName: "Game F",
    gameId: "GF006",
    amount: "$10.00"
  }
];



export default function Orders() {




  return (
    <div className='orderPage' >
      <Header />
      <div  className='arrowAndOrders'>
         <img src={arrow} alt="" />
         <h1  className = "orderH1">
          Orders
        </h1>

         </div>
         <main className="order">
  {ordersArray.map((order, index) => {
    return (
      <div className="card" key={index}>
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
            <p className="order__value"><img  style={{ marginRight: "3px"}} src={success} /> {order.status}</p>
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
    );
  })}
</main>



      
    </div>
  )
}
