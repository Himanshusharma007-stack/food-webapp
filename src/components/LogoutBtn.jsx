import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => logout({ logoutParams: { returnTo: 'http://127.0.0.1:5173/food-webapp/' } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;