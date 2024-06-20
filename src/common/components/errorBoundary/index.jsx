import React from 'react';
import './style.scss';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  let error = useRouteError();

  if (error) {
    let statusCode = error.status || error.response?.status;
    let errorMessage = error.message;
    let message;

    switch (statusCode) {
      case 400:
        message = "Bad Request. Please check your input.";
        break;
      case 401:
        message = "Unauthorized. Please log in.";
        break;
      case 403:
        message = "Forbidden. You do not have permission to access this.";
        break;
      case 404:
        message = "Not Found. The requested resource could not be found.";
        break;
      case 500:
        message = "Internal Server Error. Please try again later.";
        break;
      case 502:
        message = "Bad Gateway. The server is down or being upgraded.";
        break;
      case 503:
        message = "Service Unavailable. The server is currently unavailable.";
        break;
      case 504:
        message = "Gateway Timeout. The server is taking too long to respond.";
        break;
      default:
        message = errorMessage || "An unexpected error has occurred.";
    }

    return (
      <div className="ErrorBoundary-container" role="alert">
        <p>Something went wrong:</p>
        {statusCode && <p>Status Code: {statusCode}</p>}
        <p>{message}</p>
      </div>
    );
  }

  return null; // or return children if you want to render children when there's no error
};

export default ErrorBoundary;
