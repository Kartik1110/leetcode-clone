export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}
export interface Problems {
  id: string;
  title: string;
  acceptance: string;
  difficulty: Difficulty;
}

