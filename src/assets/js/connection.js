document.addEventListener('DOMContentLoaded', function () {

  // Work radio-buttons 'connection' page
  const connection = document.getElementsByClassName('connection')[0];
  const buttonsBlock = document.getElementsByClassName('buttons')[0];
  const buttons = buttonsBlock.getElementsByClassName('btn');

  Array.from(buttons).map(btn => {
    btn.addEventListener('click', () => {
      connection.classList.remove('net');
      connection.classList.remove('tv');
      connection.classList.remove('all');
      if (btn.className.includes('btn-net')) {
        connection.classList.add('net');
      } else if (btn.className.includes('btn-tv')) {
        connection.classList.add('tv');
      } else if (btn.className.includes('btn-all')) {
        connection.classList.add('all');
      }
    })
  })

})