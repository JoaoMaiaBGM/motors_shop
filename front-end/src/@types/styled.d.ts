import 'styled-components';
import { ThemeType } from '../../src/types/theme/sc';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    
  }
}