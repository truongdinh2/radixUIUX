import { useTranslation } from 'react-i18next';
import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const memberSchema = () => {
  const { t } = useTranslation('registerMember');
  const schema = z.object({
    memberID: z.string({
      required_error: t('Please enter non-blank characters'),
    }),
  });

  return {
    schema,
  };
};
