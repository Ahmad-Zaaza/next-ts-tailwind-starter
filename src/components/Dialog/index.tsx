import { ComponentPropsWithoutRef, useEffect } from "react";
import { useMemo } from "react";
import { forwardRef } from "react";
import Backdrop from "../StyledComponents/Backdrop";
import Portal from "../StyledComponents/Portal";
import ClickAwayListener from "react-click-away-listener";
import { AnimatePresence, motion, Variants } from "framer-motion";
interface IDialogProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
}

const Dialog = forwardRef<HTMLDivElement, IDialogProps>(
  ({ children, onClose, open }, ref) => {
    useEffect(() => {
      if (open) {
        if (document.body.clientHeight > window.innerHeight) {
          //FIXME:
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "17px";
        }
      }
      return () => {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "unset";
      };
    }, [open]);
    const dialogVariants: Variants = useMemo(() => {
      const initialValue = { opacity: 0, y: 50 };
      return {
        initial: initialValue,
        animate: { opacity: 1, y: 0 },
        exit: initialValue
      };
    }, []);
    return (
      <Portal portalId="dialog-root">
        <AnimatePresence>
          {open && (
            <div className="z-dialog flex  items-center justify-center">
              <Backdrop key={"backdrop"} />
              <ClickAwayListener key="drawer" onClickAway={onClose}>
                <motion.div
                  variants={dialogVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ ease: "easeOut", duration: 0.175 }}
                  exit="exit"
                  className="dialog"
                  ref={ref}
                >
                  {children}
                </motion.div>
              </ClickAwayListener>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    );
  }
);

export default Dialog;
