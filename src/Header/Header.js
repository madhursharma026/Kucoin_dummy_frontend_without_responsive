import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-2" style={{ background: "#01081E" }}>
        <div className="container-fluid">
          <Link to="/">
            <img src="https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg" alt="#" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ paddingLeft: "15px" }}>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "transparent" }}>
                    <img src="https://assets-currency.kucoin.com/60bf8a90db892b0006d73786_BTC.png" alt="#" height="20px" width="20px" /> <span style={{ fontWeight: "700" }}>BTC/USDT</span>
                  </button>
                  <i className="fa fa-info-circle text-secondary" style={{ cursor: "pointer" }}></i>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: "500px", background: '#151C30' }}>
                    <li className='px-2'>
                      <table className="table text-light">
                        <thead>
                          <tr>
                            <th scope="col">Markets</th>
                            <th scope="col">Pair</th>
                            <th scope="col">Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Favorites</td>
                            <td>ETH/BTC</td>
                            <td className='text-success'>+0.03%</td>
                          </tr>
                          <tr>
                            <td>Margin</td>
                            <td>ETH/BTC</td>
                            <td className='text-danger'>-0.03%</td>
                          </tr>
                          <tr>
                            <td>USDⓈ</td>
                            <td>ETH/BTC</td>
                            <td className='text-success'>+0.03%</td>
                          </tr>
                          <tr>
                            <td>Margin</td>
                            <td>ETH/BTC</td>
                            <td className='text-danger'>-0.03%</td>
                          </tr>
                          <tr>
                            <td>USDⓈ</td>
                            <td>ETH/BTC</td>
                            <td className='text-success'>+0.03%</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item px-3" style={{ cursor: "pointer" }}>
                <h6 className='text-secondary' style={{ fontSize: "14px" }}>Price</h6>
                <h6 className='text-light' style={{ fontSize: "12px", lineHeight: "0.1" }}>28,900 <span className='text-danger'>-4.17%</span></h6>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <h6 className='text-secondary' style={{ fontSize: "14px" }}>24h High</h6>
                <h6 className='text-light' style={{ fontSize: "12px", lineHeight: "0.1" }}>28,900</h6>
              </li>
              <li className="nav-item px-3" style={{ cursor: "pointer" }}>
                <h6 className='text-secondary' style={{ fontSize: "14px" }}>24h Low</h6>
                <h6 className='text-light' style={{ fontSize: "12px", lineHeight: "0.1" }}>28,900</h6>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <h6 className='text-secondary' style={{ fontSize: "14px" }}>24h Amount</h6>
                <h6 className='text-light' style={{ fontSize: "12px", lineHeight: "0.1" }}>28,900</h6>
              </li>
              <li className="nav-item px-3" style={{ cursor: "pointer" }}>
                <h6 className='text-secondary' style={{ fontSize: "14px" }}>24h Volume</h6>
                <h6 className='text-light' style={{ fontSize: "12px", lineHeight: "0.1" }}>28,900</h6>
              </li>
            </ul>
            <form className="d-flex text-light">
              <h6 className='mt-2' style={{ cursor: "pointer" }}>Tour</h6>
              <h6 className='px-3 mt-2' style={{ cursor: "pointer" }}><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nn6nlvaI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5LyY5YyWIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5p2g5p2G6aG16Z2iLeW4g+WxgCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTYuMDAwMDAwLCAtNTguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJ0b3DlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTk2LjAwMDAwMCwgMTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsLTQuNDY1MzE3MDFlLTEyIEwxNSw1IEwxOCw1IEwxOCwxNyBMMiwxNyBMMiw1IEw1LDUgTDEwLC00LjQ2NTMxNzAxZS0xMiBaIE0xNyw2IEwzLDYgTDMsMTYgTDE3LDE2IEwxNyw2IFogTTEwLDEyIEwxMCwxMyBMNiwxMyBMNiwxMiBMMTAsMTIgWiBNMTQsOSBMMTQsMTAgTDYsMTAgTDYsOSBMMTQsOSBaIE0xMCwxLjQxNDIxMzU2IEw2LjQxMyw1IEwxMy41ODUsNSBMMTAsMS40MTQyMTM1NiBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsLW9wYWNpdHk9IjAuNiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="#" /></h6>
              <h6 className='px-2 mt-2' style={{ cursor: "pointer" }}><i class="fa fa-sun-o"></i></h6>
              <h6 className='px-2 mt-2' style={{ cursor: "pointer" }}><i class="fa fa-wifi"></i></h6>
              <button type="button" class="btn py-0 mx-1 mt-2" style={{ background: "#58CCB6", height: "30px" }}>Log In</button>
              <button type="button" class="btn btn-outline-info py-0 mx-1 mt-2" style={{ height: "30px" }}>SignUp</button>
              <p className='px-2 mt-2' style={{ cursor: "pointer" }}>English/USD</p>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

