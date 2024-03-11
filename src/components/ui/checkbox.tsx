import * as React from 'react';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded-sm border border-black400 bg-formUncheck ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-base700 data-[state=checked]:text-primary-foreground hover:shadow-checkbox cursor-pointer',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="4.5" width="19" height="19" rx="1.5" fill="#614B45" />
  <rect x="0.5" y="4.5" width="19" height="19" rx="1.5" stroke="#614B45" />
  <path
    d="M7.95834 19.0003L3.20834 14.2503L4.39584 13.0628L7.95834 16.6253L15.6042 8.97949L16.7917 10.167L7.95834 19.0003Z"
    fill="white"
  />
</svg>;
