import { useParams } from "react-router-dom"
import { bookings } from "../bookings"

const RunnerDetails = () => {
  const { id } = useParams()

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div>
        {bookings.map((booking) => {
          if (booking.id === id) {
            return <><div>Name: {capitalise(booking.firstName)} {capitalise(booking.lastName)}</div>
                     <div>Event: {booking.eventTitle}</div>
                     <div>Race: {booking.raceTitle}</div>
                     <div>Paid: £{booking.ticketPrice.value / 100}</div></>
          }
        })}
      </div>
    </>
  )
}

export default RunnerDetails
