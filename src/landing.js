const body = document.getElementById('content');

class Landing {
  static header(){
    // Create header
    const header = document.createElement('header');
    header.className = `jumbotron m-0`;

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
    body.appendChild(main);
  }

  static footer(){
    console.log('footer')

    // create footer
    const footer = document.createElement('footer');
    footer.className = `footer`;

    // create contact h3
    const ftContact = document.createElement('h3')
    ftContact.className = `ft-contact text-center`;
    const ftContactText = document.createTextNode("Contact Us");
    ftContact.appendChild(ftContactText);
    footer.appendChild(ftContact);

    // create phone p
    const ftPhone = document.createElement('p')
    ftPhone.className = `ft-phone text-center`;
    const ftPhoneText = document.createTextNode("+27 50 754 9281");
    ftPhone.appendChild(ftPhoneText);
    footer.appendChild(ftPhone);

    // create address h4
    const ftAddress = document.createElement('p')
    ftAddress.className = `ft-contact text-center`;
    const ftAddressText = document.createTextNode("73 Rosseten Road, JHB");
    ftAddress.appendChild(ftAddressText);
    footer.appendChild(ftAddress);

    // create social-media icons
    const ftSocial = document.createElement('div')
    ftSocial.className = `ft-contact text-center`;
    ftSocial.innerHTML = `
      <a href="https://github.com/BigWizzo" class="tag-blue"><i class="fab fa-github-square font-25"></i></a>
      <a href="https://www.linkedin.com/in/willnyamunokora" class="tag-blue"><i class="fab fa-linkedin font-25"></i></a>
      <a href="https://twitter.com/willnyamunokora" class="tag-blue"><i class="fab fa-twitter font-25"></i></a>   
    `;
    footer.appendChild(ftSocial);

    body.appendChild(footer);
  }
}

export { Landing }