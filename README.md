# Soul Dining (소울 다이닝)

미슐랭 1스타 한식 파인다이닝 레스토랑 **소울 다이닝** 웹사이트 프로젝트입니다.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (빌드 도구)
- **Tailwind CSS** (스타일링)
- **lucide-react** (아이콘)

## Project Structure

```
soul-dining/
├── components/
│   ├── ui/                 # 재사용 UI 컴포넌트
│   │   ├── Card.tsx
│   │   └── SectionHeader.tsx
│   ├── Navigation.tsx      # 헤더 네비게이션
│   ├── Hero.tsx            # 히어로 섹션
│   ├── About.tsx           # 소개 섹션
│   ├── ChefSection.tsx     # 셰프 소개
│   ├── MenuSection.tsx     # 코스 메뉴
│   ├── ReservationCTA.tsx  # 예약 CTA
│   └── Footer.tsx          # 푸터
├── hooks/
│   └── useScrollPosition.ts
├── constants.ts            # 상수 (메뉴, 이미지 URL, 링크)
├── types.ts                # TypeScript 타입 정의
├── App.tsx
└── index.tsx
```

## Run Locally

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## Restaurant Info

- **주소**: 서울 용산구 신흥로26길 35 바나힐 지하1층
- **전화**: 0507-1335-7685
- **영업시간**:
  - Lunch 12:00 - 15:00 (L.O 13:00)
  - Dinner 18:00 - 22:00 (L.O 19:30)
- **휴무**: 매주 화요일, 수요일
- **예약**: [Catchtable](https://app.catchtable.co.kr/ct/shop/souldining)
- **Instagram**: [@souldining_seoul](https://www.instagram.com/souldining_seoul)

## Features

- 반응형 디자인 (모바일/데스크톱)
- 스크롤 기반 네비게이션 효과
- Lunch/Dinner 코스 메뉴 탭
- 캐치테이블 예약 연동
- 접근성 (ARIA labels, semantic HTML)

## Design System

프로젝트의 디자인 시스템은 [CLAUDE.md](./CLAUDE.md)에 문서화되어 있습니다.

- **Color**: Tailwind stone 팔레트
- **Typography**: font-display, font-serif
- **Components**: Card, SectionHeader 등 재사용 컴포넌트
