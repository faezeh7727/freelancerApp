/** @format */
import { useRef, useEffect } from "react";
export default function useOutsideClick(handler, listenCapturing = true) {
  const modalRef = useRef();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleOutsideClick, listenCapturing);

    return () =>
      document.removeEventListener(
        "click",
        handleOutsideClick,
        listenCapturing,
      );
  }, [handler, listenCapturing]);

  return modalRef;
}
