import axios from 'axios';
import React, {useEffect, useState} from 'react'

let url = "http://localhost:8000/api/v1/users/register"


function Register() {
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const { fullName, email, password, userName, locality, city} = inputs;
  const handleSubmit = async(event) => {
    event.preventDefault();
    alert("regestration sucessfully");
    const data = await axios.post(url, {fullName, email, password, userName, locality, city});
        setUserData(data.data);
  }
  useEffect(() => {
    // console.log("userData", userData)
  }, [userData])

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
      <div className="flex flex-col">
        <label for="fullName" className="hidden">
          Enter your fullName:
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="fullName"
          value={inputs.fullName || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="email" className="hidden">
          Enter your email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputs.email || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label for="password" className="hidden">
          Enter your password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="userName" className="hidden">
          Enter your userName:
        </label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          value={inputs.userName || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="locality" className="hidden">
          Enter your locality:
        </label>
        <input
          type="text"
          name="locality"
          placeholder="locality"
          value={inputs.locality || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label for="city" className="hidden">
          Enter your city:
        </label>
        <input
          type="text"
          name="city"
          placeholder="city"
          value={inputs.city || ""}
          onChange={handleChange}
          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
      >
        Submit
      </button>          
    </form>
  )
}


      
 

export default Register
