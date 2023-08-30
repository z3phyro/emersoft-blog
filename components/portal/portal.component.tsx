import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

export const Portal = (props: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className="fixed top-0 left-0 h-full w-full bg-white z-20">{props.children}</div>,
        ref.current,
      )
    : null;
};
