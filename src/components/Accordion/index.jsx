import React, { useState } from 'react';
import {WrapperList,WrapperRaw,WrapperHeading} from "../../wrappers"
import "./index.scss"

const toggleItem = (index,setOpenItems) => {
  setOpenItems(prevOpenItems => {
    if (prevOpenItems.includes(index)) {
      return prevOpenItems.filter(item => item !== index)
    } else {
      return [...prevOpenItems, index]
    }
  })
}
, _data = {
  id: "accordionExample",
  className: "b5_accordion",
  items: [
    { label: "Item 1", content: "Contenu de l'item 1" },
    { label: "Item 2", content: "Contenu de l'item 2" },
  ]
};

export default ({ _,children,$=_data }) => {
  const {id,className,items} = $||_||children
  const [openItems, setOpenItems] = useState([0])

  
  return (
    <WrapperList $={{id,className,items:accordionItems(items,{openItems,setOpenItems,id})}} />
  );
};



const accordionItems = (items,options) => items.map((item,index) => <React.Fragment key={index}>
    <h2 className="accordion-header">
      <button
        className={`accordion-button ${!options.openItems.includes(index) ? 'collapsed' : ''}`}
        type="button"
        onClick={() => toggleItem(index,options.setOpenItems)}
        aria-expanded={options.openItems.includes(index)}
        aria-controls={`collapse${index}`}
      >
        {item.label}
      </button>
    </h2>
    <section
      id={`collapse${index}`}
      className={`accordion-body accordion-collapse collapse ${options.openItems.includes(index) ? 'show' : ''}`}
      data-bs-parent={"#"+options.id}
    >
      {item.content}
    </section>
  </React.Fragment>
)


