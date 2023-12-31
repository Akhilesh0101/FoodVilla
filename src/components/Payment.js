
  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import "./Payment.css";
  const initDetails = {
    creditCardNum: "",
    cardHolder: "",
    expireMonth: "January",
    expireYear: "2024",
  };
  const Payment = () => {
   
    const [details, setDetails] = useState(initDetails);
    const navigate = useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // onOpen();
    };
    return (
      <div  style={{marginTop:"8%"}}>
      
        <div>
 
          <div
            style={{
              width: "30%",
              margin: "auto",
            }}
          >
            <form id="form" onSubmit={handleSubmit}>
              <div id="card">
                {/* <div className="header">
                  <div className="sticker"></div>
               
             <div>
                    <img
                      className="logo"
                      src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
                      alt="Card logo"
                    />
                  </div> 



                </div> */}
                <div className="body">
                  <h2 style={{ marginTop: "80px" }} id="creditCardNumber">
                    {details.creditCardNum}
                  </h2>
                </div>
                <div className="footer">
                  <div>
                    <h5>Card Holder</h5>
                    <h3>{details.cardHolder}</h3>
                  </div>
                  <div>
                    <h5>Expires</h5>
                    <h3>
                      {details.expireMonth} / {details.expireYear}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="input-container mt">
                <h4>Enter card number</h4>
                <input
                  type="text"
                  maxlength="16" minLength='16'
                  name="creditCardNum"
                  value={details.creditCardNum}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <h4>Card Holder Name</h4>
                <input
                  type="text"
                  name="cardHolder"
                  value={details.cardHolder}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                  gap: "3rem",
                }}
              >
                <div>
                  <h4>Expiration Month</h4>
                  <select
                    value={details.expireMonth}
                    name="expireMonth"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="January" value="January">
                      January
                    </option>
                    <option name="February" value="February">
                      February
                    </option>
                    <option name="March" value="March">
                      March
                    </option>
                    <option name="April" value="April">
                      April
                    </option>
                    <option name="May" value="May">
                      May
                    </option>
                    <option name="June" value="June">
                      June
                    </option>
                    <option name="July" value="July">
                      July
                    </option>
                    <option name="August" value="August">
                      August
                    </option>
                    <option name="September" value="September">
                      September
                    </option>
                    <option name="October" value="October">
                      October
                    </option>
                    <option name="November" value="November">
                      November
                    </option>
                    <option name="December" value="December">
                      December
                    </option>
                  </select>
                </div>
                <div>
                  <h4>Year</h4>
                  <select
                    value={details.expireYear}
                    name="expireYear"
                    onChange={handleChange}
                    required={true}
                  >
                    <option name="2024" value="2024">
                      2024
                    </option>
                    <option name="2025" value="2025">
                      2025
                    </option>
                    <option name="2026" value="2026">
                      2026
                    </option>
                    <option name="2027" value="2027">
                      2027
                    </option>
                    <option name="2028" value="2028">
                      2028
                    </option>
                    <option name="2029" value="2029">
                      2029
                    </option>
                    <option name="2030" value="2030">
                      2030
                    </option>
                    <option name="2031" value="2031">
                      2031
                    </option>
                    <option name="2032" value="2032">
                      2032
                    </option>
                  </select>
                </div>
                <div>
                  <h4>CVV</h4>

                  <input style={{padding:" 0.25rem 0.25rem"}} type="password" placeholder="CVV" required />
                </div>
              </div>
              <Link to="/">

              <button >Submit Payment</button>
              </Link>
            </form>
          </div>   
        </div>
      </div>
    );
  };
  export default Payment;