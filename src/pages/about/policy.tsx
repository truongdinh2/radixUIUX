import React from 'react';
import { useTranslation } from 'react-i18next';

const Policy: React.FC = () => {
  const { t } = useTranslation('about');
  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      <div className="sm:container sm:px-10 sm:py-10 bg-white">
        <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
          {t('Regulations regarding the handling of personal information')}
        </h1>
        <div className="relative">
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 1 (Transactions of Products)')}
            </h2>
            <p className="text-black900 text-base">
              {t(
                'HI-Medic Corporation (hereinafter referred to as the "Company") (hereinafter referred to as the "Company") shall apply these Rules to the products and incidental items (hereinafter referred to as the "Products") sold by the Company. (hereinafter referred to as the "Company") shall apply these Rules to the products and incidental items sold by the Company (hereinafter referred to as the "Products").',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 2 (Handling of Personal Information for Transactions of Products)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'The Company shall properly obtain membership application forms, personal information (as defined in Article 3) of members and persons who use the Company\'s facilities or services (hereinafter referred to as "members, etc."), and personal information (as defined in Article 3) of members, etc. The Company shall collect, use, and provide personal information (as defined in Article 3) of Members, etc. The Company shall collect, use, provide, and register personal information (as defined in Article 3) of members, etc. (hereinafter referred to as "Members, etc.") for the purpose of providing services to Members, etc. through product transactions.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. The Company shall manage personal information of members and others in a strict manner to ensure the proper handling of personal information and to protect the privacy of members and others, as well as to maintain the accuracy and confidentiality of such information.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '3. The Company may outsource all or part of the handling of personal information in Article 3 to the extent necessary to achieve the purposes of use in Article 4, but the company to which such information is outsourced (hereinafter referred to as the "outsourced company") ) shall be guided and managed to ensure that, upon entering into a contract, they give due consideration to the proper handling of personal information of members, etc. and the protection of the privacy of members, etc.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '4. We shall supervise our employees who are allowed to handle personal information adequately and instruct them to manage personal information in a strict manner to maintain accuracy and confidentiality.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '5. Members and others shall enter into a contract with the Company with respect to the handling of their personal information upon agreeing to the terms and conditions set forth in these Rules and Regulations.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 3 (Collection, retention and use of personal information).')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'Members agree that in order for the Company to provide its benefits and services to Members and others and for the Company\'s marketing activities, the following personal information of Members and others (hereinafter collectively referred to as "Personal Information") will be collected, held and used by the Company with safeguards in place. Members agree that the Company may collect, retain, and use the following information (collectively, "Personal Information") of Members and others for the purpose of providing the Company\'s benefits and services to Members and for the Company\'s marketing activities.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '1) The name, gender, date of birth, address, telephone number, place of employment, family status, housing information, annual income status, answers to questionnaires, etc. (including any change in such information that the Company becomes aware of through notification from the Member after entering into this Agreement), which the Member has entered or declared on the Membership Application Form, Pledge Form, Membership Eligibility Screening Form, etc. The same shall apply hereinafter. The same shall apply hereinafter).',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(ii) Information regarding the date the product contract was formed, whether or not the product contract was formed, membership number, membership price, membership fee and other contract details, and whether or not the product contract was terminated.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(iii) Information regarding billing and payment status of membership fees, etc.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                'iv) Information collected under this Agreement or an agreement under the same name with a joint use company or other entity regarding the use of the facility, reservations made via the Internet, or other information regarding the use of the facility.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(v) Information regarding the items on documents issued by public institutions, such as residence certificates, collected from members and other persons, businesses, or public institutions through legal and proper methods.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '⑥ Information published in official gazettes, telephone directories, residential maps, etc.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('7) Information on medical examinations obtained from joint use companies, etc.')}
            </p>
            <p className="text-black900 text-base">
              {t(
                '⑧ Other information used by the Company to provide its benefits and services to its members and others and for its marketing activities.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 4 (Indication of Purpose of Use of Personal Information).')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'We use the personal information of members and others for the following purposes.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '1) Issuance of membership cards (including electromagnetic records of the same function and other substitutes), management of members, etc., and services, etc. (including services, etc. provided by joint use companies, etc. under this Agreement) in connection with this Agreement between the Company and members, etc. (ii) Provision of services, etc.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(ii) To provide information about products and services handled by the Company by sending promotional printed materials, sending e-mails, or by other means.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(iii) Marketing activities and product development conducted to increase the satisfaction of members, etc.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                'iv) To provide information on products, services, etc. handled by the Shared Use Companies, etc. (meaning those stipulated in Article 5) (iii) to provide information on products, services, etc. handled by the joint user company, etc. (meaning those stipulated in Article 5) by sending promotional printed materials, sending e-mails, or other methods from the Company.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 5 (Joint Use Companies of Personal Information, etc.)')}
            </h2>
            <p className="text-black900 text-base">
              {t(
                'For the purposes of use stipulated in Article 4, the Company shall enter into a joint use agreement with the Company\'s subsidiaries, affiliated companies, and medical institutions to which the Company consigns medical examinations (hereinafter referred to as "joint use companies, etc.") listed on the Company\'s website (https://www.himedic.jp/). The Company will enter into a joint use agreement with the Company\'s subsidiaries, affiliates, and medical institutions to which it outsources medical examinations (hereinafter referred to as the "Joint User Companies, etc."), with the Company being the party responsible for management, and will jointly use the personal information specified in Article 3.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 6 (Disclosure, Correction and Deletion of Personal Information).')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Members, etc. may request that the Company and the joint user companies, etc. listed in Article 5 disclose personal information about themselves. Requests for disclosure shall be accepted at the contact point indicated at the end of this document.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "2. In the case of the preceding paragraph, the member shall follow the procedures prescribed by the party to whom the request for disclosure is made, such as posting documents (driver's license, passport, etc.) to prove the member's identity. Any fees required for the procedure shall be borne by the member, etc.",
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '3. In the unlikely event that a request for disclosure reveals that the registered information is inaccurate or erroneous, the Company shall promptly respond to the request for correction or deletion. Requests for correction or deletion shall also be accepted at the contact point indicated at the end of this document.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 8 (Request to Cease Provision or Use of Personal Information).')}
            </h2>
            <p className="text-black900 text-base">
              {t(
                'Even if we use or provide personal information within the scope agreed upon in these rules, if a member requests that we stop using or providing such information, we will take measures to stop using such information at our company or providing it to a joint use company, etc., in accordance with Article 5. However, this does not apply to matters related to membership rights, newsletters, or enclosures when sending invoices, among the items provided to the joint users. In addition, members, etc. may not be able to receive the services prescribed by the Company as a result of the suspension of use.',
              )}
            </p>
          </div>
          <div className="">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 9 (Amendment of these Rules and Regulations).')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                "In the event of any changes to these rules, the Company shall notify members, etc. by publication in the newsletter, by mail, or by announcement on the Company's website, and the latest version shall be the one posted on the Company's website. In the event of any change to this policy, the latest version shall be posted on the Company's website.",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '1) Person responsible for management of personal information: President and Representative Director of HI-Medic, Inc.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">{t('ii) Contact: HI-Medic, Inc.')}</p>
            <p className="text-black900 text-base mb-4">
              {t('TEL:052-310-0787 FAX: 052-310-0792')}
            </p>
            <p className="text-black900 text-base mb-4">{t('[Joint use companies, etc.]')}</p>
            <p className="text-black900 text-base mb-4">
              {t(
                'Yamanakako Clinic, Medical Corporation; Hi-Medic Clinic WEST, Medical Corporation; Midtown Clinic, Medical Corporation; Trust Clinic, Medical Corporation; Resort Trust Corporation; Just Finance Corporation; Tokyo Midtown Medicine, Inc. Advanced Medical Care, Inc. and Swiss Perfection Japan, Inc.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">{t('More than.')}</p>
            <p className="text-black900 text-base">{t('Ver.3.0')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
