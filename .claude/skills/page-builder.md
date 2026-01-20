---
name: page-builder
description: Soul Dining 스타일의 완전한 새 페이지를 생성합니다. "새 페이지 만들어줘", "예약 페이지", "이벤트 페이지 추가" 등 전체 페이지 생성 요청에 사용합니다.
allowed-tools: Read, Write, Edit, Glob, Bash
---

# Page Builder Skill

Soul Dining 디자인 시스템에 맞는 완전한 새 페이지를 생성합니다.

## 페이지 생성 워크플로우

### 1. 페이지 구조 분석
새 페이지 요청 시 다음을 결정:
- 페이지 목적 (정보, 예약, 갤러리 등)
- 필요한 섹션들
- 데이터 요구사항

### 2. 파일 생성 순서

#### Step 1: 타입 정의 (필요시)
`types.ts`에 추가:
```tsx
export interface NewPageItem {
  id: string;
  title: string;
  description: string;
  // ... 필요한 필드
}
```

#### Step 2: 상수 데이터 (필요시)
`constants.ts`에 추가:
```tsx
export const NEW_PAGE_DATA: NewPageItem[] = [
  // ... 데이터
];
```

#### Step 3: 페이지 컴포넌트
새 페이지용 컴포넌트들 생성

### 3. 페이지 템플릿

#### 정보 페이지 (About, Story 등)
```tsx
import React from 'react';

const StoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="..." className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-display">소울의 이야기</h1>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Timeline or content blocks */}
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
```

#### 갤러리 페이지
```tsx
import React, { useState } from 'react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="pt-32 pb-16 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Gallery</p>
        <h1 className="text-4xl md:text-6xl font-display text-stone-900">갤러리</h1>
      </section>

      {/* Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-stone-200 p-1 rounded-full">
          {['all', 'food', 'interior', 'events'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery items */}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
```

#### 예약/폼 페이지
```tsx
import React, { useState } from 'react';

const ReservationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="pt-32 pb-16 text-center bg-stone-900 text-white">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Reservation</p>
        <h1 className="text-4xl md:text-6xl font-display">예약하기</h1>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <form className="space-y-8">
            {/* Input */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-stone-200 bg-white focus:border-stone-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Select */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500">Guests</label>
              <select className="w-full px-4 py-3 border border-stone-200 bg-white focus:border-stone-400 focus:outline-none transition-colors">
                <option>2 guests</option>
                <option>4 guests</option>
                <option>6 guests</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-stone-900 text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors"
            >
              Request Reservation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;
```

### 4. 라우팅 (SPA인 경우)
react-router-dom 사용 시:
```tsx
// App.tsx 또는 Router 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/reservation" element={<ReservationPage />} />
</Routes>
```

### 5. 네비게이션 업데이트
`Navigation.tsx`에 링크 추가:
```tsx
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '/gallery' },  // 새 페이지
  { name: 'Reservation', href: '/reservation' },
];
```

### 6. 체크리스트
- [ ] 타입 정의 완료
- [ ] 상수 데이터 추가
- [ ] 페이지 컴포넌트 생성
- [ ] 라우팅 설정 (필요시)
- [ ] 네비게이션 링크 추가
- [ ] 반응형 확인 (md: breakpoint)
- [ ] stone 컬러 팔레트 준수
- [ ] 폰트/타이포그래피 일관성
