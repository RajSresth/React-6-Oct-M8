import { useState } from "react";

const Signup = () => {
  const [searchText, setSearchText] = useState("");

  console.log("Singup Component");

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) =>  setSearchText(e.target.value)}
        placeholder="Search here..."
      />

      <p>Query: {searchText}</p>
    </div>
  );
};

export default Signup;
