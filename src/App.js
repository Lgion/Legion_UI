// import React from 'react'
import {Btn,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Collapse,Dropdown,ListGroup,Modal,Nav,Navbar,Offcanvas,Pagination,Popover,Progress,Spinner,Scrollspy,Toast,Tooltip}
  from "./importComponents"
// import { ExampleComponent } from 'IZYBootstrap'
// import 'legion-ui/dist/index.css'

const App = () => {
  const accordionItems = [
    { label: "Item 1", content: "Contenu de l'item 1" },
    { label: "Item 2", content: "Contenu de l'item 2" },
  ];

  const breadcrumbItems = [
    { text: "Accueil", href: "/" },
    { text: "Bibliothèque", href: "/library" },
    { text: "Données", href: "#" },
  ];

  const carouselItems = [
    { imageUrl: "https://via.placeholder.com/800x400?text=Slide+1", alt: "Slide 1" },
    { imageUrl: "https://via.placeholder.com/800x400?text=Slide+2", alt: "Slide 2" },
    { imageUrl: "https://via.placeholder.com/800x400?text=Slide+3", alt: "Slide 3" },
  ];

  const dropdownItems = [
    { text: "Action", href: "#" },
    { text: "Another action", href: "#" },
    { text: "Something else here", href: "#" },
  ];

  const listGroupItems = [
    { content: "Item 1", active: true },
    { content: "Item 2" },
    { content: "Item 3" },
  ];

  const navItems = [
    { text: "Accueil", href: "#", active: true },
    { text: "Profil", href: "#" },
    { text: "Messages", href: "#" },
  ];

  const navbarItems = [
    { text: "Accueil", href: "#", active: true },
    { text: "À propos", href: "#" },
    { text: "Contact", href: "#" },
  ];

  const scrollspyItems = [
    { target: "#section1", text: "Section 1" },
    { target: "#section2", text: "Section 2" },
    { target: "#section3", text: "Section 3" },
  ];

  const buttonGroupButtons = [
    { text: "Gauche", type: "secondary", onClick: () => console.log("Gauche cliqué") },
    { text: "Milieu", type: "secondary", onClick: () => console.log("Milieu cliqué") },
    { text: "Droite", type: "secondary", onClick: () => console.log("Droite cliqué") },
  ];

  return <>
    <Btn />
    <Accordion />
    <Alert />
    <div style={{position:"relative"}}>
      <Badge />
    </div>
    <Breadcrumb />
    <Card props={{
      title: "Titre de la carte",
      text: "Contenu de la carte",
      imageUrl: "https://via.placeholder.com/150",
      linkText: "En savoir plus",
      linkUrl: "#"
    }} />
    <Carousel props={{items: carouselItems}} />
    <CloseButton props={{white: false, onClick: () => console.log('Fermé')}} />
    <Collapse props={{id: "exampleCollapse", buttonText: "Cliquez pour voir plus", content: "Contenu caché"}} />
    <Dropdown props={{buttonText: "Menu déroulant", items: dropdownItems}} />
    <ListGroup props={{items: listGroupItems, numbered: true}} />
    <Modal props={{
      id: "exampleModal",
      title: "Titre du modal",
      content: "Contenu du modal",
      footer: (
        <>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button type="button" className="btn btn-primary">Sauvegarder</button>
        </>
      )
    }} />
    <Nav props={{items: navItems, pills: true}} />
    <Navbar props={{brand: "Mon Site", items: navbarItems}} />
    <Offcanvas props={{id: "offcanvasExample", title: "Offcanvas", content: "Contenu de l'offcanvas"}} />
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      Ouvrir l'offcanvas
    </button>
    <Pagination props={{currentPage: 3, totalPages: 5}} />
    <Progress props={{value: 75, max: 100, label: true, striped: true, animated: true}} />
    <Spinner props={{type: 'border', size: 'sm', color: 'primary'}} />
    <Scrollspy props={{items: scrollspyItems}} />
    <div style={{height: '200px'}}> {/* Pour simuler du contenu scrollable */}
      <h4 id="section1">Section 1</h4>
      <p>Contenu de la section 1</p>
      <h4 id="section2">Section 2</h4>
      <p>Contenu de la section 2</p>
      <h4 id="section3">Section 3</h4>
      <p>Contenu de la section 3</p>
    </div>
    <Toast props={{title: "Notification", content: "Ceci est un toast!"}} />
    <Tooltip props={{content: "Ceci est une infobulle"}}>
      <button className="btn btn-secondary">Survolez-moi</button>
    </Tooltip>
    <ButtonGroup props={{buttons: buttonGroupButtons}} />
    <Popover props={{title: "Titre du popover", content: "Contenu du popover", placement: "right"}}>
      <button className="btn btn-danger">Cliquez pour le popover</button>
    </Popover>
  </>
}

export default App
