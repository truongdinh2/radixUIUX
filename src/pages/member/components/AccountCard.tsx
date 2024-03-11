import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

interface AccountCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AccountCard({ children, className, ...props }: AccountCardProps) {
  return (
    <div
      className={cn(
        'flex w-full p-4 gap-2 border rounded items-center cursor-pointer shadow-gray08 border-black300 hover:border-primary800 member-card',
        className,
      )}
      {...props}
    >
      <div className="flex-[0_1_calc(100%-2rem)]">{children}</div>
      <Icons.iconNext className="flex-[0_1_1.5625rem]" />
    </div>
  );
}
