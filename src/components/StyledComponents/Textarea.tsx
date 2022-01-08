import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ITextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  desc?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label, desc, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="block mb-2 " htmlFor={props.id}>
            {label}
          </label>
        )}
        <textarea
          className="w-full bg-paper p-2 border rounded transition-colors duration-75 hover:border-slate-400 focus:outline-primary focus-within:outline-primary"
          {...props}
          ref={ref}
        />
        {desc && <span className="text-muted text-sm">{desc}</span>}
      </div>
    );
  }
);

export default TextArea;
