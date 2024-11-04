import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import './components/accordion.js';
import { useHeroTab } from './components/blog/tab.js';
import { useHeroSlider } from './components/blog/blogSlider.js';

useTheme();
useBurger();
useHeroTab();
useHeroSlider();