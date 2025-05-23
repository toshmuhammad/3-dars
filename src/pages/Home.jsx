export default function Home({ setUser }) {
  return (
    <div>
      Home
      <button
        onClick={() => {
          setUser(null);
          localStorage.removeItem("user");
        }}
      >
        Sign out
      </button>
    </div>
  );
}