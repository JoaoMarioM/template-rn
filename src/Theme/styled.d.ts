import 'styled-components/native';
import {theme} from '.';

type ColorBase = keyof typeof theme.colors;

type ColorProps = {
  [K in ColorBase];
};

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: ColorProps;
  }
}
