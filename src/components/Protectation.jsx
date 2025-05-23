import { Navigate } from "react-router-dom";

export default function Protectation({ children, user }) {
  console.log("Protection: ", user);

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}