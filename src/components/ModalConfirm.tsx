import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';

interface ModalConfirm extends React.HTMLAttributes<HTMLDivElement> {
  handleCancel?: () => void;
  handleSubmit?: () => void;
  textCancel?: string;
  textSubmit?: string;
  title?: string;
}
export function ModalConfirm({
  handleSubmit,
  handleCancel,
  textCancel,
  textSubmit,
  children,
  title,
  className,
  ...props
}: ModalConfirm) {
  return (
    <DialogContent className={cn('p-0 gap-0', className)} showCloseButton={false} {...props}>
      <DialogHeader className="flex flex-row fontsize-m font-medium text-black900 h-[3.5rem] items-center bg-black100 rounded-t-lg px-4 border-b border-b-black400">
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div className="fontsize-m font-normal text-black900 p-5 break-all sm:p-10">{children}</div>
      <DialogFooter className="flex flex-row justify-end border-t border-t-black400 py-3 px-4 gap-3">
        {textCancel && (
          <Button
            onClick={handleCancel}
            className="w-[5.5rem] border-primary900 hover:bg-transparent hover:text-primary text-primary fontsize-m sm:w-[11.25rem]"
          >
            {textCancel}
          </Button>
        )}
        {textSubmit && (
          <Button
            className="w-[5.5rem] text-white fontsize-m sm:w-[11.25rem]"
            onClick={handleSubmit}
          >
            {textSubmit}
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
}
