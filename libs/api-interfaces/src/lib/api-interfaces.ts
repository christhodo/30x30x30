export interface Message {
  message: string;
}

export interface User {
  email: string;
  password: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Project extends BaseEntity {
  title: string;
  url: string;
  thumbnailUrl?: string;
}

export interface Quote {
  content: string;
}
