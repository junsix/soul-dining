---
name: code-guidelines
description: 10년차 프론트엔드 개발자의 관점에서 유지보수성과 확장성을 위한 코드 가이드라인을 적용합니다. 코드 리뷰, 리팩토링, 새 기능 개발, 코드 품질 개선 요청 시 자동으로 적용됩니다.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Frontend Code Guidelines

10년차 프론트엔드 개발자 관점의 유지보수성 & 확장성 가이드라인

---

## 1. 프로젝트 구조

### 권장 폴더 구조
```
src/
├── components/
│   ├── ui/              # 재사용 가능한 기본 UI (Button, Card, Input)
│   ├── layout/          # 레이아웃 컴포넌트 (Header, Footer, Sidebar)
│   └── features/        # 기능별 컴포넌트 (Menu, Reservation)
├── hooks/               # 커스텀 훅
├── utils/               # 유틸리티 함수
├── types/               # TypeScript 타입/인터페이스
├── constants/           # 상수, 설정값
├── services/            # API 호출, 외부 서비스
├── styles/              # 전역 스타일 (필요시)
└── assets/              # 이미지, 폰트 등 정적 자원
```

### 파일 배치 원칙
- **단일 책임**: 하나의 파일은 하나의 역할만
- **Co-location**: 관련 파일은 가까이 배치
- **Feature-based**: 규모가 커지면 기능 단위로 그룹화

```
# Bad: 타입별로 분리
/components/Button.tsx
/styles/Button.css
/tests/Button.test.tsx

# Good: 기능 단위로 co-locate
/components/Button/
  ├── Button.tsx
  ├── Button.styles.ts (필요시)
  ├── Button.test.tsx
  └── index.ts
```

---

## 2. 네이밍 컨벤션

### 파일명
| 유형 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `MenuSection.tsx` |
| 훅 | camelCase, use 접두사 | `useScrollPosition.ts` |
| 유틸리티 | camelCase | `formatPrice.ts` |
| 상수 | camelCase 또는 UPPER_SNAKE | `menuItems.ts`, `API_ENDPOINTS.ts` |
| 타입 | PascalCase | `MenuItem.types.ts` |

### 변수/함수명
```tsx
// 컴포넌트: PascalCase
const MenuSection: React.FC = () => {};

// 함수: camelCase, 동사로 시작
const handleClick = () => {};
const formatPrice = (price: number) => {};
const fetchMenuData = async () => {};

// 불리언: is/has/can/should 접두사
const isLoading = true;
const hasError = false;
const canSubmit = true;

// 상수: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;
const API_BASE_URL = 'https://...';

// 이벤트 핸들러: handle 접두사
const handleSubmit = () => {};
const handleInputChange = () => {};

// 콜백 props: on 접두사
interface Props {
  onSubmit: () => void;
  onChange: (value: string) => void;
}
```

### 컴포넌트 네이밍
```tsx
// 명확하고 구체적으로
// Bad
const Item = () => {};
const List = () => {};

// Good
const MenuItem = () => {};
const MenuList = () => {};
const ReservationForm = () => {};
```

---

## 3. 컴포넌트 설계 원칙

### 3.1 단일 책임 원칙 (SRP)
```tsx
// Bad: 너무 많은 역할
const MenuSection = () => {
  // 데이터 fetching
  // 필터링 로직
  // 렌더링
  // 모달 상태 관리
  // 폼 처리
};

// Good: 역할 분리
const MenuSection = () => {
  const { menus, isLoading } = useMenuData();
  const { filter, setFilter } = useMenuFilter();

  return (
    <section>
      <MenuFilter value={filter} onChange={setFilter} />
      <MenuList items={menus} isLoading={isLoading} />
    </section>
  );
};
```

### 3.2 컴포넌트 크기 가이드
- **150줄 이하** 권장
- 150줄 초과 시 분리 고려
- JSX return문은 **50줄 이하** 권장

### 3.3 Props 설계
```tsx
// 1. Props 인터페이스는 컴포넌트 바로 위에
interface MenuItemProps {
  item: MenuItem;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

// 2. 선택적 props에는 기본값 제공
const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isSelected = false,
  onSelect
}) => {};

// 3. Props가 5개 초과시 객체로 그룹화 고려
// Bad
<UserCard
  name={name}
  email={email}
  avatar={avatar}
  role={role}
  department={department}
  isActive={isActive}
/>

// Good
<UserCard user={user} isActive={isActive} />
```

