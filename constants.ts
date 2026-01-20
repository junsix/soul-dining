import { CourseMenu, MenuType, Dish } from './types';

// Helper to generate a placeholder image url consistently based on id
const getImg = (id: number) => `https://picsum.photos/800/600?random=${id}`;

export const DISHES: Record<string, Dish> = {
  welcome: {
    id: 'welcome',
    name: '맞이음식',
    description: '코스의 시작 맞이음식입니다. 한국의 궁중 음식 중 하나인 새우선을 준비했습니다. 다진 새우를 부드럽게 쪄낸 뒤에 향긋한 냉이를 넣어 만들었습니다. 같이 준비한 소스는 사워크림과 애호박으로 만든 퓨레 그리고 바질 오일입니다.',
    note: '화분에서 나무 스틱과 음식을 같이 빼내어 소스를 듬뿍 찍어드시면 됩니다.',
    imageUrl: getImg(1)
  },
  persimmon: {
    id: 'persimmon',
    name: '홍시설화',
    description: '홍시를 메인으로 만든 소스와 눈이 내리는 겨울에 피어나는 꽃을 모티브로 만들었습니다. 안쪽엔 표고버섯, 미나리, 숙주, 파프리카, 소고기로 만든 냉채를 올방개묵으로 감싸내고 위쪽은 단호박 칩과 머스터드 씨드입니다.',
    note: '드실 때는 단호박 칩을 부숴 모든 재료를 같이 즐기시면 됩니다.',
    imageUrl: getImg(2)
  },
  abalone: {
    id: 'abalone',
    name: 'Mrs. 김전복',
    description: '김희은 셰프님께서 가장 좋아하는 재료 중 김과 전복을 이용해서 만든 디쉬입니다. 전복은 다시마와 무로 감싸 부드럽게 찐 후, 타임 허브로 훈연해 준비했습니다. 전복 오른쪽 파도 모양의 소스는 마스카포네 크림치즈와 곱창 김을 사용해 만든 시그니처 소스입니다. 반대쪽에는 불향을 입힌 백목이버섯이 있으며 레몬즙을 넣어 산미를 더했습니다.',
    note: '전복은 세 조각으로 커팅되어 있으니 드실땐 첫 조각은 깨소금 두 번째 조각은 소스, 마지막은 백목이 버섯과 함께 즐기시면 되겠습니다.',
    imageUrl: getImg(3)
  },
  mushrooms: {
    id: 'mushrooms',
    name: '7가지 버섯',
    description: '부드럽게 만든 계란찜과 일곱 가지 버섯(트러플, 포르치니, 느타리, 만가닥, 꽃송이, 표고, 팽이)입니다. 버섯 일곱 개의 조리법은 전부 다르게 사용했으며 부드러운 계란찜 속에는 트러플, 포르치니, 표고 버섯이 인퓨즈되어 풍미를 더했습니다.',
    imageUrl: getImg(4)
  },
  potato_pancake: {
    id: 'potato_pancake',
    name: '감자전',
    description: '이탈리아의 뇨끼에서 영감을 받아 한국식으로 재해석한 요리입니다. 강원도 제철 감자와 레지아노 치즈로 만든 반죽을 돼지기름에 고소하게 튀겼습니다. 아래에는 후추와 토종 들깨로 만든 아이올리 소스, 위에는 폴렌타칩과 사과, 무, 마늘쫑으로 만든 렐리쉬가 있습니다.',
    note: '드실 때는 폴렌타칩을 살짝 눌러 렐리쉬가 감자전 표면에 잘 퍼지도록 해서 함께 드시면 좋습니다.',
    imageUrl: getImg(5)
  },
  jeungpyeon: {
    id: 'jeungpyeon',
    name: '구운 증편 (별미 진미)',
    description: '막걸리를 발효시켜 만든 술떡, 술빵입니다. 구운 양파 버터를 시작으로 흑임자와 감태 버터를 준비했습니다.',
    note: '드실 때는 증편 아래쪽에 있는 피스타치오와 함께, 옆에 준비된 세 가지 버터를 기호에 맞게 곁들여 드시면 됩니다.',
    imageUrl: getImg(6)
  },
  pithivier: {
    id: 'pithivier',
    name: '우엉 피티비에',
    description: '프랑스의 파이를 뜻하는 피티비에를 소울만의 방식으로 재해석했습니다. 겉면은 조린 우엉을 사용해 파이의 형태를 만들고 브륄레를 입혔습니다. 속재료는 포항초, 깻잎 관자 무스, 감태, 제철 생선, 팽이버섯입니다. 소스는 버터와 화이트와인 감태와 된장으로 만든 뵈르블랑입니다.',
    imageUrl: getImg(7)
  },
  duck: {
    id: 'duck',
    name: "맛간장 'Duck'에",
    description: '오리의 두 가지 부위를 사용했습니다. 아래쪽은 다리살로, 뼈를 제거한 뒤 롤라드 형식으로 말아 맛간장에 저온 조리했습니다. 위쪽은 드라이 에이징한 가슴살로, 껍질 쪽에 직접 만든 금귤청을 발라 볶은 메밀과 치아씨드를 올려 식감을 더했습니다.',
    imageUrl: getImg(8)
  },
  rib_patty: {
    id: 'rib_patty',
    name: '8.5 양떡갈비',
    description: '양의 갈비뼈에 붙어있는 늑간살과 갈비살을 다져 낸 뒤, 한국식 재료인 마늘, 파, 표고버섯을 함께 다져서 구운 떡갈비 입니다. 흑마늘과 레드 와인을 이용해 만든 소스와 샐러리악과 더덕을 사용하여 만든 퓨레를 같이 준비했습니다.',
    imageUrl: getImg(9)
  },
  beef_bansang: {
    id: 'beef_bansang',
    name: '한우 반상',
    description: '숯불에 구운 채끝살과 간장소스를 발라서 구운 살치살안에 참깨 겨자소스에 버무린 영양부추를 넣었습니다. 위로는 피클링한 쌈채소를 시작으로 로메스코 쌈장과 청귤, 더덕, 달래로 만든 무침입니다. 갈치 속젓 솥밥과 함께 제공됩니다.',
    note: '고기를 드시며 반찬과 솥밥을 같이 즐기시면 됩니다.',
    imageUrl: getImg(10)
  },
  noodles: {
    id: 'noodles',
    name: '후식국수',
    description: '고기를 먹고 면을 먹는 한국의 문화를 코스에 표현했습니다. 후추를 사용해 제면한 생면과 차돌박이 그리고 한국의 나주곰탕을 베이스로 만든 육수입니다.',
    note: '부추 오일과 함께 드시면 되겠습니다.',
    imageUrl: getImg(11)
  },
  gukbap: {
    id: 'gukbap',
    name: '국밥',
    description: '한국의 소울푸드인 국밥을 소울만의 방식으로 표현했습니다. 찰보리밥과 이탈리아의 생면 중 하나인 말룰레듀스, 그리고 한국의 나주곰탕 베이스의 육수입니다.',
    note: '부추 오일과 함께 드시면 되겠습니다.',
    imageUrl: getImg(12)
  },
  black_white: {
    id: 'black_white',
    name: '흑 과 백',
    description: '올리브로 만든 아이스크림이며 아래에 레몬파우더와 올리브로 만든 크럼블과 함께 캐비어와 트러플 칩을 올려 마무리했습니다.',
    note: '약 4방울 스페인 알베퀴나 엑스트라 버진 올리브오일과 한국의 저온 압착 들기름을 블랜딩한 오일입니다.',
    imageUrl: getImg(13)
  },
  ceramics: {
    id: 'ceramics',
    name: '도자기',
    description: '잣으로 만든 무스안에 조청 카라멜과 바삭한 헤이즐넛 크루스티앙을 넣은 무스케이크입니다. 나뭇가지를 표현한 커피칩 그리고 망고, 패션후르츠, 레몬, 레드 오렌지를 사용해 만든 겔입니다.',
    note: '드실 때 무스케이크와 커피칩 겔을 같이 드시면 좋습니다.',
    imageUrl: getImg(14)
  },
  kkodurami: {
    id: 'kkodurami',
    name: '꼬두람이',
    description: '꼬두람이는 순우리말로 막내, 마지막, 꼬리라는 뜻을 지니고 있는 단어입니다. 수제 호두 정과와 팥 가나슈로 속을 채운 타르트, 그리고 제철 딸기를 올리고 생강청, 패션후르츠가나슈로 속을 채운 파블로바입니다.',
    imageUrl: getImg(15)
  }
};

export const MENUS: CourseMenu[] = [
  {
    type: MenuType.LUNCH,
    title: 'Lunch Course',
    price: '₩ 120,000',
    courses: [
      DISHES.welcome,
      DISHES.persimmon,
      DISHES.abalone,
      DISHES.mushrooms,
      DISHES.potato_pancake,
      DISHES.duck,
      DISHES.beef_bansang,
      DISHES.noodles,
      DISHES.kkodurami
    ]
  },
  {
    type: MenuType.DINNER,
    title: 'Dinner Course',
    price: '₩ 180,000',
    courses: [
      DISHES.welcome,
      DISHES.persimmon,
      DISHES.abalone,
      DISHES.mushrooms,
      DISHES.jeungpyeon,
      DISHES.pithivier,
      DISHES.duck,
      DISHES.rib_patty,
      DISHES.beef_bansang,
      DISHES.gukbap,
      DISHES.black_white,
      DISHES.ceramics,
      DISHES.kkodurami
    ]
  }
];
