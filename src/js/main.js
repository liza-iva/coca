import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import { useInsightSlider, usePartnersSlider, useTestimonialsSlider } from './components/slider.js';
import './components/accordion.js';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
