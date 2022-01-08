import { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

interface IDrawerProps extends ComponentPropsWithoutRef<"div"> {}

const Drawer = forwardRef<HTMLDivElement, IDrawerProps>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

export default Drawer;
