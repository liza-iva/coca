export const useHeroTab = () => {
  document.querySelectorAll('.tab-controls').forEach(tabControls => {

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

      const tabControl = e.target.closest('.tab-controls__link')

      if (!tabControl) return
      e.preventDefault()
      if (tabControl.classList.contains('tab-controls__link--active')) return

      const tabContentID = tabControl.getAttribute('href')
      const tabContent = tabControls.closest('.tab-container').querySelector(tabContentID)
      const activeControl = tabControls.querySelector('.tab-controls__link--active')
      const activeContent = tabControls.closest('.tab-container').querySelector('.tab-content--show')

      if (activeContent) {
          activeControl.classList.remove('tab-controls__link--active')
          activeContent.classList.remove('tab-content--show')
      }

      tabControl.classList.add('tab-controls__link--active')
      tabContent.classList.add('tab-content--show')
  }
});
}
