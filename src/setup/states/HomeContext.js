import React, { createContext, useEffect, useState } from "react";
// import { fetchProfile } from "../../pages/home/apis/apiServices";
import ScreenLoader from "../../common/components/loaders/ScreenLoader";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchProfile()
  //     .then((response) => {
  //       if (response) {
  //         setAdmin(response);
  //       } else {
  //         setError(new Error("No profile data found"));
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    throw error;
  }

  return (
    <HomeContext.Provider value={{ admin, setAdmin }}>
      {children}
    </HomeContext.Provider>
  );
};
