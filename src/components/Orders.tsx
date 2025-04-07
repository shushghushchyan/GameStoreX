import Header from './Header';
import arrow from '../assets/Logos/arrow.svg';


const ordersArray = [
  {
    transactionId: "15325",
    date: "2025-04-06",
    status: "Completed",
    gameName: "Game A",
    gameId: "GA001",
    amount: "$20.00"
  },
  {
    transactionId: "15326",
    date: "2025-04-07",
    status: "Pending",
    gameName: "Game B",
    gameId: "GB002",
    amount: "$15.00"
  },
  {
    transactionId: "15328",
    date: "2025-04-08",
    status: "Completed",
    gameName: "Game C",
    gameId: "GC003",
    amount: "$30.00"
  },
  {
    transactionId: "15329",
    date: "2025-04-09",
    status: "Failed",
    gameName: "Game D",
    gameId: "GD004",
    amount: "$50.00"
  },
  {
    transactionId: "15330",
    date: "2025-04-10",
    status: "Completed",
    gameName: "Game E",
    gameId: "GE005",
    amount: "$25.00"
  },
  {
    transactionId: "15331",
    date: "2025-04-11",
    status: "Pending",
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
            <p className="order__block"><span>Transaction ID</span></p>
            <p className="order__block">{`#${order.transactionId}`}</p>
          </div>
          <div className="order__column">
            <p className="order__block"><span>Date</span></p>
            <p className="order__block">{order.date}</p>
          </div>
          <div className="order__column">
            <p className="order__block"><span>Status</span></p>
            <p className="order__block">{order.status}</p>
          </div>
        </div>

        <div className="lineOforder">
          <div className="order__column">
            <p className="order__block"><span>Game Name</span></p>
            <p className="order__block">{order.gameName}</p>
          </div>
          <div className="order__column">
            <p className="order__block"><span>Game Id</span></p>
            <p className="order__block">{order.gameId}</p>
          </div>
          <div className="order__column">
            <p className="order__block"><span>Amount</span></p>
            <p className="order__block">{order.amount}</p>
          </div>
        </div>
      </div>
    );
  })}
</main>


      
    </div>
  )
}
