import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'İmplant Konya, Konya İmplant, Konya İmplant Fiyatları, İmplant Fiyatları Konya, İmplant Diş Fiyatları Konya, Diş İmplant Fiyatları Konya, İmplant Diş Yapımı Fiyatları Konya, İmplant Fiyatları 2020 Tekdiş Konya, Tek Diş İmplant Fiyatları 2020 Konya, Konya İmplant Diş Hekimi, İmplant Diş Fiyatları 2020 Konya, İsviçre İmplant Fiyatları, Vidalı Diş Fiyatları Konya, İmplant Fiyatları 2020 Konya, Konya İmplant Diş Fiyatları, Vidalı Diş Yapımı Fiyatları Konya, Vidalı Diş Fiyatları 2020 Konya, Bir İmplant Diş Kaç Para, En İyi İmplant Konya, Vidalı Diş Kaç Para, İmplant Köprü Diş Fiyatları Konya, Alt Çene İmplant Fiyatları Konya, İsviçre İmplant Fiyatı',
  title: 'DİŞ HEKİMİ ONUR KÜÇÜKKAĞNICI - Konya İmplant, Konya İmplant Fiyatları',
  url: 'onurkucukkagnici.org',
  author: 'DT. Onur Küçükkağnıcı',
  keywords: ['implant konya', 'konya implant', 'konya implant fiyatları', 'implant fiyatları konya', 'implant diş fiyatları konya', 'diş implant fiyatları Konya', 'implant diş yapımı fiyatları konya', 'implant fiyatları 2020 tekdiş Konya', 'tek diş implant fiyatları 2020 Konya', 'konya implant diş hekimi', 'implant diş fiyatları 2020 konya', 'isviçre implant fiyatları', 'vidalı diş fiyatları konya', 'implant fiyatları 2020 konya', 'konya implant diş fiyatları', 'vidalı diş yapımı fiyatları konya', 'vidalı diş fiyatları 2020 konya', 'bir implant diş kaç para', 'en iyi implant konya', 'vidalı diş kaç para', 'implant köprü diş fiyatları konya', 'alt çene implant fiyatları konya', 'isviçre implant fiyatı'],
  img: '',
  twitterId: '',
  facebookId: '@onurdishekimim',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="tr" />
    </Helmet>
  );
};

export default SEO;
