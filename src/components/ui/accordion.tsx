import * as React from 'react';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionCustomTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg.openIcon]:hidden [&[data-state=closed]>svg.closeIcon]:hidden',
        className,
      )}
      {...props}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="openIcon"
      >
        <path
          d="M8 0C5.88624 0.0256476 3.86627 0.876737 2.3715 2.3715C0.876737 3.86627 0.0256476 5.88624 0 8C0.0256476 10.1138 0.876737 12.1337 2.3715 13.6285C3.86627 15.1233 5.88624 15.9744 8 16C10.1138 15.9744 12.1337 15.1233 13.6285 13.6285C15.1233 12.1337 15.9744 10.1138 16 8C15.9744 5.88624 15.1233 3.86627 13.6285 2.3715C12.1337 0.876737 10.1138 0.0256476 8 0ZM12.5714 8.57143H8.57143V12.5714H7.42857V8.57143H3.42857V7.42857H7.42857V3.42857H8.57143V7.42857H12.5714V8.57143Z"
          fill="#938657"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="closeIcon"
      >
        <path
          d="M8 0C5.88624 0.0256476 3.86627 0.876737 2.3715 2.3715C0.876737 3.86627 0.0256476 5.88624 0 8C0.0256476 10.1138 0.876737 12.1337 2.3715 13.6285C3.86627 15.1233 5.88624 15.9744 8 16C10.1138 15.9744 12.1337 15.1233 13.6285 13.6285C15.1233 12.1337 15.9744 10.1138 16 8C15.9744 5.88624 15.1233 3.86627 13.6285 2.3715C12.1337 0.876737 10.1138 0.0256476 8 0ZM12.5714 8.57143H3.42857V7.42857H12.5714V8.57143Z"
          fill="#938657"
        />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionCustomTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionCustomTrigger };
