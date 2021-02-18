class Contact {
  static contactUs(){
    // create contact div
    const contactDiv = document.createElement('div');
    contactDiv.className = `contact-div text-light flex-column d-flex justify-content-center`;
  
    // create contact h3
    const contactH3 = document.createElement('h3')
    contactH3.className = `ft-contact text-center`;
    const contactH3Text = document.createTextNode("Contact Us");
    contactH3.appendChild(contactH3Text);
    contactDiv.appendChild(contactH3);
  
    // create phone p
    const contactPhone = document.createElement('p')
    contactPhone.className = `ft-phone text-center`;
    const contactPhoneText = document.createTextNode("+27 50 754 9281");
    contactPhone.appendChild(contactPhoneText);
    contactDiv.appendChild(contactPhone);
  
    // create address p
    const contactAddress = document.createElement('p')
    contactAddress.className = `ft-contact text-center`;
    const contactAddressText = document.createTextNode("73 Rosseten Road, JHB");
    contactAddress.appendChild(contactAddressText);
    contactDiv.appendChild(contactAddress);
  
    // create social-media icons
    const ftSocial = document.createElement('div')
    ftSocial.className = `ft-contact text-center`;
    ftSocial.innerHTML = `
      <a href="https://github.com/BigWizzo" class="tag-blue"><i class="fab fa-github-square font-25"></i></a>
      <a href="https://www.linkedin.com/in/willnyamunokora" class="tag-blue"><i class="fab fa-linkedin font-25"></i></a>
      <a href="https://twitter.com/willnyamunokora" class="tag-blue"><i class="fab fa-twitter font-25"></i></a>   
    `;
    contactDiv.appendChild(ftSocial);
    contact.appendChild(contactDiv);
  }
}

export { Contact }