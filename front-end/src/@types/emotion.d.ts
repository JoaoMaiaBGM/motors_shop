import '@emotion/react'
import { ThemeType } from '../types/theme/sc'

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
  }
}