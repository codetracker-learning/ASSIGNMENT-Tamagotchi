function appBuilder() {
  document.querySelector('#app').classList.add('border', 'border-dark', 'border-5', 'rounded');
  document.querySelector('#app').innerHTML = `
  <div id="progress"></div>
  <div class='container'>
    <div class='row'>

      <div id="eat" class="quad col-sm m-1 p-4"></div>

      <div id="play" class="quad col-sm m-1 p-4"></div>

    </div>

    <div class='row'>

      <div id="fight" class="quad col-sm m-1 p-4"></div>

      <div id="sleep" class="quad col-sm m-1 p-4"></div>

    </div>
  </div>
  <div id="pet"></div>
  `;
}

export default appBuilder;
