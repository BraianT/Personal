'use strict';

{
  const mainLocations = [
    {
      name: 'Este',
      places_to_visit: [
        {
          name: 'Templo Tanah Lot',
          description: 'El lugar esta copado',
          duration: ' 2 horas',
          category_name: 'Templo',
          category_id: 'xxx',
          entrance_cost: '$2',
        },
        {
          name: 'Templo Tanah Lot',
          descritpion: 'El lugar esta copado',
          duration: ' 2 horas',
          category_name: 'Templo',
          category_id: 'xxx',
          entrance_cost: '$2',
        },
        {
          name: 'Templo Tanah Lot',
          descritpion: 'El lugar esta copado',
          duration: ' 2 horas',
          category_name: 'Templo',
          category_id: 'xxx',
          entrance_cost: '$2',
        },
      ],
    },
    { name: 'Oeste' },
    { name: 'Norte' },
    { name: 'Sur' },
    { name: 'Centro' },
  ];
  console.log(mainLocations);

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.keys(options).forEach(key => {
      const value = options[key];
      if (key === 'text') {
        elem.innerText = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function main(arr) {
    // createAndAppend("pre", root, { text: JSON.stringify(data, null, 2) });
    createAndAppend('header', root, { id: 'divHead', class: 'header' });
    createAndAppend('p', divHead, { text: 'Descubre Bali Por Zonas: ' });
    createAndAppend('select', divHead, {
      id: 'selectElem',
      class: 'repo-selector',
    });
    createAndAppend('div', root, { id: 'container' });

    createOptions(arr);
    displayInformation(arr[0].places_to_visit);

    document.getElementById('selectElem').onchange = function() {
      let selectedItemIndex = this.options[this.selectedIndex].value;
      let infoDiv = document.getElementById('divLeft');
      infoDiv.parentNode.removeChild(infoDiv);

      displayInformation(arr[selectedItemIndex]);
    }; //listener
  }
  window.onload = () => main(mainLocations);

  //Header
  function createOptions(arr) {
    for (let i = 0; i < arr.length; i++) {
      createAndAppend('option', selectElem, {
        value: i,
        text: arr[i].name,
        class: 'optionsClass',
      });
    }
  }

  //Information
  function displayInformation(places) {
    let infoDiv = createAndAppend('div', container, {
      id: 'divLeft',
      class: 'left-div whiteframe',
    });
    createAndAppend('table', infoDiv, { id: 'table' });
    createAndAppend('tbody', table, { id: 'tbody' });
    createRow('Nombre: ', places[0].name);
    createRow('Descripcion: ', places[0].description);
    createRow('Duracion : ', places[0].duration);
    createRow('Categoria: ', places[0].category_name);

    function createRow(label, description) {
      let tRow = createAndAppend('tr', table);
      createAndAppend('td', tRow, { text: label, class: 'label' });
      createAndAppend('td', tRow, { text: description });
    }
  }
}
