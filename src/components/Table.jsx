import { Link } from "react-router-dom";
import { raceInfo } from "../bookings";

const Table = ({ data }) => {
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <table>
      <tbody>
        {console.log(raceInfo)}
        <tr>
          <th>Name</th>
          <th>Event</th>
          <th>Race</th>
          <th>Organiser</th>
          <th>Paid</th>
          <th>Race ID</th>
        </tr>
        {data.map((item) => ( 
          <tr key={item.id}>
            <Link to={`/runners/${item.id}`}><td>{capitalise(item.firstName)} {capitalise(item.lastName)}</td></Link>
            <td>{item.eventTitle}</td>
            <Link to={`/races/${item.raceId}`}><td>{item.raceTitle}</td></Link>
            <td>{item.organiserTitle}</td>
            <td>{item.ticketPrice.value / 100}</td>
            <td>{item.raceId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table