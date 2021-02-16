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

    const cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8',];
    cards.forEach(function(cardContent) {
      const card = document.createElement("div");
      card.className = `menu-card col-3`;
      card.innerHTML = cardContent;
      main.appendChild(card);
    });
    body.appendChild(main);
  }
}

export { Landing }