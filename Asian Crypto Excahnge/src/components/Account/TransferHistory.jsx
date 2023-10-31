import React from "react";

const TransferHistory = () => {
  return (
    <div>
      <div
        className="tab-pane"
        id="CurrencyPill"
        role="tabpanel"
        aria-labelledby="Currency-pill"
      >
        <div className="upload-formate mb-5 d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">Transfer History</h3>
            <p className="formate mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="form-field-wrapper-blue p-0 switch_btn  border-dashed border-gray-300 bg-lighten card-rounded ">
              <div className="table-responsive">
                <table className="table  ">
                  <thead>
                    <tr>
                      <th> Sr No.</th>
                      <th> Price</th>
                      <th> Amount</th>
                      <th> Quantity</th>
                      <th> Fees</th>
                      <th> Transaction Type</th>
                      <th> Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">1</td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td>
                        <span className="btn btn-success btn-sm">Trade</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="">2</td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td>
                        <span className="btn btn-danger btn-sm">Failed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="">3</td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td className="">
                        <div>
                          {" "}
                          <span className="color-grey">---</span>
                        </div>
                      </td>
                      <td>
                        <span className="btn btn-warning btn-sm">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferHistory;
