import {Ingredient} from 'domain/ingredient'

export type UserName = string

export type User = {
  id: UniqueId
  name: UserName
  email: Email
  preferences: Ingredient[]
  allergies: Ingredient[]
}

export function hasAllergy(user: User, ingredient: Ingredient): boolean {
  return user.allergies.includes(ingredient)
}

export function hasPreference(user: User, preference: Ingredient): boolean {
  return user.preferences.includes(preference)
}
