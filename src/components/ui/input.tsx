import * as React from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { CalendarDateRangePicker } from '@/pages/dashboard/components/date-range-picker';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  textSub?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, type, textSub, ...props }, ref) => {
    const [visiblePassword, setVisiblePassword] = React.useState(false);
    const toggleVisiblePassword = () => {
      setVisiblePassword((prev) => !prev);
    };
    return (
      <div className="w-full">
        <div className="relative w-full flex items-end gap-1">
          <input
            type={visiblePassword ? 'text' : type}
            className={cn(
              'flex h-[2.625rem] w-full border border-black400 bg-white400 px-3 py-2 text-base text-black500 hover:bg-white active:border-primary outline-none focus:text-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 read-only:border-black300 read-only:text-black700',
              className,
              type == 'password' && 'pr-10',
              error && 'border-error',
            )}
            ref={ref}
            {...props}
          />
          {type == 'password' && (
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-3"
              onClick={toggleVisiblePassword}
            >
              {visiblePassword ? <Icons.showPassword /> : <Icons.hiddenPassword />}
            </button>
          )}
          <span>{textSub}</span>
        </div>
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
