import { Beach, BeachReport } from '../types';

// Mock beach reports
export const mockReports: BeachReport[] = [
  {
    id: '1',
    beachId: 'playa_postiguet',
    userId: 'user1',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    waves: 'small',
    water: 'clean',
    wind: 'weak',
    people: 'many'
  },
  {
    id: '2',
    beachId: 'playa_san_juan',
    userId: 'user2',
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    waves: 'small',
    water: 'muddy',
    wind: 'strong',
    people: 'normal'
  },
  {
    id: '3',
    beachId: 'arenales_del_sol',
    userId: 'user3',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    waves: 'none',
    water: 'clean',
    wind: 'weak',
    people: 'many'
  }
];

// Mock beaches
export const mockBeaches: Beach[] = [
  {
    id: 'playa_postiguet',
    name: 'Playa Postiguet',
    latitude: 38.3436,
    longitude: -0.4814,
    latestReport: mockReports[0],
    recentReports: [mockReports[0]]
  },
  {
    id: 'playa_san_juan',
    name: 'Playa San Juan',
    latitude: 38.3820,
    longitude: -0.4367,
    latestReport: mockReports[1],
    recentReports: [mockReports[1]]
  },
  {
    id: 'arenales_del_sol',
    name: 'Arenales del Sol',
    latitude: 38.2736,
    longitude: -0.5614,
    latestReport: mockReports[2],
    recentReports: [mockReports[2]]
  }
];

// Helper functions
export const getTimeAgo = (timestamp: Date): string => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'now';
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};

export const getConditionIcon = (condition: string, value: string): string => {
  const icons = {
    waves: {
      none: '🏖️',
      small: '🌊',
      big: '🌊'
    },
    water: {
      clean: '💧',
      muddy: '⚠️',
      dirty: '🚫'
    },
    wind: {
      weak: '🍃',
      moderate: '💨',
      strong: '💨'
    },
    people: {
      few: '😌',
      normal: '👥',
      many: '👥'
    }
  };
  
  return icons[condition as keyof typeof icons]?.[value as keyof typeof icons.waves] || '❓';
};
