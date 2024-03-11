import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { NavItem } from '@/types/nav';

interface MainNavProps {
  className?: string;
  items?: NavItem[];
}

export function MainNav({ className, items }: MainNavProps) {
  return (
    <div className={cn('flex gap-6 md:gap-10', className)}>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={`${item.href}`}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
