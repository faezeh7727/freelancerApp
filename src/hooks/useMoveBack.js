/** @format */

import { useNavigate } from "react-router-dom";

export default function UseMoveBack() {
  const Navigate = useNavigate();
  return () => Navigate(-1);
}
