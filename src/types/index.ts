export type WaveLevel = 'none' | 'small' | 'big';
export type WaterQuality = 'clean' | 'muddy' | 'dirty';
export type WindStrength = 'weak' | 'moderate' | 'strong';
export type CrowdLevel = 'few' | 'normal' | 'many';

export interface BeachReport {
  id: string;
  beachId: string;
  userId: string;
  timestamp: Date;
  waves: WaveLevel;
  water: WaterQuality;
  wind: WindStrength;
  people: CrowdLevel;
}

export interface Beach {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
  latestReport?: BeachReport;
  recentReports: BeachReport[];
}

export interface User {
  id: string;
  name?: string;
}

