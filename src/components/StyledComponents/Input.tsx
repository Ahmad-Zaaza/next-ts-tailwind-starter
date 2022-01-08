import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";
import clsx from "classnames";
interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  desc?: string;
  variant?: "small" | "default";
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, desc, className, variant = "default", error, ...props }, ref) => {
    const inputClasses = useMemo(() => {
      return clsx(
        "w-full bg-paper border  rounded shadow-inner transition-colors duration-75 hover:border-slate-400 focus:outline-primary focus-within:outline-primary",
        { "p-2": variant === "default" },
        { "py-1 px-3 text-sm ": variant === "small" },
        className
      );
    }, [className, variant]);
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 " htmlFor={props.id}>
            {label}
          </label>
        )}
        <input className={inputClasses} {...props} ref={ref} />
        {desc && <span className="text-muted  text-sm">{desc}</span>}
        {error && <span className="text-red-500  inline-block  text-sm">{error}</span>}
      </div>
    );
  }
);

export default Input;
