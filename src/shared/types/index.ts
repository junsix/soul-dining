export enum MenuType {
  LUNCH = 'LUNCH',
  DINNER = 'DINNER'
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  tags?: string[]; // e.g., "Signature", "Seasonal"
  imageUrl?: string;
  note?: string; // For things like "별미 진미" or specific eating instructions
}

export interface CourseMenu {
  type: MenuType;
  title: string;
  price: string;
  courses: Dish[];
}