# Soul Dining - Design System & Guidelines

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- lucide-react (icons)

## Project Structure (FSD Architecture)

프로젝트는 [Feature-Sliced Design](https://feature-sliced.design/) 아키텍처를 따릅니다.

```
src/
├── app/                    # App Layer - 앱 초기화 및 설정
│   ├── App.tsx             # 메인 앱 컴포넌트
│   ├── index.tsx           # 엔트리 포인트
│   └── styles/
│       └── index.css       # 전역 스타일 (Tailwind)
│
├── widgets/                # Widgets Layer - 독립적인 페이지 블록
│   ├── header/             # 네비게이션 헤더
│   ├── hero/               # 히어로 섹션
│   ├── about-section/      # 소개 섹션
│   ├── chef-section/       # 셰프 소개
│   ├── menu-section/       # 코스 메뉴 (탭 UI)
│   ├── reservation-cta/    # 예약 CTA
│   └── footer/             # 푸터
│
├── entities/               # Entities Layer - 비즈니스 엔티티
│   ├── dish/               # 요리 엔티티
│   │   ├── model/          # 타입 정의
│   │   └── ui/             # DishCard 컴포넌트
│   └── menu/               # 메뉴 엔티티
│       └── model/          # 타입, 상수 (LUNCH_COURSES 등)
│
└── shared/                 # Shared Layer - 공유 리소스
    ├── ui/                 # 재사용 UI (Card, SectionHeader)
    ├── lib/                # 유틸리티 훅 (useScrollPosition)
    ├── config/             # 설정값 (LINKS, IMAGES, RESTAURANT_INFO)
    └── types/              # 공통 타입 정의

index.html                  # HTML 템플릿
```

### Import Alias
`@/` 별칭이 `./src`를 가리킵니다:
```tsx
import { Card } from '@/shared/ui';
import { LINKS } from '@/shared/config';
import { Navigation } from '@/widgets/header';
```

## Color Palette (Tailwind stone)
- **Background light**: `stone-50`, `stone-100`
- **Background dark**: `stone-800`, `stone-900`
- **Text primary**: `stone-900`, `stone-800`
- **Text secondary**: `stone-600`, `stone-500`
- **Text muted**: `stone-400`
- **Borders**: `stone-200`, `stone-100`
- **Light text (on dark)**: `stone-50`, `stone-100`, `stone-200`

## Typography
- **Display/Logo**: `font-display tracking-widest` (large titles)
- **Headings**: `font-serif text-3xl md:text-4xl`
- **Subheadings**: `text-xs tracking-[0.2em] uppercase text-stone-500`
- **Body**: `font-light leading-relaxed text-stone-600`
- **Links/Labels**: `text-sm uppercase tracking-widest`

## Component Patterns

### Section Template
```tsx
import React from 'react';

const SectionName: React.FC = () => {
  return (
    <section id="section-id" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
            Subtitle
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">
            Section Title
          </h2>
        </div>

        {/* Content */}
        <div>
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default SectionName;
```

### Button Styles
```tsx
// Primary button (light bg)
<button className="bg-stone-900 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors">
  Button Text
</button>

// Primary button (dark bg)
<button className="bg-stone-100 text-stone-900 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">
  Button Text
</button>

// Outline button
<a className="px-6 py-2 border border-stone-800 text-stone-800 text-sm uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all">
  Link Text
</a>

// Text link with underline
<span className="inline-block border-b border-stone-800 pb-1 text-sm tracking-widest uppercase cursor-pointer hover:text-stone-500 hover:border-stone-500 transition-colors">
  Read More
</span>
```

### Two-Column Layout (Image + Text)
```tsx
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  {/* Image side */}
  <div className="grid grid-cols-2 gap-4">
    <img src="..." className="w-full h-[300px] object-cover rounded-sm md:translate-y-12" />
    <img src="..." className="w-full h-[300px] object-cover rounded-sm" />
  </div>

  {/* Text side */}
  <div className="space-y-8">
    <div className="space-y-2">
      <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
        Title Here
      </h2>
      <div className="w-12 h-1 bg-stone-800"></div>
    </div>
    <p className="text-stone-600 leading-loose font-light">
      Description text...
    </p>
  </div>
</div>
```

### Card/Box with Shadow
```tsx
<div className="bg-white p-8 md:p-12 shadow-xl shadow-stone-200/50 relative overflow-hidden">
  {/* Decorative inner border */}
  <div className="absolute inset-2 border border-stone-100 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* ... */}
  </div>
</div>
```

### Tab/Toggle Component
```tsx
<div className="inline-flex bg-stone-200 p-1 rounded-full">
  <button className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
    isActive ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
  }`}>
    <Icon size={16} /> Label
  </button>
