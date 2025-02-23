import { cssVar } from '@toeverything/theme';
import { style } from '@vanilla-extract/css';
export const notFoundPageContainer = style({
  fontSize: cssVar('fontBase'),
  color: cssVar('textPrimaryColor'),
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  padding: '0 20px',
});
export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '24px auto 0',
});
export const largeButtonEffect = style({
  boxShadow: `${cssVar('largeButtonEffect')} !important`,
});
