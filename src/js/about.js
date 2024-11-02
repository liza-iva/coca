import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import './components/accordion.js';
import { useCircle } from './components/about/circle.js';
import { useHeroSlider, useTeamSlider } from './components/about/slider.js';

useTheme();
useBurger();
useCircle();
useHeroSlider();
useTeamSlider();