### 3.4 Composition 패턴
```tsx
// Compound Components로 유연성 확보
<Card>
  <Card.Header>제목</Card.Header>
  <Card.Body>내용</Card.Body>
  <Card.Footer>
    <Button>확인</Button>
  </Card.Footer>
</Card>

// children 활용
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children
}) => (
  <section className="py-24">
    <h2>{title}</h2>
    {children}
  </section>
);
```

---

## 4. 상태 관리

### 4.1 상태 배치 원칙
```
로컬 상태 (useState)
  ↓ 여러 컴포넌트가 공유?
컴포넌트 합성 / Props drilling
  ↓ 너무 깊은 drilling?
Context API
  ↓ 복잡한 상태 로직?
상태 관리 라이브러리 (Zustand, Jotai 등)
```

### 4.2 상태 최소화
```tsx
// Bad: 파생 가능한 상태를 별도로 관리
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0);
const [hasItems, setHasItems] = useState(false);

// Good: 파생 상태는 계산
const [items, setItems] = useState([]);
const itemCount = items.length;
const hasItems = items.length > 0;
```

### 4.3 커스텀 훅으로 로직 분리
```tsx
// hooks/useMenuFilter.ts
export const useMenuFilter = (initialItems: MenuItem[]) => {
  const [filter, setFilter] = useState<MenuType | 'all'>('all');

  const filteredItems = useMemo(() => {
    if (filter === 'all') return initialItems;
    return initialItems.filter(item => item.type === filter);
  }, [initialItems, filter]);

  return { filter, setFilter, filteredItems };
};

// 사용
const MenuSection = () => {
  const { filter, setFilter, filteredItems } = useMenuFilter(menuItems);
};
```

---

## 5. TypeScript 활용

### 5.1 타입 정의 원칙
```tsx
// 1. Interface vs Type
// - Interface: 객체 형태, 확장 가능
// - Type: 유니온, 인터섹션, 복잡한 타입

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

type MenuType = 'lunch' | 'dinner';
type MenuState = 'loading' | 'success' | 'error';

// 2. 확장 가능한 설계
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface MenuItem extends BaseEntity {
  name: string;
  price: number;
}
```

### 5.2 타입 안전성
```tsx
// 1. any 사용 금지, unknown 사용
// Bad
const data: any = fetchData();

// Good
const data: unknown = fetchData();
if (isMenuItem(data)) {
  // type-safe하게 사용
}

// 2. Non-null assertion (!) 최소화
// Bad
const item = items.find(i => i.id === id)!;

// Good
const item = items.find(i => i.id === id);
if (!item) throw new Error('Item not found');

// 3. 유니온 타입 활용
type ApiResponse<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

### 5.3 제네릭 활용
```tsx
// 재사용 가능한 타입
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

const List = <T,>({ items, renderItem, keyExtractor }: ListProps<T>) => (
  <ul>
    {items.map(item => (
      <li key={keyExtractor(item)}>{renderItem(item)}</li>
    ))}
  </ul>
);
```

---

## 6. 성능 최적화

### 6.1 불필요한 리렌더링 방지
```tsx
// 1. React.memo 적절히 사용
const MenuItem = React.memo<MenuItemProps>(({ item, onSelect }) => {
  return <div onClick={() => onSelect(item.id)}>{item.name}</div>;
});

// 2. useCallback으로 함수 메모이제이션
const handleSelect = useCallback((id: string) => {
  setSelectedId(id);
}, []);

