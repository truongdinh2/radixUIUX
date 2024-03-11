import { cn } from '@/lib/utils';

import { Separator } from './ui/separator';

export function TitleSeparator({ title, className }: { title: string; className?: string }) {
  return (
    <div className={cn('w-full', className)}>
      <div>
        <h2 className="fontsize-l text-black900 font-medium">{title}</h2>
      </div>
      <div className="grid grid-cols-10 mt-1.5 sm:grid-cols-4">
        <Separator
          orientation="horizontal"
          className="col-span-4 bg-base900 opacity-75 sm:col-span-1"
        />
        <Separator
          orientation="horizontal"
          className="col-span-6 bg-base900 opacity-25 sm:col-span-3"
        />
      </div>
    </div>
  );
}
