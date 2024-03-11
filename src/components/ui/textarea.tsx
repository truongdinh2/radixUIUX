import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-black400 bg-white400 px-3 py-2 text-base text-black500 hover:bg-white active:border-primary outline-none focus:text-black  placeholder:text-black500  disabled:cursor-not-allowed disabled:opacity-50 read-only:border-black300 read-only:text-black700',
          className,
          error && 'border-error',
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
