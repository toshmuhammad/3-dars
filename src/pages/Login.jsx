import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          const fakeUser = { user: "sa" };
          setUser(fakeUser);
          localStorage.setItem("user", JSON.stringify(fakeUser));
          navigate("/");
        }}
      >
        Sign in
      </button>
    </div>
  );
}