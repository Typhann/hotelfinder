export default function ReservationForm() {
  return (
    <form className="reservation-form-container">
      <table>
        <tr>
          <th>Room</th>
          <th>People</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
        <hr />
        <tr>
          <td>King Room</td>
          <td>Sleeps 2</td>
          <td>$429</td>
          <td>
            <p>+ 0 -</p>
          </td>
        </tr>
        <tr>
          <td>Queen Room</td>
          <td>Sleeps 2</td>
          <td>$299</td>
          <td>
            <p>+ 0 -</p>
          </td>
        </tr>
        <tr>
          <td>Single Room</td>
          <td>Sleeps 1</td>
          <td>$149</td>
          <td>
            <p>+ 0 -</p>
          </td>
        </tr>
        <tr>
          <td>Family Room</td>
          <td>Sleeps 6</td>
          <td>$499</td>
          <td>
            <p>+ 0 -</p>
          </td>
        </tr>
        <hr />
      </table>
      <div className="checkbox-price">
        <label>
          Request rooms next to each other
          <input type="checkbox" />
        </label>
        <strong>Total: $0</strong>
      </div>
      <div className="make-reservation">
        <small>All reservations come with a 24-hour free-cancellation.</small>
        <button className="button">Reserve</button>
      </div>
    </form>
  );
}
