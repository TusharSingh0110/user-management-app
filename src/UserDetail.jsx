import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams(); // get the user ID from the URL parameters

  return (
    <div>
      <h1>User Detail</h1>
      <p>Showing details for user ID: {id}</p>
      {/* Here you can later fetch the user details based on the ID */}
    </div>
  );
};

export default UserDetail;
