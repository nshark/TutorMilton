import { useEffect, useState } from "react";
import { auth } from "../config/firebase-config.ts";
import Dashboard from "./Dashboard.tsx";
import LoginButton from "./loginButton.tsx";

export default function GoogleLogin() {
  const [state, setState] = useState(false);
  useEffect(
    auth.onAuthStateChanged((user) => {
      setState(Boolean(user).valueOf());
    }),
    [],
  );
  return (
    <div className="App-bg">{state ? <Dashboard /> : <LoginButton />}</div>
  );
}
