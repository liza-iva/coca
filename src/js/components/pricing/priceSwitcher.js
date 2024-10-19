export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const starterPeriod = starterPrice.nextElementSibling;
  const popularPeriod = popularPrice.nextElementSibling;
  const enterprisePeriod = enterprisePrice.nextElementSibling;

  const priceList = {
    starter: {
      default: 120,
      annual: 120 * 12 * 0.8,
    },
    popular: {
      default: 1680,
      annual: 1680 * 12 * 0.8,
    },
    enterprise: {
      default: 2520,
      annual: 2520 * 12 * 0.8,
    },
  };

  const setPricesAnnual = () => {
    starterPrice.textContent = priceList.starter.annual;
    popularPrice.textContent = priceList.popular.annual;
    enterprisePrice.textContent = priceList.enterprise.annual;

    starterPeriod.textContent = "/yr";
    popularPeriod.textContent = "/yr";
    enterprisePeriod.textContent = "/yr";
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;

    starterPeriod.textContent = "/mo";
    popularPeriod.textContent = "/mo";
    enterprisePeriod.textContent = "/mo";
  };

  switcher.checked = true;
  setPricesAnnual();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesAnnual();
    } else {
      setDefaultPrices();
    }
  });
};
