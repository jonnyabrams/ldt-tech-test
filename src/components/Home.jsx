import { useState } from 'react'
import { bookings } from '../bookings'
import Table from './Table'

const Home = () => {
  const [query, setQuery] = useState("")

  const search = (data) => {
    return data.filter(item => item.firstName.toLowerCase().includes(query) 
                               || item.lastName.toLowerCase().includes(query) 
                               || item.eventTitle.toLowerCase().includes(query) 
                               || item.raceTitle.toLowerCase().includes(query) 
                               || item.organiserTitle.toLowerCase().includes(query))
  }

  const tableData = search(bookings)

  const totalPrice = tableData.reduce((acc, item) => acc + item.ticketPrice.value, 0)

  return (
    <>
      <h1>Search name, event, race or organiser...</h1>
      
      <input type="text" placeholder="Search..." className="search" onChange={ e => setQuery(e.target.value) } />

      <div className="total">
        Total ticket sales: £{(totalPrice / 100).toFixed(2)}
      </div>
       
      <Table data={tableData} />
    </>
  )
}

export default Home