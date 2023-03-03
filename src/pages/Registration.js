import React, { useState } from "react";
import { json } from "react-router-dom";

const Registration = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [user_id, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
    const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = { first_name, last_name, user_id, email, pass, role };

    const res = await fetch("http://35.77.46.232:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    
    const json = await res.json();

    // res.ok == false
    if(!res.ok){
        setError(json.err)
    }

 // res.ok == true
    if (res.ok) {
      setFirstName("");
      setLastName("");
      setUserId("");
      setEmail("");
      setPass("");
      setRole("");
      setError(null)
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="registration-form max-w-sm mx-auto py-10 min-h-screen flex flex-col gap-4"
    >
      <h2
        className="text-4xl font-medium text-gray
        -100 mb-10"
      >
        Registration
      </h2>
      <div className="form-control flex flex-col gap-4">
        <label
          htmlFor="firstname"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          id="firstname"
          value={first_name}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-control flex flex-col gap-4">
        <label
          htmlFor="lastname"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          id="lastname"
          value={last_name}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-control flex flex-col gap-4">
        <label
          htmlFor="firstname"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          User Id
        </label>
        <input
          type="number"
          placeholder="Enter your user id"
          id="firstname"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="form-control flex flex-col gap-4">
        <label
          htmlFor="email"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your first name"
          id="email"
          value={email}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control flex flex-col gap-4">
        <label
          htmlFor="password"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={pass}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="form-control flex flex-col gap-5">
        <label
          htmlFor="role"
          className="cursor-pointer text-xl hover:text-gray-500 duration-300"
        >
          Role (lawyer or client)
        </label>
        <input
          type="text"
          placeholder="Enter your role ?"
          id="role"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-gray-400 duration-300"
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500  text-slate-900 rounded-xl py-3 hover:text-gray-600 hover:bg-orange-400 duration-300 mt-3 "
      >
        Log In
      </button>
      {error && (
        <p
          className="bg-orange-500/20 rounded border border-rose-400
       p-5 text-rose-500 "
        >
          {error}
        </p>
      )}
    </form>
  );
};

export default Registration;
