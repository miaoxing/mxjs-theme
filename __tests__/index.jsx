import {ThemeProvider, useTheme} from '../index';
import {render} from '@testing-library/react';

describe('theme', () => {
  test('basic', () => {
    const Child = () => {
      const theme = useTheme();
      return theme.key;
    };

    const {container} = render(<ThemeProvider theme={{
      key: 'value',
    }}>
      <Child/>
    </ThemeProvider>);
    expect(container).toMatchSnapshot();
  });
});
