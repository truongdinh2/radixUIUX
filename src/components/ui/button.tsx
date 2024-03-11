import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:bg-black400 disabled:text-black600 ease-out duration-100 px-5',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary800 active:bg-primary/80 text-white',
        line: 'border border-primary bg-white hover:bg-accent text-primary hover:text-primary800',
        noBg: 'bg-transparent hover:bg-noBgHover text-primary',
        lineWhite: 'bg-transparent border border-white bolor-white text-white',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground active:bg-transparent/80',
        link: 'text-primary underline-offset-4 hover:underline active:bg-tr/80 min-w-fit',
        icon: 'hover:bg-secondary/80 active:bg-secondary/80',
        ggMap: 'bg-googleMap text-white hover:bg-googleMap/90 active:bg-googleMap/80',
      },
      size: {
        primary: 'h-[3.125rem] py-3', //height: 50px
        normal: 'h-[2.625] py-2', //height: 42px
        sm: 'h-[2.125rem] py-1.5 text-sm', //height: 34px
        icon: 'h-8 w-8 min-w-[2rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
