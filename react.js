 {this.state.customers.map((item, idx) => {
                return <p key={`item_${idx}`}>{item.first_name}</p>;
              })}




 <tr>
                  <th scope="row">#1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>email</td>
                  <td>phone</td>
                  <td>Date Created</td>
                  <td className="text-center">
                    <Link className="btn btn-primary margin_right5" to="/Details"> Detail </Link>
                    <Link className="btn btn-info margin_right5" to="/Update"> Update </Link>
                    <Link className="btn btn-danger" to="/"> itemDelete </Link>
                  </td>
                </tr>










<td className="text-center">
                    <Link className="btn btn-primary margin_right5" to="/Details"> Detail </Link>
                    <Link className="btn btn-info margin_right5" to="/Update"> Update </Link>
                    <Link className="btn btn-danger" to="/"> itemDelete </Link>
                  </td>







