import { useState, useEffect } from 'react';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);

      if (error && error.response && error.response.status) {
        setStatusCode(error.response.status);
      } else if (error && error.message && error.message.includes('Network Error')) {
        setStatusCode(null);
        setErrorMessage('Network Error. Please check your internet connection.');
      } else if (error && error.message && error.message.includes('timeout')) {
        setStatusCode(504);
        setErrorMessage('Request Timeout. The server is taking too long to respond.');
      } else {
        setStatusCode(null);
        setErrorMessage('An unexpected error has occurred.');
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  return { hasError, statusCode, errorMessage };
};

export default useErrorBoundary;
