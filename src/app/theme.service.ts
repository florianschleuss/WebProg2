import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#1f2935',
  'background-color': '#252525',
  'text-color': '#fff',
  'triangle': '#ed8a63',
  'lila': '#1d1145',
  'list-color': '#333333'
};

export const lightTheme = {
  'primary-color': '#ececec',
  'background-color': '#ececec',
  'text-color': '#2d2d2d',
  'triangle': '#1d1145',
  'lila': '#ed8a63',
  'list-color': '#ececec'
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
