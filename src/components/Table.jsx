const Table = ({ data }) => {
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Event</th>
          <th>Race</th>
          <th>Organiser</th>
          <th>Paid</th>
        </tr>
        {data.map((item) => ( 
          <tr key={item.id}>
            <td>{capitalise(item.firstName)} {capitalise(item.lastName)}</td>
            <td>{item.eventTitle}</td>
            <td>{item.raceTitle}</td>
            <td>{item.organiserTitle}</td>
            <td>{item.ticketPrice.value / 100}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table