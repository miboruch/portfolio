interface Breakpoints {
  [mobile: string]: number;
  tabletS: number;
  tablet: number;
  standard: number;
  hdReady: number;
  quadHd: number;
  fullHd: number;
}

export const breakpoints: Breakpoints = {
  mobile: 340,
  tabletS: 512,
  tablet: 710,
  tabletL: 812,
  standard: 1024,
  hdReady: 1280,
  quadHd: 1440,
  fullHd: 1900
};

export const theme = {
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media all and (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {} as { [key: string]: string }),
  font: {
    family: {
      futura: 'Futura',
      avanti: 'Avanti'
    },
    weight: {
      bold: 700,
      semi: 600,
      medium: 500,
      book: 400,
      light: 300
    }
  },
  colors: {
    white: '#fff',
    black: '#000',
    background: '#212121',
    backgroundLight: '#F5F5F3',
    menuBackground: '#272727'
  }
};
