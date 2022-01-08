import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  portalId: string;
}

const Portal: React.FC<IPortalProps> = ({ children, portalId }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return mounted
    ? createPortal(children, document.querySelector(`#${portalId}`) as Element)
    : null;
};

export default Portal;
