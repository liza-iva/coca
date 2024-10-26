import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import './components/scroll.js';
import './components/accordion.js';
import { usePartnersSlider } from './components/slider.js';
import { usePhone } from './components/contact/phone.js';
import { useValidationForm } from './components/contact/validationForm.js';
import { useMap } from './components/contact/map.js';

useTheme();
useBurger();
usePartnersSlider();
usePhone();
useValidationForm();
useMap();