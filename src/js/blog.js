import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import './components/accordion.js';
import { useSwitchTabs } from './components/blog/tab.js';
import { useBlogHeroSlider } from './components/slider.js';

useTheme();
useBurger();
useSwitchTabs();
useBlogHeroSlider();