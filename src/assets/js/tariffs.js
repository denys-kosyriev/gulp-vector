document.addEventListener('DOMContentLoaded', function () {

  const modals = document.getElementsByClassName('modal');
  const tariffs = document.getElementsByClassName('tariff');
  const modalForm = document.getElementsByClassName('modal-form')[0];

  Array.from(tariffs).map((tariff) => {

    const connectionButton = tariff.getElementsByClassName('btn')[0];
    connectionButton.addEventListener('click', () => {
      if (tariff.className.includes('tariff-internet')) {
        modalForm.classList.remove('d-none');
      } else if (tariff.className.includes('tariff-tv')) {
        modalForm.classList.remove('d-none');
        modalForm.classList.add('modal-tv');
      } else if (tariff.className.includes('tariff-all')) {
        modalForm.classList.remove('d-none');
        modalForm.classList.add('modal-all');
      }
    })

    const modalChannels = document.getElementsByClassName('modal-channels')[0];
    const detail = tariff.getElementsByClassName('detail')[0];
    detail.addEventListener('click', () => {
      modalChannels.classList.remove('d-none');
    })
  })

  Array.from(modals).map((modal, index) => {
    const closeButton = document.getElementsByClassName('close-modal')[index];
    const modalContent = document.getElementsByClassName('modal-content')[index];
    closeButton.addEventListener('click', () => {
      modal.classList.add('d-none');
    })
    modal.addEventListener('click', (e) => {
      const closeModal = e.composedPath().includes(modalContent);
      if (!closeModal) {
        modal.classList.add('d-none');
      }
    })
  })

});
