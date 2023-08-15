import { PortableTextBlock } from "sanity";

export type ProjectType = "web" | "app" | "design";

export interface Project {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: string;
  poster: string;
  source: string;
  preview: string;
  images: string[];
  technologies: string[];
  type: ProjectType;
  content: PortableTextBlock[];
}

export interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug: string;
  poster: string;
  content: PortableTextBlock[];
}
