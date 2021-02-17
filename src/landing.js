class Landing {
  static header(){
    const home = document.getElementById('home');
    
    // Create header
    const header = document.createElement('header');
    header.className = `jumbotron m-0 text-center vh-100`;

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

    // append header to content
    home.appendChild(header);
  }

  static main(){
     // create main div
    const main = document.createElement('main');
    main.className = `menu-section container-fluid row m-0 p-0`;

    // Keep cards as objects
    const cards = {
      card1: {
  	    image1: "http://127.0.0.1:5500/src/images/img1.jpg",
        image2: "http://127.0.0.1:5500/src/images/img2.jpg",
        h3: "H31",
        p: "This is an H3 1",
  	  },
      card2: {
        image1: "http://127.0.0.1:5500/src/images/img3.jpg",
        image2: "http://127.0.0.1:5500/src/images/img4.jpg",
        h5: "My H3 2",
        p: "This is an H3 2",
      },
      card3: {
        image1: "http://127.0.0.1:5500/src/images/img5.jpg",
        image2: "http://127.0.0.1:5500/src/images/img6.jpg",
        h3: "H31",
        p: "This is an H3 1",
      },
      card4: {
        image1: "http://127.0.0.1:5500/src/images/img7.jpg",
        image2: "http://127.0.0.1:5500/src/images/img8.jpg",
        h3: "H31",
        p: "This is an H3 1",
      },
      card5: {
        image1: "http://127.0.0.1:5500/src/images/img9.jpg",
        image2: "http://127.0.0.1:5500/src/images/img10.jpg",
        h3: "H31",
        p: "This is an H3 1",
      },
      card6: {
        image1: "http://127.0.0.1:5500/src/images/img11.jpg",
        image2: "http://127.0.0.1:5500/src/images/img12.jpg",
        h3: "H31",
        p: "This is an H3 1",
      }
    };
    
    // Loop through cards using Object.keys
    Object.keys(cards).forEach(key => {

      // create card div
      const card = document.createElement("div");
      card.className = `menu-card col-4 p-0`;
      card.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${cards[key].image1}" class="d-block w-100" alt="...">
            <div class="carousel-caption">
              <h5>${cards[key].h5}</h5>
              <p>${cards[key].p}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="${cards[key].image2}" class="d-block w-100" alt="...">
            <div class="carousel-caption">
              <h5>${cards[key].h5}</h5>
              <p>${cards[key].p}</p>
            </div>
          </div>
        </div>
      </div>
      `;
      main.appendChild(card);
    });
    home.appendChild(main);
  }

}

export { Landing }