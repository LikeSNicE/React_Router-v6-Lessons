import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage(){

  const error = useRouteError();

  if(isRouteErrorResponse(error)){
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.message || 'Something went wrong!'}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    )
  }

  throw error
}

export default ErrorPage;