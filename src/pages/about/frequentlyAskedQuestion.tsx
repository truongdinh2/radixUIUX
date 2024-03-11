import React from 'react';

import FaqDetail from './components/FaqDetail';
import FAQList from './components/FaqList';

const FrequentlyAskedQuestions: React.FC = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const faqs = [
    {
      question: 'smartHIMEDICについて',
      answerList: [
        {
          id: 1,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 2,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 3,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '利用登録・ログインについて',
      answerList: [
        {
          id: 4,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 5,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 6,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: 'スマート会員証・会員番号について',
      answerList: [
        {
          id: 7,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 8,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 9,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 10,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '予約について',
      answerList: [
        {
          id: 11,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 12,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 13,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 14,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '受診権について',
      answerList: [
        {
          id: 15,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 16,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 17,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 18,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '予約について',
      answerList: [
        {
          id: 19,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 20,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 21,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 22,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '結果レポートについて',
      answerList: [
        {
          id: 23,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 24,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 25,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 26,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: 'その他',
      answerList: [
        {
          id: 27,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 28,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 29,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 30,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: '各施設へのお問い合わせ先',
      answerList: [
        {
          id: 31,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 32,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 33,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 34,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
    {
      question: 'アプリ内文言のご説明',
      answerList: [
        {
          id: 35,
          title: '「smartHIMEDIC」が動作するOSはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 36,
          title: '「smartHIMEDIC」とはなんですか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 37,
          title: '「smartHIMEDIC」はタブレット端末でも使えますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
        {
          id: 38,
          title: '「smartHIMEDIC」の利用に費用はかかりますか。',
          description:
            'グランドハイメディック倶楽部の公式アプリです。予約・変更・キャンセルのリクエスト、結果レポート（検診結果）の閲覧が可能です。',
        },
      ],
    },
  ];

  const onShowDetailFaq = (idFaq: number | null) => {
    setActiveFaq(idFaq);
  };

  return (
    <section className="fontsize-m bg-white sm:bg-transparent px-5 py-10">
      {activeFaq !== null ? (
        <FaqDetail faqs={faqs} onShowDetailFaq={onShowDetailFaq} currentIdFaq={activeFaq} />
      ) : (
        <FAQList faqs={faqs} onShowDetailFaq={onShowDetailFaq} />
      )}
    </section>
  );
};

export default FrequentlyAskedQuestions;
