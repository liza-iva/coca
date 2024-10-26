import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import './components/accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
usePriceSwitcher();