export type ID = number | null

export interface Model {
  id: ID
  created_at: string
  updated_at: string
  deleted_at: string
}