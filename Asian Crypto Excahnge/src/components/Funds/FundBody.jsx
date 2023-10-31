import React from "react";

const FundBody = () => {
  return (
    <div>
      <div className="main">
        <section className="sub-page-banner sub-page-banner-space relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-banner  text-center">
                  <h1 className="sub-banner-title text-white">Funds</h1>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mm-sec funds_sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content-part  ">
                  <div className="nav-tab d-flex-between mg-3 mb-lg-4">
                    <ul className="tab-link">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="btn-small active"
                          data-tab="tab-2"
                        >
                          {" "}
                          Funds{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="btn-small"
                          data-tab="tab-1"
                        >
                          {" "}
                          Transfer History{" "}
                        </a>
                      </li>
                    </ul>
                    <div className="d-flex-between bidder">
                      <span>Estimated Portfolio : </span>
                      <div className="d-flex-center ms-1">
                        <span className="text-white">$ 0</span>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-panel active " id="tab-2">
                      <div className="table-responsive ">
                        <table className="table ">
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th> Assets</th>
                              <th> Available Balance</th>
                              <th> Locked</th>
                              <th> Total</th>
                              <th> Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>BTC</td>
                              <td> 0.00000 </td>
                              <td> 0 </td>
                              <td> 0.00000 </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a
                                    href=""
                                    className="btn btn-sm me-2 btn-success px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Deposit-modal"
                                  >
                                    Deposit
                                  </a>
                                  <a
                                    href=""
                                    className="btn  btn-sm btn-danger  px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Withdraw-modal"
                                  >
                                    Withdraw
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>BTC</td>
                              <td> 0.00000 </td>
                              <td> 0 </td>
                              <td> 0.00000 </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a
                                    href=""
                                    className="btn btn-sm me-2 btn-success px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Deposit-modal"
                                  >
                                    Deposit
                                  </a>
                                  <a
                                    href=""
                                    className="btn  btn-sm btn-danger  px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Withdraw-modal"
                                  >
                                    Withdraw
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>BTC</td>
                              <td> 0.00000 </td>
                              <td> 0 </td>
                              <td> 0.00000 </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a
                                    href=""
                                    className="btn btn-sm me-2 btn-success px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Deposit-modal"
                                  >
                                    Deposit
                                  </a>
                                  <a
                                    href=""
                                    className="btn  btn-sm btn-danger  px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Withdraw-modal"
                                  >
                                    Withdraw
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>BTC</td>
                              <td> 0.00000 </td>
                              <td> 0 </td>
                              <td> 0.00000 </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a
                                    href=""
                                    className="btn btn-sm me-2 btn-success px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Deposit-modal"
                                  >
                                    Deposit
                                  </a>
                                  <a
                                    href=""
                                    className="btn  btn-sm btn-danger  px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Withdraw-modal"
                                  >
                                    Withdraw
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>BTC</td>
                              <td> 0.00000 </td>
                              <td> 0 </td>
                              <td> 0.00000 </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <a
                                    href=""
                                    className="btn btn-sm me-2 btn-success px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Deposit-modal"
                                  >
                                    Deposit
                                  </a>
                                  <a
                                    href=""
                                    className="btn  btn-sm btn-danger  px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Withdraw-modal"
                                  >
                                    Withdraw
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-panel mt-3 " id="tab-1">
                      <div className="table-responsive ">
                        <div className="favouriteData">
                          <img
                            src="images/no-data.svg"
                            className="img-fluid"
                            width="96"
                            height="96"
                            alt=""
                          />
                          <p className="mt-3 mb-4"> No Data Found. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wallet-modal">
          <div
            className="modal"
            id="Deposit-modal"
            tabindex="-1"
            aria-hidden="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  <div className="form-group mb-0 step_1  text-center d-none ">
                    <h3 className=" text-dark">Deposit Funds</h3>
                    <p className=" text-dark">
                      Select network to deposit Funds
                    </p>
                    <select
                      name="cars"
                      className="form-control form-select mt-3"
                    >
                      <option>Select Network</option>
                      <option value="BTC" className="pt-3">
                        BTC
                      </option>
                    </select>
                    <button
                      type="#"
                      target="_blank"
                      className="btn-small btn w-100 mt-3"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="form-group mb-0 step_2">
                    <div className="text-center">
                      <h3 className=" text-dark">Deposit Funds</h3>
                      <p className=" text-dark ">
                        Scan Code or Copy Code to Deposit Funds
                      </p>
                      <img
                        src="images/scan.png"
                        alt="scane-qr"
                        className="m-auto"
                      />
                      <input
                        className="form-control"
                        type="text"
                        readonly="readonly"
                        value="3KjiMMV8jmdLbjG96WTajpC3NbH1pdYLjT"
                      />
                      <small>Click above to copy the Code.</small>
                    </div>

                    <ul className="disclaimer mt-3">
                      <label>Disclaimer</label>
                      <li>
                        • Minimum deposit of 0.0 BTC, deposit below that cannot
                        be recovered.
                      </li>
                      <li>
                        • Please deposit only BTC on this address. If you
                        deposit any other coin, it will be lost forever.
                      </li>
                      <li>
                        • This is BTC deposit address type. Transferring to an
                        unsupported network could result in loss of deposit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-modal">
          <div
            className="modal"
            id="Deposit-modal"
            tabindex="-1"
            aria-hidden="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  <div className="form-group mb-0 step_1  text-center d-none ">
                    <h3 className=" text-dark">Deposit Funds</h3>
                    <p className=" text-dark">
                      Select network to deposit Funds
                    </p>
                    <select
                      name="cars"
                      className="form-control form-select mt-3"
                    >
                      <option>Select Network</option>
                      <option value="BTC" className="pt-3">
                        BTC
                      </option>
                    </select>
                    <button
                      type="#"
                      target="_blank"
                      className="btn-small btn w-100 mt-3"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="form-group mb-0 step_2">
                    <div className="text-center">
                      <h3 className=" text-dark">Deposit Funds</h3>
                      <p className=" text-dark ">
                        Scan Code or Copy Code to Deposit Funds
                      </p>
                      <img
                        src="images/scan.png"
                        alt="scane-qr"
                        className="m-auto"
                      />
                      <input
                        className="form-control"
                        type="text"
                        readonly="readonly"
                        value="3KjiMMV8jmdLbjG96WTajpC3NbH1pdYLjT"
                      />
                      <small>Click above to copy the Code.</small>
                    </div>

                    <ul className="disclaimer mt-3">
                      <label>Disclaimer</label>
                      <li>
                        • Minimum deposit of 0.0 BTC, deposit below that cannot
                        be recovered.
                      </li>
                      <li>
                        • Please deposit only BTC on this address. If you
                        deposit any other coin, it will be lost forever.
                      </li>
                      <li>
                        • This is BTC deposit address type. Transferring to an
                        unsupported network could result in loss of deposit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-modal">
          <div
            className="modal"
            id="Withdrawa-modal"
            tabindex="-1"
            aria-hidden="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  <div className="form-group mb-0 step_1  text-center  ">
                    <h3 className=" text-dark"> Withdraw Funds </h3>
                    <p className=" text-dark">
                      Enter Details to Withdwor funds
                    </p>

                    <div className="form-group mb-3 mt-3 ">
                      <input className="form-control" type="text" value="BTC" />
                    </div>
                    <div className="form-group mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="wallet_Add"
                        placeholder="Walle Address"
                        value=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="amount_val"
                        placeholder="Amount"
                        value=""
                      />
                    </div>
                    <div className="form-group mb-4">
                      <select name="cars" className="form-control form-select">
                        <option>Select Network</option>
                        <option value="BTC">BTC</option>
                      </select>
                    </div>
                    <div className="form-group mb-4">
                      <button
                        type="button"
                        className="btn btn-gradient btn-small w-100 justify-content-center"
                        data-bs-dismiss="modal"
                      >
                        <span>Withdraw</span>
                      </button>
                    </div>
                    <p>Withdrawal Fee:- 0.0006</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-modal">
          <div
            className="modal"
            id="Withdraw-modal"
            tabindex="-1"
            aria-hidden="false"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  <div className="form-group mb-0 step_1">
                    <div className="text-center">
                      <h3 className=" text-dark"> Transfer History </h3>
                      <p className=" text-dark"> </p>
                    </div>

                    <div className="tt_item ">
                      <span className="tt_disable">Status</span>
                      <span className="badge badge-warning">
                        <strong>Pending</strong>
                      </span>
                    </div>
                    <div className="tt_data">
                      <div className="tt_item">
                        <span className="tt_disable">Transaction Type</span>
                        <span className="tt_normal">
                          <b>Debit</b>
                        </span>
                      </div>
                      <div className="tt_item ">
                        <span className="tt_disable">TDS Amount</span>
                        <span className="tt_normal">
                          <b>195.40580000000003</b>
                        </span>
                      </div>
                      <div className="tt_item">
                        <span className="tt_disable">Amount</span>
                        <span className="tt_normal">
                          <b>19521.039</b>
                        </span>
                      </div>
                      <div className="tt_item ">
                        <span className="tt_disable">Transtion ID</span>
                        <span className="tt_normal">
                          <b>6336c0967708b96d53352db7</b>
                        </span>
                      </div>
                      <div className="tt_item ">
                        <span className="tt_disable">Date &amp Time</span>
                        <span className="tt_normal">
                          <b> 09/30/2022 </b>
                        </span>
                      </div>
                      <div className="tt_item ">
                        <span className="tt_disable">
                          Transaction Fees{" "}
                          <small>Incl.of all applicable taxes</small>
                        </span>
                        <span className="tt_normal">
                          <b>19.54058</b>
                        </span>
                      </div>
                      <div className="tt_item ">
                        <span className="tt_disable">Remarks</span>
                        <span className="tt_normal">
                          <b>yugExchange</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundBody;
