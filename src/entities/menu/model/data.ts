import { CourseMenu, MenuType } from '@/shared/types';
import { DISHES } from '@/entities/dish';

export const MENUS: CourseMenu[] = [
  {
    type: MenuType.LUNCH,
    title: 'Lunch Course',
    price: '₩ 170,000',
    courses: [
      DISHES.welcome,
      DISHES.persimmon,
      DISHES.abalone,
      DISHES.mushrooms,
      DISHES.potato_pancake,
      DISHES.lunch_main,
      DISHES.noodles,
      DISHES.black_white,
      DISHES.kkodurami
    ]
  },
  {
    type: MenuType.DINNER,
    title: 'Dinner Course',
    price: '₩ 270,000',
    courses: [
      DISHES.welcome,
      DISHES.persimmon,
      DISHES.abalone,
      DISHES.mushrooms,
      DISHES.potato_pancake,
      DISHES.pithivier,
      DISHES.duck,
      DISHES.beef_bansang,
      DISHES.gukbap,
      DISHES.black_white,
      DISHES.ceramics,
      DISHES.kkodurami
    ]
  }
];
