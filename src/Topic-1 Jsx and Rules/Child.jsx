const Child = () => {

    const fullname = "Virat Kohli";
    const age = 38;
    const isLogin = false;

  return (
    <>
        <h3>Fullname: {fullname}</h3>
        <h3>Age: {age}</h3>
        {
            isLogin? <h3>Welcome {fullname}</h3>: <h3>{fullname} Please login</h3>
        }
    </>
  );
};

export default Child;


