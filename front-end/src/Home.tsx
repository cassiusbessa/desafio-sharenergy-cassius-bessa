import { useEffect } from "react";
import Header from "./components/header";
import { useAuthCheck } from "./utils/validate-token";

export default function Home() {
    useAuthCheck();


  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}