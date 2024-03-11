import { ChangeEvent, ClipboardEvent, KeyboardEvent, useMemo, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface OTPCodeProps {
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
  isLoading?: boolean;
  onKeyDown?: (index: number, event: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (index: number, event: ClipboardEvent<HTMLInputElement>) => void;
}
export function OTPCode({
  inputValues,
  setInputValues,
  isLoading,
  onKeyDown,
  onChange,
  onPaste,
}: OTPCodeProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newValue = [...inputValues];
      if (index == 5) return inputRefs.current[0].focus();
      if (!newValue[index]) return;
      inputRefs.current[index + 1].focus();
      if (onKeyDown) onKeyDown(index, e);
    }
  };

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
    if (onChange) onChange(index, e);
  };

  const countInput = useMemo(() => {
    let input = 'grid-cols-6';
    if (inputValues?.length <= 0) return '';

    switch (inputValues?.length) {
      case 4:
        input = 'grid-cols-4';
        break;
      case 8:
        input = 'grid-cols-8';
        break;
      default:
        break;
    }
    return input;
  }, [inputValues]);

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
    if (onPaste) onPaste(index, e);
  };

  return (
    <div className={`grid grid-cols-${inputValues?.length} gap-1`}>
      {inputValues?.map((value, index) => (
        <Input
          key={index}
          ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
          value={value}
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          disabled={isLoading}
          className={cn(
            'border-black400 bg-form h-12 text-black900 px-4',
            countInput ? countInput : '',
          )}
          maxLength={1}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onChange={(e) => handleInputChange(index, e)}
          onPaste={(e) => handlePaste(index, e)}
        />
      ))}
    </div>
  );
}
