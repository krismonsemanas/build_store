import { Link } from "@inertiajs/react";
import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="text-xl">Welcome</div>
      <Link href={route("login")}>Login</Link>
    </>
  );
};

export default Welcome;
