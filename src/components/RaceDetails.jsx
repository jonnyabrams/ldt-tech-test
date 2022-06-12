import { useParams } from "react-router-dom"
import { raceInfo } from "../bookings"

const RaceDetails = () => {
  const { id } = useParams()

  return (
    <>
      <div>
      {raceInfo.map((race) => {
          if (race.id === id) {
            return <><div>Name: {race.name}</div>
                     <div>Event: {race.event}</div>
                     <div>Runners: {race.runners.join(", ")}</div></>
          }
        })}
        {console.log(raceInfo)}
      </div>
    </>
  )
}

export default RaceDetails