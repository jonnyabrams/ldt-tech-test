import { bookings } from './bookings'

const App = () => {
  return (
    <div className="App">
      {
        bookings.map(booking => {
          return <h1>{booking.firstName}</h1>
        })
      }
    </div>
  );
}

export default App;
