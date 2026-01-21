---
name: component-builder
description: Soul Dining 디자인 시스템에 맞는 재사용 가능한 UI 컴포넌트를 생성합니다. "버튼 컴포넌트", "카드 만들어줘", "모달 추가" 등의 요청에 사용합니다.
allowed-tools: Read, Write, Edit, Glob
---

# Component Builder Skill

Soul Dining 디자인 시스템에 맞는 재사용 가능한 컴포넌트를 생성합니다.

## 생성 규칙

### 1. 파일 위치
- `/components/ui/[ComponentName].tsx` (공통 UI)
- `/components/[ComponentName].tsx` (페이지 특화)

### 2. 컴포넌트 패턴

#### Button 컴포넌트
```tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}) => {
  const baseStyles = 'uppercase tracking-widest transition-all font-medium';

  const variants = {
    primary: 'bg-stone-900 text-white hover:bg-stone-800',
    outline: 'border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white',
    text: 'border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-sm tracking-[0.2em]'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
```

#### Card 컴포넌트
```tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  withBorder?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', withBorder = true }) => {
  return (
    <div className={`bg-white p-8 md:p-12 shadow-xl shadow-stone-200/50 relative overflow-hidden ${className}`}>
      {withBorder && (
        <div className="absolute inset-2 border border-stone-100 pointer-events-none"></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
```

#### SectionHeader 컴포넌트
```tsx
import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  centered = true
}) => {
  return (
    <div className={`mb-16 space-y-4 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-display text-stone-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
```

#### ImageCard 컴포넌트
```tsx
import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
  aspectRatio = 'landscape'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  return (
    <div className="group">
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {(title || description) && (
        <div className="mt-4 space-y-2">
          {title && <h3 className="text-lg font-serif text-stone-900">{title}</h3>}
          {description && <p className="text-sm text-stone-600 font-light">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
```

### 3. Props 규칙
- 항상 TypeScript interface 정의
- `className` prop으로 커스터마이징 허용
- 기본값은 가장 일반적인 사용 케이스로

### 4. 스타일 규칙
- Tailwind 클래스만 사용
- stone 컬러 팔레트 유지
- 트랜지션: `transition-all duration-300` 또는 `duration-500`

### 5. 아이콘 사용
```tsx
import { IconName } from 'lucide-react';
// size prop으로 크기 조절
<IconName size={18} className="shrink-0" />
```
