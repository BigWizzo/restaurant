export default class Landing {
  static header() {
    const home = document.getElementById('home');

    // Create header
    const header = document.createElement('header');
    header.className = 'jumbotron text-center text-light vh-100';

    // create H1
    const jumboH1 = document.createElement('h1');
    jumboH1.className = 'display-4';
    const h1Text = document.createTextNode('Social on Main');
    jumboH1.appendChild(h1Text);
    header.appendChild(jumboH1);

    // create jumboPara
    const jumboPara = document.createElement('p');
    jumboPara.className = 'lead';
    const jumboParaText = document.createTextNode('This slick, bare-brick cafe and bar offers BBQ dishes and platters, plus craft beers and cocktails. The choice of breakfast, lunch and dinner is abundant.');
    jumboPara.appendChild(jumboParaText);
    header.appendChild(jumboPara);

    // create jumbo anchor
    const jumboA = document.createElement('a');
    jumboA.className = 'jumbo-an';
    const jumboAText = document.createTextNode('WELCOME');
    jumboA.appendChild(jumboAText);
    header.appendChild(jumboA);

    // append header to content
    home.appendChild(header);
  }

  static main() {
    const home = document.getElementById('home');
    // create main div
    const main = document.createElement('main');
    main.className = 'menu-section container-fluid row m-0 p-0';

    // Keep cards as objects
    const cards = {
      card1: {
        image1: `${window.location.origin}/src/images/img1.jpg`,
        image2: `${window.location.origin}/src/images/img2.jpg`,
        h3: 'Compact Menu',
        p: 'classics option',
      },
      card2: {
        image1: `${window.location.origin}/src/images/img3.jpg`,
        image2: `${window.location.origin}/src/images/img4.jpg`,
        h3: 'Five Pizzas',
        p: 'that’s all you need',
      },
      card3: {
        image1: `${window.location.origin}/src/images/img5.jpg`,
        image2: `${window.location.origin}/src/images/img6.jpg`,
        h3: 'Bacon Salami,',
        p: 'good old fashion',
      },
      card4: {
        image1: `${window.location.origin}/src/images/img7.jpg`,
        image2: `${window.location.origin}/src/images/img8.jpg`,
        h3: 'Mushroom Bianca',
        p: 'your type of juicy',
      },
      card5: {
        image1: `${window.location.origin}/src/images/img9.jpg`,
        image2: `${window.location.origin}/src/images/img10.jpg`,
        h3: 'Crust Galore',
        p: 'This is cringy noon',
      },
      card6: {
        image1: `${window.location.origin}/src/images/img11.jpg`,
        image2: `${window.location.origin}/src/images/img12.jpg`,
        h3: 'Balsamic Glaze',
        p: 'fly without wings',
      },
    };

    // Loop through cards using Object.keys
    Object.keys(cards).forEach(key => {
      // create card div
      const card = document.createElement('div');
      card.className = 'menu-card col-12 col-sm-6 col-lg-4 p-0';
      card.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${cards[key].image1}" class="d-block w-100" alt="...">
            <div class="carousel-caption">
              <h5>${cards[key].h3}</h5>
              <p>${cards[key].p}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="${cards[key].image2}" class="d-block w-100" alt="...">
            <div class="carousel-caption">
              <h5>${cards[key].h3}</h5>
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
