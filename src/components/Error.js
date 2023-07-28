import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="w-full text-center font-bold">
      <h3>Error</h3>
      <p>
        {err.status} {err.statusText}
      </p>
      <p className=" text-sm font-light mb-8">click below to go HomePage</p>
      <Link to="/" className=" text-white bg-black p-1 rounded cursor-pointer">
        Home
      </Link>
    </div>
  );
};

export default Error;
