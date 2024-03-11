import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useValidation = () => {
  const { t } = useTranslation('validation');
  const emailFormat = z.string().email({ message: t('email.format') });
  const emailBlankFront = z.string().email({ message: t('email.blankFront') });
  const emailBlankBack = z.string().email({ message: t('email.blankBack') });
  const emailMatch = z.string().email({ message: t('email.match') });
  const maxLength = (num: number) =>
    z.string().max(num, { message: t('maxLength', { length: num }) });
  const textRequired = () => z.string().min(1, { message: t('textRequired') });
  return {
    textRequired,
    emailFormat,
    emailBlankFront,
    emailBlankBack,
    emailMatch,
    maxLength,
  };
};
