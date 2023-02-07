import {SETTINGS_STRINGS} from './Strings';
import {SVG} from './Svg';
import {SCREENS} from './Screens';

export const SETTING_OPTIONS = [
  {
    icon: SVG.NOTIFICATION,
    title: SETTINGS_STRINGS.NOTIFICATION,
    screen: SCREENS.NOTIFICATION,
  },
  {
    icon: SVG.SECURITY,
    title: SETTINGS_STRINGS.SECURITY,
    screen: SCREENS.WALLET,
  },
  {
    icon: SVG.LANGUAGE,
    title: SETTINGS_STRINGS.LANGUAGE,
  },
  {
    icon: SVG.DELETE,
    title: SETTINGS_STRINGS.CLEAR_CACHE,
  },
  {
    icon: SVG.TERMS,
    title: SETTINGS_STRINGS.TERMS,
  },
  {
    icon: SVG.CONTACT,
    title: SETTINGS_STRINGS.CONTACT,
  },
];

export const LOGOUT_OPTION = {
  icon: SVG.LOGOUT,
  title: SETTINGS_STRINGS.LOGOUT,
};
