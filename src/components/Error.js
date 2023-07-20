import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>error page</h3>
      <p>
        {err.status} {err.statusText}
      </p>
    </div>
  );
};

export default Error;
