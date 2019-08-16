import React from 'react';
import {ThemeContext} from './ThemeContext';

const ThemeProvider = ({ theme, children }) => 
<ThemeContext.Provider value={theme}>
    {children}
</ThemeContext.Provider>;

export default ThemeProvider;