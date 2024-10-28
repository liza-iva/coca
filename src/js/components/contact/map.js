// import mapMarkerIcon from '/assets/icons/location-icon.svg';

export const useMap = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const theme = localStorage.getItem('theme') || 'light';

  const themeTargetDataset = themeTarget.dataset;
  themeTargetDataset.theme = theme;

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    function getMapCenter() {
      if (window.innerWidth < 577) {
        return [120, 19];
      } else if (window.innerWidth < 1201) {
        return [40, 19];
      } else {
        return [20, 19];
      }
    }

    // Инициализация карты с центром, основанным на ширине экрана
const map = new YMap(document.getElementById('map'), {
  location: {
    center: getMapCenter(),
    zoom: 2,
  },
});

    const featuresLayer = new YMapDefaultFeaturesLayer();
    map.addChild(featuresLayer);

    function addCustomMarker() {
      const content = document.createElement('section');
      const markerIcon = document.createElement('div');
      markerIcon.classList.add('marker-icon');

      const marker = new ymaps3.YMapMarker(
        {
          coordinates: [133, -22],
          draggable: false,
        },
        markerIcon,
      );
      map.addChild(marker);

      // Создаем скрытый контент
      const balloonContent = document.createElement('div');
      balloonContent.classList.add('balloon-content');
      balloonContent.innerHTML = `
    <p>
      <span>Yogja, INA</span>
      100 Smith Street
      <br>Collingwood VIC 3066 AU
    </p>
  `;
      balloonContent.style.display = 'block'; // Скрываем контент по умолчанию
      content.appendChild(balloonContent);

      // Обработчик клика для показа/скрытия контента
      markerIcon.addEventListener('click', () => {
        const isVisible = balloonContent.style.display === 'block';
        balloonContent.style.display = isVisible ? 'none' : 'block';
      });

      // Добавляем скрытый контент к markerIcon
      markerIcon.appendChild(balloonContent);
    }

    function layerDark() {
      const layerDark = new YMapDefaultSchemeLayer({
        customization: [
          {
            tags: {
              all: ['water'],
            },
            stylers: [
              {
                color: '#1d1e25',
              },
            ],
          },
          {
            elements: 'label',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            tags: {
              all: ['landscape'],
            },
            stylers: [
              {
                color: '#acacb9',
              },
            ],
          },
        ],
      });
      map.addChild(layerDark);
      window.layerDark = layerDark;
    }

    function layerLight() {
      const layerLight = new YMapDefaultSchemeLayer({
        customization: [
          {
            tags: {
              all: ['water'],
            },
            stylers: [
              {
                color: '#FFF',
              },
            ],
          },
          {
            elements: 'label',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            tags: {
              all: ['landscape'],
            },
            stylers: [
              {
                color: '#acacb9',
              },
            ],
          },
        ],
      });
      map.addChild(layerLight);
      window.layerLight = layerLight;
    }

    function removeLayers() {
      if (window.layerDark) {
        map.removeChild(window.layerDark);
        window.layerDark = null;
      }
      if (window.layerLight) {
        map.removeChild(window.layerLight);
        window.layerLight = null;
      }
    }

    function switchMapTheme(newTheme) {
      removeLayers();
      if (newTheme === 'dark') {
        layerDark();
      } else {
        layerLight();
      }
    }

    if (theme === 'dark') {
      layerDark();
    } else {
      layerLight();
    }

    addCustomMarker();

    window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
    window.map = map;
    window.removeLayers = removeLayers;
    window.switchMapTheme = switchMapTheme;
  }

  initMap();
};
