export const ACTIVITY_TYPES = [
  'trade',
  'build',
  'media',
  'life',
  'gaming',
  'stream',
  'thought',
  'project',
] as const;

export type ActivityType = (typeof ACTIVITY_TYPES)[number];

export interface ActivityEvent {
  id: string;
  date: string;
  time?: string;
  type: ActivityType;
  title: string;
  summary?: string;
  tags?: string[];
  href?: string;
  media?: string[];
  featured?: boolean;
  status?: 'draft' | 'active' | 'published' | 'archived';
}
