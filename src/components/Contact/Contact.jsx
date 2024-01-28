import React from "react";
import Register from "../Register";
import Login from "../Login";
import UpdateAccountDetails from "../UpdateAccountDetails";

function Contact() {
  return (
    <div className="px-5 py-2 space-y-3">
      <div className="space-y-2">
      <h4 className="text-2xl font-bold">Regsiter form</h4>
      <Register/>
      </div>
      <div className="border-2 border-gray-500"></div>
      <div className="space-y-2">
      <h4 className="text-2xl font-bold">Login form</h4>
      <Login/>
      </div>
      <div className="border-2 border-gray-500"></div>
      <div className="space-y-2">
      <h4 className="text-2xl font-bold">UpdateAccountDetails</h4>
      <UpdateAccountDetails/>
      </div>
    </div>
  );
}

export default Contact;
