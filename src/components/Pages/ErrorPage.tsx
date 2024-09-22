import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import GlobalHeader from "../GlobalHeader/GlobalHeader";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <GlobalHeader />
      {isRouteErrorResponse(error) ? "Invalid URL" : "Somthing Failed"}
    </>
  );
};

export default ErrorPage;
