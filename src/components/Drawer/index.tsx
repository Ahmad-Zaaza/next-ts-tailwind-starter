import { ComponentPropsWithoutRef } from "react";
import { useMemo } from "react";
import { forwardRef } from "react";
import Backdrop from "../StyledComponents/Backdrop";
import Portal from "../StyledComponents/Portal";
import clsx from "classnames";
import ClickAwayListener from "react-click-away-listener";
import { AnimatePresence, motion, Variants } from "framer-motion";
interface IDrawerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
}

const Drawer = forwardRef<HTMLDivElement, IDrawerProps>(
  ({ children, onClose, open, anchor = "bottom" }, ref) => {
    const drawerStyles = useMemo(() => {
      return clsx("drawer ", {
        "right-0 top-0 h-full": anchor === "right",
        "left-0 top-0 h-full": anchor === "left",
        "top-0 left-0 right-0 bottom-auto" : anchor === "top",
        "bottom-0 left-0 right-0 top-auto": anchor === "bottom"
      });
    }, [anchor]);

    const drawerVariants: Variants = useMemo(() => {
      switch (anchor) {
        case "left": {
          const initialValue = "-100%";
          return {
            initial: {
              x: initialValue
            },
            animate: {
              x: 0
            },
            exit: {
              x: initialValue
            }
          };
        }
        case "top": {
          const initialValue = "-100%";
          return {
            initial: {
              y: initialValue
            },
            animate: {
              y: 0
            },
            exit: {
              y: initialValue
            }
          };
        }
        case "right": {
          const initialValue = "100%";
          return {
            initial: {
              x: initialValue
            },
            animate: {
              x: 0
            },
            exit: {
              x: initialValue
            }
          };
        }
        case "bottom": {
          const initialValue = "100%";
          return {
            initial: {
              y: initialValue
            },
            animate: {
              y: 0
            },
            exit: {
              y: initialValue
            }
          };
        }
      }
    }, [anchor]);
    return (
      <Portal portalId="drawer-root">
        <AnimatePresence>
          {open && (
            <>
              <Backdrop key={"backdrop"} />
              <ClickAwayListener key="drawer" onClickAway={onClose}>
                <motion.div
                  variants={drawerVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ ease: "easeIn",duration:0.175 }}
                  exit="exit"
                  className={drawerStyles}
                  ref={ref}
                >
                  {children}
                </motion.div>
              </ClickAwayListener>
            </>
          )}
        </AnimatePresence>
      </Portal>
    );
  }
);

export default Drawer;
