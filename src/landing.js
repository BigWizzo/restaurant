const bro = (greeting) => {
  return `hey ${greeting}`
}

class Landing {
  // declare body

  static header(){
    const body = document.getElementById('body');

    // Create header
    const header = document.createElement('header');
    header.className = `jumbotron what`;

    // create H1
    const jumboH1 = document.createElement('h1');
    jumboH1.className = `display-4`;
    const h1Text = document.createTextNode("My Restaurant");
    jumboH1.appendChild(h1Text);
    header.appendChild(jumboH1);

    // create jumboPara
    const jumboPara = document.createElement('p')
    jumboPara.className = `lead`;
    const jumboParaText = document.createTextNode("This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.");
    jumboPara.appendChild(jumboParaText);
    header.appendChild(jumboPara);

    // create jumbo anchor
    const jumboA = document.createElement('a')
    jumboA.className = `btn btn-primary btn-lg`;
    const jumboAText = document.createTextNode("Learn more");
    jumboA.appendChild(jumboAText);
    header.appendChild(jumboA);

    // append header to body
    body.appendChild(header);
  }

  static main(){
    const body = document.getElementById('body');
     // create main
    const main = document.createElement('main');
    main.className = `menu-section container row`;
    let mycards = {
      card1: {
  	    image1: "http://127.0.0.1:5500/src/images/commit.png",
        image2: "http://127.0.0.1:5500/src/images/commit.png",
        h3: "My H3 1",
        p: "This is an H3 1",
  	  },
      card2: {
        image: "http://127.0.0.1:5500/src/images/commit.png",
        h3: "My H3 2",
        p: "This is an H3 2",
      }
    };

    Object.keys(mycards).forEach(key => {
      console.log(key, mycards[key]);
      const card = document.createElement("div");
      card.className = `menu-card col-4`;
      card.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="http://127.0.0.1:5500/src/images/commit.png" class="d-block w-100" alt="...">
            <div class="carousel-caption">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      `;
      main.appendChild(card);
    });
    body.appendChild(main);
  }
}

export { Landing }