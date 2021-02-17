const content = document.getElementById('content');

class Nav {
  static createNav(){
    content.innerHTML = `
    <ul class="nav nav-tabs justify-content-center p-2">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="menu-tab" data-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="false">menu</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
      <div class="tab-pane fade" id="menu" role="tabpanel" aria-labelledby="menu-tab"></div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
    `;
  }
}

export { Nav }