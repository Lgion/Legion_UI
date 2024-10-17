import React from "react"
import {SvgPaths,$svgs} from "../B5Elements"


// 1ST LEVEL WRAPPERS

export function WrapperRaw({ _,children,$ }){
    const {id,className,props} = $||_||children
    , {___svg: svg} = $||_||children
    , {elm="div"} = $||_||children;

    const SVG_MODE = <>
      <SvgPaths>
        <use href={("#"+$svgs[svg])||svg}/>
      </SvgPaths>
      <span>
        {children||_}
      </span>
    </>

    console.log("props",props);
  
    return React.createElement(elm,{id,className,...props}, svg?SVG_MODE:children||_ )
}
// const WrapperRaw = ({ children,$ }) => React.createElement($.elm,null,children)
  
// Composants séparés pour heading, paragraph et divider
export function WrapperHeading({ _,children, $ }){
    const {lvl=4} = $||_||children
    return React.createElement("h"+lvl,null,children||_||$.content)
}
// return React.createElement(`h${lvl}`, { className: "alert-additional-heading" }, children);
  


// 2ND LEVEL WRAPPERS

export function WrapperList({ _,children, $ }){
    const {elm="ul",subElm="li"} = $||_
    , {id,className,items,subElmCn} = $||_;

    // console.log("subElmCn:",subElmCn);
    
    return <WrapperRaw $={{id,className,elm}}>
      {items.map((item,i)=><WrapperRaw key={i} $={{elm:subElm,className:subElmCn}}>
        {item}
      </WrapperRaw>)}
    </WrapperRaw>

}







