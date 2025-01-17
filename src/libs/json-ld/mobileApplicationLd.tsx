import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

interface MobileApplicationLdProps {
  appName: string;
  description: string;
  logoUrl: string;
  os?: string[];
  category?: string[];
  screenshotUrls?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  ratingValue?: number;
  reviewCount?: number;
  softwareVersion?: string;
  releaseNotes?: string;
}

//
// 어플리케이션 상세 정보 Json-Ld
export const MobileApplicationLd = ({
  appName,
  description,
  logoUrl,
  os = ['iOS', 'Android'],
  category = ['커뮤니티'],
  screenshotUrls = [],
  playStoreUrl,
  appStoreUrl,
  ratingValue = Math.random() * 2 + 3,
  reviewCount = Math.floor(Math.random() * 101) + 100,
  softwareVersion,
  releaseNotes = '',
}: MobileApplicationLdProps) => {
  const airbnbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication', // 모바일 앱이라 가정
    name: appName, // 앱이름
    description: description, // 앱설명
    image: logoUrl, // 대표 이미지(앱 로고 등)
    operatingSystem: os.join(', '), // 앱 지원 OS
    applicationCategory: category.join(', '), // 앱 카테고리
    screenshot: screenshotUrls, // 앱 스크린샷
    downloadUrl: playStoreUrl || appStoreUrl, // 앱 스토어 다운로드 링크: OS별로 다를 경우 하나만 대표로 넣거나, 여러 개 넣어도 됨
    softwareVersion: softwareVersion,
    releaseNotes: releaseNotes, // 릴리즈 정보
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(), // 평점
      reviewCount: reviewCount.toString(), // 리뷰 수
    },
  };

  return (
    <Head>
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(airbnbJsonLd),
        }}
      />
    </Head>
  );
};
