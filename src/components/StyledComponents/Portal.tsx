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
  useEffect(() => {
    if (portalId && mounted) {
      if (window.scrollbars.visible) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "17px";
      }
    }
  }, [portalId, mounted]);

  return mounted
    ? createPortal(children, document.querySelector(`#${portalId}`) as Element)
    : null;
};

export default Portal;
