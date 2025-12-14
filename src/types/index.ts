import { Document } from "@contentful/rich-text-types";

type RelationshipKey = {
  sys: {
    id: string;
    type: string;
    linkType: string;
  };
};

export type RelationshipValue<T> = {
  sys: System;
  fields: T;
};

type System = {
  id: string;
  type: string;
  space: RelationshipKey;
  contentType: RelationshipKey;
  createdAt: string;
  updatedAt: string;
  locale: string;
  revision: number;
};

export type Asset = {
  title: string;
  description: string;
  file: {
    url: string;
    details: any[];
    fileName: string;
    contentType: string;
  };
};

export type ApiResponse<T, R> = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: RelationshipValue<T>[];
  includes: {
    Asset?: RelationshipValue<Asset>[];
    Entry?: RelationshipValue<R>[];
  };
};

// ==================

export type Company = {
  companyName: string;
  companyAlias: string;
  logo: RelationshipKey;
  slug: string;
  image: string;
  website: string;
  startedAt: string;
  endedAt: string;
  status: string;
  firstColor: string;
  secondColor: string;
  order: number;
  role: string;
  accomplishments: string[];
  isFulltime?: boolean;
};

export type About = {
  name: string;
  cvUrl: string;
  summary: string;
  githubUrl: string;
  description: string;
  linkedinUrl: string;
  instagramUrl: string;
};

export type Configuration = {
  name: string;
  key: string;
  value: object;
};

export type Project = {
  title: string;
  slug: string;
  alias: string;
  description: string;
  summary: string;
  startedAt: string;
  endedAt: string;
  firstColor: string;
  secondColor: string;
  role: string;
  isActive: boolean;
  companyId: RelationshipKey;
  techStacks: RelationshipKey[];
  techUsed: Skill[];
  company: Company | undefined;
  mobileThumbnail: RelationshipKey;
  desktopThumbnail: RelationshipKey;
  imgMobile: string;
  imgDesktop: string;
  details: Document;
};

export type Skill = {
  label: string;
  slug: string;
  url: string;
  firstColor: string;
  secondColor: string;
  image: RelationshipKey;
  imageUrl: string;
  type: "development" | "design" | "product";
};

export type Expertise = {
  title: string;
  description: string;
  skills: RelationshipKey[];
  techUsed: Skill[];
};
