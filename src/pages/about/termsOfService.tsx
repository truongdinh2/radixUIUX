import React from 'react';
import { useTranslation } from 'react-i18next';

const TermOfService: React.FC = () => {
  const { t } = useTranslation('about');
  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      <div className="sm:container sm:px-10 sm:py-10 bg-white">
        <h1 className="text-xxl text-black900 border-black900 leading-[33.6px] pl-6 mb-8 border border-y-0 border-r-0 font-bold tracking-tight">
          {t('Terms of Service')}
        </h1>
        <div className="relative">
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 1 (Definition)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'The meanings of terms used in these Terms of Use (hereinafter referred to as the "Terms of Use") are as specified in the following items.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(1) "This application" refers to the smartphone application "smartHIMEDIC" provided by HIMEDIC Co., Ltd. (hereinafter referred to as "our company") on mobile information terminals such as smartphones owned by users.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(2) "Information related to this application" refers to various information that our company provides to a mobile information terminal such as a smartphone after the application is installed on the mobile information terminal owned by the user.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(3) "Service" refers to all services provided on this application.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(4) "Other Terms of Use, etc." Regardless of their name, these terms refer to provisions other than these Terms of Use that determine the terms of use of this service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(5) "User" means a person who has registered to use this application and whose registration has been approved by our company.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(6) "SMS Authentication" refers to the authentication information for the phone number registered by the User for the purpose of receiving the Service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(7) "Registered e-mail address" refers to the e-mail address information provided by the user to our company for the purpose of receiving this service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(8) "Password" means a string of characters used to identify the user by comparing it with the registered email address when using this application.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(9) "Biometric Authentication Function" This refers to a function that uses the user\'s biometric information registered on a biometric-enabled mobile information terminal to replace the registered email address and password.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(10) “Book Club” refers to the Grand Heidic Club operated and managed by our company.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '(11) “Right to receive medical examination” means the right to receive medical examination by this club.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 2 (Application of these Terms of Use)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t('1. In order to use this application, users must agree to these Terms of Use.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. These Terms of Use establish the terms of use of this service. In addition, other terms of use, etc. shall constitute a part of these Terms of Use.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('3. These Terms of Use apply to all actions of users when using this service.')}
            </p>
            <p className="text-black900 text-base">
              {t(
                '4. If the provisions of these Terms of Use differ from the provisions of other Terms of Use, etc., the provisions of the other Terms of Use, etc. shall take precedence and apply unless otherwise specified.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 3 (Change of these Terms of Use)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'Our company prohibits users from engaging in the acts specified in the following items.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(1) Transfer or lend this application to a third party.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(2) Use this application or this service for commercial purposes.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(3) Copying, modifying, etc. all or part of this application.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(4) Unauthorized use of this application or this service.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t("(5) Use the App or the Service with another person's account.")}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(6) Reverse engineering, decompiling, or disassembling this application.')}
            </p>
            <p className="text-black900 text-base">
              {t(
                '(7) In addition to the preceding items, use this App or this Service in a manner that our company deems to be prohibited.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 4 (Handling of personal information)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Our company handles users\' personal information in accordance with our "Regulations for the Handling of Personal Information" and in accordance with the provisions set forth in the following paragraphs.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. This application downloaded by the user will be given a unique serial number. Our company collects the following personal information of users for each serial number and registered email address.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(1) Information on date and time of use of mobile information terminals.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(2) Functions of this application used.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(3) Information related to this application displayed on the screen.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(4) User feedback information regarding information related to this application displayed on the screen.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(5) User registration information (name, date of birth, gender, address, email address, telephone number, club membership number).',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "(6) Information regarding the use of this club's medical services, etc. (medical institutions visited, course of treatment, date of treatment, results of treatment).",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(7) In addition to the items in the preceding paragraph, information related to the use of this application and this service',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '3. Our company will use the personal information of users listed in each item of the preceding paragraph for the following purposes.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "(1) To manage the user's membership card of this club (including electromagnetic records and other substitutes with the same function) and the right to receive medical treatment.",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t("(2) To manage users' reservations for the club's medical services, etc.")}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "(3) To provide users with the results of medical examinations provided by the Club's medical services, etc.",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(4) To improve this application and this service.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(5) In addition to the provisions set forth in the preceding items, for any acts necessary to provide this service (including services that will be newly added to this service; the same shall apply hereinafter in this article).',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(6) In addition to providing users with information regarding this service and this application, we will also provide product information, service information, and other business guidance or information of our company, the joint use corporations listed in the next section, and their affiliated corporations. For. However, if the user notifies us in advance or after the fact that he or she does not wish to provide information by the method prescribed by our company, we will not provide the information unless it is necessary to provide this service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(7) To collect and organize statistical information and provide it to third parties as statistical information after processing it so that individuals cannot be identified.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(8) For case studies and system development aimed at improving the quality of medical care and returning medical information to society.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '4. To the extent necessary to achieve the purposes set forth in each item of the preceding paragraph, our company will manage the following corporations (hereinafter referred to as "joint usage corporations") under appropriate management, with our company as the management manager. ) will jointly use the personal information of the users specified in Paragraph 2 of this article.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">{t('Joint usage corporation')}</p>
            <p className="text-black900 text-base mb-4">
              {t(
                'Yamanakako Medical Corporation Medical Corporation, HIMEDIC Clinic WEST Medical Corporation, Midtown Clinic Medical Corporation, Trust Clinic Medical Corporation, Keisokai Medical Corporation (Tokyo Radiology Clinic), National University Corporation Hospital of the University of Tokyo School of Medicine, National University Corporation Kyoto University Kyoto University Hospital, other affiliated medical institutions of this club, Shinkokai Medical Corporation, Resort Trust Co., Ltd., Just Finance Co., Ltd., Tokyo Midtown Medicine Co., Ltd., Advanced Medical Care Co., Ltd. Japan Swiss Perfection',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                'Users will be notified of additions, name changes, etc. of the above-mentioned shared usage corporations by posting them in this app, newsletters, etc., mailing them, notifying them at the time of their visit to the hospital, or publishing them on our website.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 5 (User registration and account)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Those who wish to use this application must download this application onto their own mobile information terminal.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. A person who has registered for use (hereinafter referred to as a "Registered User") becomes a user when the Company approves the registration for use.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '3. Each user shall have one account upon our approval of registration. One person may not hold multiple accounts unless approved by the Company.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "4. If there is a change in the user's registered information, the user must immediately follow the procedures prescribed by our company to make the change.",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '5. Users may not transfer or lend their account to a third party under any circumstances.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                "6. The use of the App and the Service and any other acts performed using the User's account (including use or acts performed by a third party without the user's involvement, such as by logging in) shall Regardless of whether the act is by the user himself/herself, it shall be deemed to be the use or act by the user, and the user shall bear all responsibility.",
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 6 (Rejection of User Registration)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'Our company may, at our discretion, refuse to approve user registration if the user falls under any of the following items.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(1) If you register with false registration information.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t("(2) If you have ever been disapproved of this club's qualification screening.")}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(3) If you have been expelled from this club.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(4) If you have ever been prohibited from using this application or this service.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t('(5) In other cases that our company deems inappropriate.')}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 7 (Suspension of use)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                'If the user wishes to suspend the use of this application or this service, the user shall apply for suspension of use to the Company using the method prescribed by the Company.',
              )}
              {t('Article 8 (Use prohibited)')}
              {t(
                'If a user falls under any of the following items, our company may, at our discretion, prohibit the user from using this application and this service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(1) If it is found that any of the items in Article 6 apply.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                "(2) If you damage our company's honor or trust, or if you interfere with our business.",
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t('(3) In the event of violation of these Terms of Use or other Terms of Use, etc.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '(4) If it is discovered that the right to undergo a medical examination that was transferred using this application has been further transferred to a third party.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '(5) If it is discovered that the application is used to buy or sell medical examination rights.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '(6) If it is discovered that the right to undergo a medical examination was obtained fraudulently using this application.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t('(7) In other cases that our company deems inappropriate.')}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 9 (Management of registered email address and password)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Users must always register a usable email address that belongs to their own management as a registered email address, and if the registered email address no longer belongs to their own management, the user must register an available email address that belongs to their management as a registered email address. You must change to another available email address.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. Users shall endeavor to prevent unauthorized use of their registered email address and password, and shall be fully responsible for their management.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '3. Our company and joint usage corporation will not be held responsible for any damages incurred by users due to theft, loss, leakage, etc. of registered email addresses or passwords.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 10 (Use of biometric authentication function)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Users who wish to use the biometric authentication function must first register their biometric information on their own mobile information terminal and register for biometric login according to the procedures established by our company. .',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. When the biometric authentication function of this application is used, the registered email address and password of the user who registered biometric information on the mobile information terminal will be deemed to have been entered.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '3. If the biometric information of multiple people is registered on the same mobile information device and the biometric authentication function of this application is used, our company will collect the registered email address and password of the user of the authenticated account. is assumed to have been entered.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                "4. Our company does not guarantee the reliability of matching the biometric information of the person using the biometric authentication function of this application with the biometric information of the user registered on the mobile information terminal. In the unlikely event that the biometric authentication function determines that the third party's biometric information matches the user's biometric information registered on the mobile information terminal, our company will not transfer the biometric information, etc. to the mobile information terminal. Authentication will be performed as biometric information of the user registered on the device, and the preceding two paragraphs will apply.",
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 11 (Preparation of usage environment)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Users shall, at their own responsibility and expense, properly maintain all equipment, software, and communication means necessary to use this App and this Service.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. Users shall take security measures such as preventing computer virus infection, unauthorized access, and information leaks, depending on their usage environment.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                "3. Our company does not have any involvement in the user's usage environment and does not assume any responsibility.",
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t("Article 12 (User's Responsibility)")}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Users shall use this application and this service at their own risk, and the Company and the joint usage corporation shall each be responsible for any and all actions taken using this application and this service, and their results. We do not assume any responsibility except in cases of gross negligence.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. If the user infringes the rights of another person or has a dispute with a third party through the use of this application and this service, the user must resolve the matter at his or her own responsibility and expense. The joint usage corporation shall not bear any responsibility unless there is intentional or gross negligence on the part of each party.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 13 (Changes to this application, this service, etc.)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. At our discretion, we may update or upgrade this application without prior notice or consent to users. In this case, such updated versions or upgraded versions will also be treated as the App, and these Terms of Use will also apply to them.',
              )}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. Our company may add, change, suspend, cancel, or terminate this application and this service at any time and for any reason at our convenience without prior notice or consent to users.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '3. Our company shall not be liable for any disadvantage or damage caused to users or third parties due to the preceding two paragraphs, regardless of the reason.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 14 (Usage fee)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. Registration and use of this application and this service are free of charge.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '2. Communication charges associated with the use of this application and this service shall be borne by the user.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 15 (Disclaimer)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. The Company and the Joint Usage Corporation shall not be held responsible for any loss of data due to natural disasters, failures in communication lines or computers, or any failures related to the use of this application and this service. The same applies if display speed decreases or failures occur due to excessive access or other unexpected factors.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                "2. Within this service, reservations for the Club's medical services, etc., and the viewing service for examination results are limited to the examination course specified by our company. Please note that in the medical examination results viewing service, the information provided by this app is not a substitute for the information provided by medical facilities, and does not guarantee the accuracy, completeness, usefulness, etc. of the information. In addition, the image information displayed on the screen in the medical examination result viewing service is provided for the purpose of confirming the user's identity, and is not provided for medical purposes.",
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t(
                'Article 16 (Response to acts that violate these Terms of Use or other Terms of Use, etc.)',
              )}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t(
                '1. If you discover any behavior by another user that violates these Terms of Use or other Terms of Use, please contact us.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                "2. Users may not object to our company's actions in violation of these Terms of Use or other Terms of Use.",
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 17 (Changes to these Terms of Use)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t('1. Our company may change these Terms of Use at any time at our discretion.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. If our company makes any changes to these Terms of Use, we will notify users in advance by posting them in this app, newsletter, etc., by mail, by notifying you at the time of your visit to the hospital, or by publishing them on our website.',
              )}
            </p>
            <p className="text-black900 text-base">
              {t(
                '3. If the User uses the Service after the changes to these Terms of Use take effect, the User will be deemed to have agreed to the changed Terms of Use.',
              )}
            </p>
          </div>
          <div className="pb-8">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 18 (Governing law and competent court)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t('1. The governing law of these Terms of Use shall be Japanese law.')}
            </p>
            <p className="text-black900 text-base mb-4">
              {t(
                '2. If a lawsuit arises between the user and our company regarding the use of this application and this service, the district court or summary court that has jurisdiction over the location of our head office or branch office shall be the court with exclusive jurisdiction of the first instance. will do.',
              )}
            </p>
          </div>
          <div className="">
            <h2 className="text-black900 font-medium text-lg mb-4">
              {t('Article 19 (Supplementary Provisions)')}
            </h2>
            <p className="text-black900 text-base mb-4">
              {t('These Terms of Use will come into effect from April 1, 2019.')}
            </p>
            <p className="text-black900 text-base mb-4">{t('Established on April 1, 2019')}</p>
            <p className="text-black900 text-base">{t('Revised on August 6, 2019')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermOfService;
