const content = document.getElementById('content');

class Contact {
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
  
    content.appendChild(footer);
  }
}

export { Contact }