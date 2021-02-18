export default class Menu {
  static menuList() {
    const menu = document.getElementById('menu');

    // create menu main div
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div text-light flex-column d-flex justify-content-center';

    // create menu h3
    const myMenu = document.createElement('h3');
    myMenu.className = 'menu-list-h3 text-center';
    const myMenuText = document.createTextNode('Menu List');
    myMenu.appendChild(myMenuText);
    menuDiv.appendChild(myMenu);

    // create menu list div
    const menuListDiv = document.createElement('div');
    menuListDiv.className = 'menu-list-div text-center';
    menuListDiv.innerHTML = `
      <div class="menu-list-items">
        <h5>Ba-Pita</h5>
        <p>Xperience the Middle Eastern and Mediterranean street food</p>
      </div>
      <div class="menu-list-items">
        <h5>Jaha Taco</h5>
        <p>Filled with staples like nachos, tacos and quesadillas</p>
      </div>
      <div class="menu-list-items">
        <h5>Zambanani</h5>
        <p>Fried calamari rings, and the lamb cutlets are succulent</p>
      </div>
      <div class="menu-list-items">
        <h5>Breezeblock</h5>
        <p>It's all about brunch and sports an all-day breakfast menu</p>
      </div>
      <div class="menu-list-items">
        <h5>Kream</h5>
        <p>salad, poké bowl, tapas with olive salsa verde and spicy vegetable dip</p>
      </div>
    `;
    menuDiv.appendChild(menuListDiv);
    menu.appendChild(menuDiv);
  }
}
