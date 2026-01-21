---
name: section-builder
description: Soul Dining 웹사이트에 새로운 섹션 컴포넌트를 생성합니다. "새 섹션 추가", "섹션 만들어줘", "갤러리 섹션", "이벤트 섹션" 등의 요청에 사용합니다.
allowed-tools: Read, Write, Edit, Glob
---

# Section Builder Skill

Soul Dining 디자인 시스템에 맞는 새 섹션 컴포넌트를 생성합니다.

## 생성 규칙

### 1. 파일 위치
- `/components/[SectionName].tsx`

### 2. 기본 구조
```tsx
import React from 'react';

const SectionName: React.FC = () => {
  return (
    <section id="section-id" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
            Subtitle Here
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">
            Section Title
          </h2>
        </div>

        {/* 콘텐츠 */}
        <div>
          {/* 섹션별 콘텐츠 */}
        </div>
      </div>
    </section>
  );
};

export default SectionName;
```

### 3. 컬러 규칙
- 밝은 배경: `bg-stone-50` 또는 `bg-stone-100`
- 어두운 배경: `bg-stone-800` 또는 `bg-stone-900`
- 밝은 배경 텍스트: `text-stone-900`, `text-stone-600`, `text-stone-400`
- 어두운 배경 텍스트: `text-stone-50`, `text-stone-100`, `text-stone-400`

### 4. 반응형
- 모바일 우선
- `md:` breakpoint 사용
- 예: `text-3xl md:text-5xl`, `grid-cols-1 md:grid-cols-2`

### 5. 섹션 타입별 템플릿

#### 갤러리 섹션
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id} className="group relative overflow-hidden">
      <img src={item.imageUrl} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-sm uppercase tracking-widest">{item.title}</span>
      </div>
    </div>
  ))}
</div>
```

#### CTA 섹션
```tsx
<section className="py-24 bg-stone-800 text-stone-100 text-center px-6">
  <div className="max-w-3xl mx-auto space-y-8">
    <h2 className="text-3xl md:text-5xl font-serif">Call to Action Title</h2>
    <p className="text-stone-400 font-light text-lg">
      Supporting description text here.
    </p>
    <button className="bg-stone-100 text-stone-900 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">
      Button Text
    </button>
  </div>
</section>
```

#### 이벤트/리스트 섹션
```tsx
<div className="space-y-8">
  {events.map((event) => (
    <div key={event.id} className="flex flex-col md:flex-row gap-6 p-6 bg-white shadow-lg shadow-stone-200/50">
      <div className="md:w-1/4 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-stone-500">{event.date}</span>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-serif text-stone-900 mb-2">{event.title}</h3>
        <p className="text-stone-600 font-light">{event.description}</p>
      </div>
    </div>
  ))}
</div>
```

### 6. 완료 후 작업
1. `App.tsx`에 import 추가
2. `<main>` 내 적절한 위치에 컴포넌트 배치
3. 필요시 `Navigation.tsx`에 링크 추가
4. 필요한 타입은 `types.ts`에 추가
5. 정적 데이터는 `constants.ts`에 추가