// 3. useMemo로 계산 결과 메모이제이션
const sortedItems = useMemo(() => {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

### 6.2 코드 스플리팅
```tsx
// 라우트 레벨 lazy loading
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));

// Suspense와 함께 사용
<Suspense fallback={<LoadingSpinner />}>
  <GalleryPage />
</Suspense>
```

### 6.3 이미지 최적화
```tsx
// 1. lazy loading
<img loading="lazy" src="..." alt="..." />

// 2. 적절한 사이즈
<img
  srcSet="image-400.jpg 400w, image-800.jpg 800w"
  sizes="(max-width: 600px) 400px, 800px"
/>

// 3. 이미지 포맷 (WebP, AVIF)
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

---

## 7. 에러 처리

### 7.1 Error Boundary
```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 사용
<ErrorBoundary fallback={<ErrorMessage />}>
  <MenuSection />
</ErrorBoundary>
```

### 7.2 비동기 에러 처리
```tsx
// 커스텀 훅으로 일관된 처리
const useAsync = <T,>(asyncFn: () => Promise<T>) => {
  const [state, setState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    data?: T;
    error?: Error;
  }>({ status: 'idle' });

  const execute = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const data = await asyncFn();
      setState({ status: 'success', data });
    } catch (error) {
      setState({ status: 'error', error: error as Error });
    }
  }, [asyncFn]);

  return { ...state, execute };
};
```

---

## 8. 테스트 가이드

### 8.1 테스트 우선순위
1. **유틸리티 함수**: 순수 함수, 100% 커버리지 목표
2. **커스텀 훅**: 로직 검증
3. **컴포넌트**: 사용자 인터랙션 중심
4. **통합 테스트**: 주요 사용자 플로우

### 8.2 테스트 작성 원칙
```tsx
// 1. 구현이 아닌 동작 테스트
// Bad
expect(component.state.isOpen).toBe(true);

// Good
expect(screen.getByRole('dialog')).toBeInTheDocument();

// 2. 의미있는 테스트명
describe('MenuFilter', () => {
  it('선택된 카테고리의 메뉴만 표시한다', () => {});
  it('전체 선택 시 모든 메뉴를 표시한다', () => {});
});

// 3. Arrange-Act-Assert 패턴
it('버튼 클릭 시 모달이 열린다', () => {
  // Arrange
  render(<MenuSection />);

  // Act
  fireEvent.click(screen.getByText('상세보기'));

  // Assert
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
```

---

## 9. 코드 리뷰 체크리스트

### 필수 확인 항목
- [ ] TypeScript 에러 없음
- [ ] 콘솔 에러/경고 없음
- [ ] 불필요한 console.log 제거
- [ ] 하드코딩된 값 → 상수로 분리
- [ ] 중복 코드 없음
- [ ] 컴포넌트 크기 적절 (150줄 이하)
- [ ] Props drilling 3단계 이하
- [ ] 접근성 (alt, aria-label 등)
- [ ] 반응형 대응

### 성능 확인
- [ ] 불필요한 리렌더링 없음
- [ ] 무거운 계산 메모이제이션
- [ ] 이미지 최적화

### 확장성 확인
- [ ] 하드코딩 대신 props/config 사용
- [ ] 재사용 가능한 구조
- [ ] 명확한 타입 정의

---

## 10. 리팩토링 신호

### 즉시 리팩토링 필요
- 컴포넌트 300줄 초과
- Props 10개 초과
- 중첩 삼항 연산자 2개 이상
- 동일 코드 3회 이상 반복
- any 타입 사용

### 점진적 개선 대상
- 컴포넌트 150~300줄
- Props 5~10개
- 주석으로 설명이 필요한 복잡한 로직
- 테스트하기 어려운 구조

---

## 적용 예시

```tsx
// Before: 문제가 있는 코드
const Menu = ({ data, type, onSelect, isLoading, error, retry, showPrice, currency, locale }: any) => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name');

  let filtered = data;
  if (filter !== 'all') {
    filtered = data.filter((item: any) => item.type === filter);
  }

  let sorted = filtered;
  if (sort === 'name') {
    sorted = filtered.sort((a: any, b: any) => a.name.localeCompare(b.name));
  } else {
    sorted = filtered.sort((a: any, b: any) => a.price - b.price);
  }

  return (
    // 200줄의 JSX...
  );
};

// After: 개선된 코드
interface MenuProps {
  items: MenuItem[];
  onSelect: (id: string) => void;
  showPrice?: boolean;
}

const Menu: React.FC<MenuProps> = ({ items, onSelect, showPrice = true }) => {
  const { filter, setFilter, sort, setSort, processedItems } = useMenuFilter(items);

  return (
    <section className="py-24">
      <MenuControls
        filter={filter}
        sort={sort}
        onFilterChange={setFilter}
        onSortChange={setSort}
      />
      <MenuList
        items={processedItems}
        onSelect={onSelect}
        showPrice={showPrice}
      />
    </section>
  );
};
```
