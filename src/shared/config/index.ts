// 외부 링크
export const LINKS = {
  reservation: 'https://app.catchtable.co.kr/ct/shop/souldining',
  instagram: 'https://www.instagram.com/souldining_seoul?igsh=cWlrOWV5M3AzdHU5',
};

// 레스토랑 정보
export const RESTAURANT_INFO = {
  name: 'Soul Dining',
  nameKo: '소울 다이닝',
  address: '서울 용산구 신흥로26길 35 바나힐 지하1층',
  addressEn: '35, Sinheung-ro 26-gil, Yongsan-gu, Seoul, B1F Banahill',
  phone: '0507-1335-7685',
  email: 'reservation@souldining.kr',
  hours: {
    lunch: '12:00 PM - 3:00 PM',
    dinner: '6:00 PM - 10:00 PM',
    breakTime: '3:00 PM - 6:00 PM',
    lastOrder: {
      lunch: '1:00 PM',
      dinner: '7:30 PM',
    },
  },
  closedDays: '매주 화요일, 수요일 휴무',
  closedDaysEn: 'Closed on Tuesdays & Wednesdays',
};

// 이미지 URL 상수
export const IMAGES = {
  logo: '/images/soul.png',
  hero: '/images/main.jpg',
  about: {
    cooking: 'https://picsum.photos/600/800?random=201',
    interior: 'https://picsum.photos/600/800?random=202',
  },
  chefs: {
    kimHeeeun: '/images/chefs/김희은.jpg',
    yoonDaehyun: '/images/chefs/윤대현.jpg',
  },
  story: {
    jang: 'https://picsum.photos/600/400?random=301',
    ingredients: 'https://picsum.photos/600/400?random=302',
    ceramics: 'https://picsum.photos/600/400?random=303',
  },
};

// Soil to Soul 스토리 콘텐츠
export const STORY_CONTENT = {
  jang: {
    title: '장인의 손끝에서',
    subtitle: '기순도 명인',
    description: '3대를 이어온 전통 장 명인 기순도. 100년 된 종가의 씨간장과 전통 방식으로 빚은 된장, 고추장이 소울 다이닝의 깊은 맛을 완성합니다.',
  },
  ingredients: {
    title: '모든 것은 토양(Soil)으로부터',
    subtitle: '제철 식자재',
    description: '전국 각지에서 엄선한 제철 식자재. 강원의 산나물부터 제주의 해산물까지, 자연이 선사하는 최고의 재료만을 담습니다.',
  },
  ceramics: {
    title: '그릇, 요리의 또 다른 언어',
    subtitle: '도자기 장인',
    description: '음식을 담는 그릇도 요리의 일부입니다. 국내 도예 장인들과의 협업으로 탄생한 그릇이 한 끼의 경험을 더욱 특별하게 만듭니다.',
  },
};
