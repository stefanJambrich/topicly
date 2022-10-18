import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  return <div>user {userId}</div>;
};

export default UserPage;
