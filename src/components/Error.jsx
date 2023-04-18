import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error__center">
      <h1>Oops.Error Page</h1>
      <Link to="/">Back to Home</Link>
    </section>
  );
};
export default Error;