</div>
```

### Footer Grid (3 columns)
```tsx
<footer className="bg-stone-900 text-stone-400 py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Column 1: Brand */}
    {/* Column 2: Contact */}
    {/* Column 3: Hours/Info */}
  </div>
</footer>
```

## Decorative Elements
- **Divider line**: `<div className="w-16 h-[1px] bg-stone-50/50 mx-auto"></div>`
- **Accent bar**: `<div className="w-12 h-1 bg-stone-800"></div>`
- **Background blur**: `<div className="absolute ... bg-stone-200/50 rounded-full blur-3xl pointer-events-none"></div>`

## Icons (lucide-react)
```tsx
import { Menu, X, MapPin, Phone, Instagram, Mail, Utensils, Moon } from 'lucide-react';

// Usage
<MapPin size={18} className="shrink-0" />
```

## Responsive Breakpoints
- Mobile first approach
- `md:` breakpoint (768px) for tablet/desktop
- Common patterns:
  - `text-3xl md:text-4xl`
  - `grid-cols-1 md:grid-cols-2`
  - `py-24 md:py-32`
  - `hidden md:flex`

## Animation & Transitions
- **Transition colors**: `transition-colors duration-300`
- **Transition all**: `transition-all duration-500 ease-in-out`
- **Hover opacity**: `hover:opacity-70`
- **Bounce animation**: `animate-bounce`

## Data Structure Pattern (FSD)

### 타입 정의 위치
- **Entity 타입**: `src/entities/{entity}/model/types.ts`
- **공통 타입**: `src/shared/types/index.ts`

```tsx
// src/entities/dish/model/types.ts
export interface Dish {
  id: string;
  name: string;
  description: string;
}

// src/entities/menu/model/types.ts
export interface Course {
  id: string;
  name: string;
  price: string;
  dishes: Dish[];
}
```

### 상수 정의 위치
- **Entity 데이터**: `src/entities/{entity}/model/constants.ts`
- **설정값**: `src/shared/config/index.ts`

```tsx
// src/entities/menu/model/constants.ts
export const LUNCH_COURSES: Course[] = [...];

// src/shared/config/index.ts
export const LINKS = { reservation: '...', instagram: '...' };
export const IMAGES = { hero: '...', chef: '...' };
export const RESTAURANT_INFO = { name: '...', phone: '...' };
```

## New Section/Widget Checklist (FSD)
1. 위젯 폴더 생성: `src/widgets/new-section/`
2. 컴포넌트 파일 생성:
   ```
   src/widgets/new-section/
   ├── ui/
   │   └── NewSection.tsx
   └── index.ts          # public API export
   ```
3. `React.FC` 타입 사용
4. 섹션 템플릿 적용: `id`, `py-24`, `max-w-7xl mx-auto px-6`
5. stone 컬러 팔레트 사용
6. 반응형 클래스 적용 (`md:` prefix)
7. `src/widgets/new-section/index.ts`에서 export
8. `src/app/App.tsx`에 import 및 추가
9. 필요시 `src/widgets/header`에 네비게이션 링크 추가

### Entity 추가 시
1. 엔티티 폴더 생성: `src/entities/new-entity/`
2. 구조:
   ```
   src/entities/new-entity/
   ├── model/
   │   ├── types.ts      # 타입 정의
   │   └── constants.ts  # 상수 데이터
   ├── ui/               # UI 컴포넌트 (선택)
   └── index.ts          # public API
   ```

## Brand Voice (Korean/English)
- Elegant, minimalist, sophisticated
- Korean text: 한글 사용 시 자연스럽고 품격있는 표현
- English: Concise, refined, modern
