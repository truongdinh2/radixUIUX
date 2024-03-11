import { ClipboardEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function SMSVerifyCode() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation('account');
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const regex = /[^0-9]/;
    if (regex.test(value)) return;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // Move focus to the next input if there is a value
    if (value && index < inputValues.length - 1) {
      const nextInput: HTMLInputElement = inputRefs.current[index + 1];
      nextInput.focus();
    }
  };

  const handlePaste = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.clipboardData.getData('text');
    const regex = /[^0-9]/;
    if (regex.test(value)) return;

    if (!value) return;
    if (value && value?.trim()?.length == 1) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);
    }
    const newValue = [...inputValues];
    for (let indexValue = 0; indexValue < newValue?.length; indexValue++) {
      const arrValue = value?.trim()?.split('');
      newValue[indexValue] = arrValue[indexValue] || '';
    }
    setInputValues(newValue);
    inputRefs.current[0].focus();
  };

  const onKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newValue = [...inputValues];
      if (index == 5) return inputRefs.current[0].focus();
      if (!newValue[index]) return;
      inputRefs.current[index + 1].focus();
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-[3.75rem]">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-10 w-full mx-auto py-10 px-5 bg-white sm:p-10 sm:w-[35rem] items-start">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-black900 fontsize-m">
                {t(
                  'After receiving the SMS, please enter the 6-digit verification number provided',
                )}
              </p>
              <div className="w-[18.75rem] mx-auto">
                <Label htmlFor="tel" className="fontsize-s font-medium text-black900">
                  認証番号
                </Label>
                <div className="grid grid-cols-6 gap-1">
                  {inputValues?.map((value, index) => (
                    <Input
                      key={index}
                      ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
                      value={value}
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="border-black400 bg-form h-12 text-black900 px-4 focus:"
                      maxLength={1}
                      onKeyDown={(e) => onKeyDown(index, e)}
                      onChange={(e) => handleInputChange(index, e)}
                      onPaste={(e) => handlePaste(index, e)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <Button
                disabled={isLoading}
                className="fontsize-m w-full bg-primary hover:bg-primary"
                type="button"
              >
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                {t('Next')}
              </Button>
              <div className="fontsize-xs font-normal text-black700">
                <p>
                  {t(
                    'If you do not receive the verification number, please return to the previous screen and resend the SMS',
                  )}
                </p>
                <p>
                  {t('If authentication fails, please call ')}
                  <Link
                    to="/"
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'p-0 text-link h-0 fontsize-xs font-normal',
                    )}
                  >
                    {t('inquiry')}
                  </Link>
                  {t('by phone')}
                </p>
              </div>
            </div>
            <Link
              to="/auth/policy"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'p-0 text-link h-auto fontsize-m font-normal -mt-5 items-start',
              )}
            >
              &lt; {t('Back')}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
