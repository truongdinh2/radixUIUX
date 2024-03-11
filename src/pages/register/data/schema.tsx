import { useTranslation } from 'react-i18next';
import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const registerMemberSchema = () => {
  const { t } = useTranslation('registerMember');
  const schema = z.object({
    memberID: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    himedicID: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    transferCode: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    fullName: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    nameKana: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    birthday: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    gender: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    question: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
    date: z.date({
      required_error: t('Please enter non-blank characters'),
    }),
  });

  return {
    schema,
  };
};
