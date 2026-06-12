export type CourseCategory =
  | 'all'
  | 'web-dev'
  | 'python'
  | 'c-language'
  | 'electronics'
  | 'prompt-engineering'
  | 'java-dsa';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  description: string;
  longDescription: string;
  skills: string[];
  syllabus: string[];
  iconName: string;
  popular?: boolean;
  rating: number;
  enrolledCount: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  achievement: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  courseTaken: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
  date: string;
}
