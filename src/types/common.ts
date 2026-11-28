export type ID = string;

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
