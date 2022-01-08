import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";
import clsx from "classnames";
interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, primary, size, className, ...props }, ref) => {
    const buttonClasses = useMemo(() => {
      return clsx(
        "btn ",
        { "bg-primary text-inverted": primary },
        { "py-3 px-6": size === "large" },
        { "py-1 px-3 text-sm rounded": size === "small" },
        className
      );
    }, [className, primary, size]);
    return (
      <button type="button" className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
