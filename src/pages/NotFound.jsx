import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Homepage</Link>
    </>
  );
}

export default NotFound;
