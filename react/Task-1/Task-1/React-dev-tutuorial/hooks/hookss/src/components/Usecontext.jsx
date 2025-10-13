import { useContext } from "react";

function Usecontext() {
  const username = useContext(UserContext);
  return <h2>Hello, {username}!</h2>;
}

export default Usecontext