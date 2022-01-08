import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ICheckboxProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex p-1 w-full space-x-3 items-center justify-between select-none cursor-pointer">
        {label && <span className="block">{label}</span>}
        <input
          type="checkbox"
          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-primary h-5 w-5 rounded-lg"
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

export default Checkbox;
