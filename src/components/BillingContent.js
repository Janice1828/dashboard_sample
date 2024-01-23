import React from "react";
import Navbar from "./Navbar";
const BillingContent = () => {
  return (
    <div className="ps-5">
      <Navbar header="Dashboard" />
      <div className="row pt-5">
        <div className="col-8 row">
          <div className="col-6">
            <h5>Vision UI</h5>
            <h4>7812 2139 0823 xxxx</h4>
            <div className="d-flex">
              <div>
                <p>VALID THRU</p>
                <span className="fw-bolder">05/24</span>
              </div>
              <div>
                <p>CVV</p>
                <span>09x</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-transparent text-light">
              <div className="card-body">
                <div>
                  <p>Credit Balance</p>
                  <h4>$25,215</h4>
                </div>
                <div>
                  <p>Three dot</p>
                </div>
              </div>
            </div>
            <div>
              <span>Newest</span>
              <div>
                <div>
                  <p>Bill & Taxes</p>
                  <span>Today, 16:36</span>
                </div>
                <div>-$154.50</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div>
              <p>Payment Method</p>
              <div>7812 2139 0823 xxxx</div>
            </div>
            <div>
              <button type="" className="btn btn-primary">
                Add A New Card
              </button>
              <div>7812 2139 0823 xxxx</div>
            </div>
          </div>
        </div>
        <div className="col-4 row">
          <div className="col-7">Invoices</div>
          <div className="col-5">
            <button type="" className="btn btn-primary">
              View All
            </button>
          </div>
          <div className="col-7">
            <p>March, 01, 2020</p>
            <span>#MS-415646</span>
          </div>
          <div className="col-5 d-flex gap-2">
            <p>$180</p> <p>pdf</p>
          </div>
          <div className="col-7">
            <p>February, 01, 2020</p>
            <span>#RV-123454</span>
          </div>
          <div className="col-5 d-flex gap-2">
            <p>$200</p> <p>pdf</p>
          </div>
          <div className="col-7">
            <p>April, 9, 2020</p>
            <span>#JK-2034</span>
          </div>
          <div className="col-5 d-flex gap-2">
            <p>$130</p> <p>pdf</p>
          </div>
          <div className="col-7">
            <p>January, 01, 2020</p>
            <span>#JA-897</span>
          </div>
          <div className="col-5 d-flex gap-2">
            <p>$900</p> <p>pdf</p>
          </div>
          <div className="col-7">
            <p>February, 7, 2022</p>
            <span>#FEB-123</span>
          </div>
          <div className="col-5 d-flex gap-2">
            <p>$340</p> <p>pdf</p>
          </div>
        </div>
        <div className="col-8">
          <h5>Billing Information</h5>
          <div className="card bg-transparent text-light">
            <div className="card-body">
              <div>
                <p>Oliver Liam</p>
                <div>
                  <span>Delete</span>
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <p>Company Name: Viking</p>
                <p>Email Address: oliver@gmail.com</p>
                <p>VAT Number: FRB4546</p>
              </div>
            </div>
          </div>
          <div className="card bg-transparent text-light">
            <div className="card-body">
              <div>
                <p>Lucas Harper</p>
                <div>
                  <span>Delete</span>
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <p>Company Name: Stone Tech Zone</p>
                <p>Email Address: lucas@stone.com</p>
                <p>VAT Number: GHS3243</p>
              </div>
            </div>
          </div>
          <div className="card bg-transparent text-light">
            <div className="card-body">
              <div>
                <p>John Doe</p>
                <div>
                  <span>Delete</span>
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <p>Company Name: Leapfrog</p>
                <p>Email Address: leap@careers.com</p>
                <p>VAT Number: LEA756</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex">
            <h5>Your Transactions</h5>
            <p>23-30 March 2021</p>
          </div>
          <div>
            <p>NEWEST</p>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Netflix</h5>
                <p>27 March 2021, at 12:30 PM</p>
              </div>
              <div>-$2,500</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Apple</h5>
                <p>27 March 2021, at 12:30 PM</p>
              </div>
              <div>+$2,500</div>
            </div>
          </div>
          <div>
            <p>OLDER</p>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Stripe</h5>
                <p>26 March 2021, at 13:45 PM</p>
              </div>
              <div>+$800</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>HubSpot</h5>
                <p>26 March 2021, at 12:30 PM</p>
              </div>
              <div>+$1,700</div>
            </div>
          </div>
          <div>
            <p>OLDER</p>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Stripe</h5>
                <p>26 March 2021, at 13:45 PM</p>
              </div>
              <div>+$800</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>HubSpot</h5>
                <p>26 March 2021, at 12:30 PM</p>
              </div>
              <div>+$1,700</div>
            </div>
          </div>
          <div>
            <p>OLDER</p>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Stripe</h5>
                <p>26 March 2021, at 13:45 PM</p>
              </div>
              <div>+$800</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>HubSpot</h5>
                <p>26 March 2021, at 12:30 PM</p>
              </div>
              <div>+$1,700</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Webflow</h5>
                <p>26 March 2021, at 12:30 PM</p>
              </div>
              <div>Pending</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Microsoft</h5>
                <p>25 March 2021, at 16:30 PM</p>
              </div>
              <div>-$987</div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <div>
            &copy; 2024, Made with love by Simmmple & Creative Tim for a better
            web
          </div>
          <div className="d-flex gap-4">
            <span>Simmmple</span>
            <span>Creative Tim</span>
            <span>Blog</span>
            <span>License</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingContent;
