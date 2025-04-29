import { RichText } from '@wordpress/block-editor';
import { updateData } from '../../../../../bpl-tools/utils/functions';
import {useEffect} from "react";

// style={{fontSize:"66px",color:"#192534"}} ==>theme3 text-size and text color 

const MarqueeText = ({ attributes ,isShow,setAttributes}) => {
  const { trickers,selectTheme,options,themeTwoLogo,styles} = attributes;
  useEffect(() => {
    document.querySelectorAll(".name a").forEach((link) => {
      link.target =options?.newTab? "_blank":"_self";
      link.rel = "noopener noreferrer";
    });
  }, [options?.newTab]);

  

  return (
    <div className={`wrapper-container`}>
      <div  className='wrapper'>
      
      <div className="blend-x container" >
      <div className="ticker-container-fluid container-max">
        <div className="row">
       <div className="col-12 content-container">
            
           <div style={{display:"flex"}}>
            
           { selectTheme ==="theme1" && <div
              className="ticker-scroller-x mb-4"
              data-direction={options?.firstColumnDirection}
              data-speed="slow"
            >
              <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name &&<a className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" ><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name &&<a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>}
           { selectTheme ==="theme2" && <div
              className="ticker-scroller-x mb-4"
              data-direction={options?.firstColumnDirection}
              data-speed="slow"
            >
              <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name &&<a className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" ><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name &&<a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>}


           


            { selectTheme =="theme2" && <div
              className="ticker-scroller-x mb-4"
              data-direction={options?.firstColumnDirection}
              data-speed="slow"
            >
              <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>}
            {selectTheme === "theme3" &&<div className="theme3Ticker container-fluid p-0">
    <div className="theme3Ticker row g-0">
        <div className="theme3Ticker col-12">
            <div className="theme3Ticker scroller-x">
                <ul  className="theme3Ticker list theme3Ticker  list-row theme3Ticker align-items-center theme3Ticker gap-6 theme3Ticker-scroller-x__list">
                  {/*front end for code   */}
                   {
                    isShow && trickers.map((ticker,index)=><a className='tickerButton tickerButtonLink' href={ ticker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" key={index}><li>
                    {isShow?<h1 className="theme3Ticker mb-0 name">{ticker?.name}</h1>:<RichText   onChange={(value)=>setAttributes({trickers:updateData(trickers,value,index,"name")})} tagName='h1' className="theme3Ticker mb-0 name" value={ticker?.name}></RichText>}
                </li>
                <li>
                  
                   <img className='iconImage'  src={ticker?.image}></img>
                </li></a>)
                   }
                       {/*backend for code  */}
                    {
                    !isShow && trickers.map((ticker,index)=><span className='tickerButton tickerButtonLink'  key={index}><li>
                    {isShow?<h1 className="theme3Ticker mb-0 name">{ticker?.name}</h1>:<RichText onChange={(value)=>setAttributes({trickers:updateData(trickers,value,index,"name")})} tagName='h1' className="theme3Ticker mb-0 name" value={ticker?.name}></RichText>}
                </li>
                <li>
                  
                   <img className='iconImage' src={ticker?.image}></img>
                </li></span>)
                   } 

                </ul>
            </div>
        </div>
    </div>
</div>
}

           </div>
           {/* double line for ticker theme 2 */}
            { options?.duplicateColumn &&  selectTheme ==="theme2" && <div style={{display:"flex"}}>
              {/* first div  */}
              <div className="ticker-scroller-x" data-direction={options?.secondeColumnDirection} data-speed="slow">
            <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a  className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"> <span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>
            {/* seconde div */}
            { selectTheme =="theme2" && <div className="ticker-scroller-x" data-direction={options?.secondeColumnDirection} data-speed="slow">
            <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li  className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" ><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a  className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>}
              </div>}
              {/* theme 1 */}
              { options?.duplicateColumn &&  selectTheme ==="theme1" && <div style={{display:"flex"}}>
              {/* first div  */}
              <div className="ticker-scroller-x" data-direction={options?.secondeColumnDirection} data-speed="slow">
            <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a  className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"> <span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>
            {/* seconde div */}
            { selectTheme =="theme2" && <div className="ticker-scroller-x" data-direction={options?.secondeColumnDirection} data-speed="slow">
            <ul className="ticker-list ticker-list-row ticker-scroller-x__list gap-4">
                {trickers.map((tricker, index) => (
                  <>
                  { isShow? tricker.name&&<li  className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a className='buttonLink'  href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" ><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>:<li className="ticker" key={index}>
                    { <span style={{backgroundColor:styles?.ticker?.rightSideColors?.bg}} className={`${tricker.name ? "tricker" : ""} ${!isShow ? "tricker" : ""}`}>
                      { isShow?tricker.name &&<span
                        dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                        className="d-inline-block flex-shrink-0 icon"
                      />:<span
                      dangerouslySetInnerHTML={{ __html: tricker?.icon }}
                      className="d-inline-block flex-shrink-0 icon"
                    />}
                      
                      {isShow? tricker.name && <a  className='buttonLink' href={tricker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer"><span dangerouslySetInnerHTML={{ __html: tricker?.name }} className='name'>
                        
                         
                        </span></a>:<RichText className='name' value={tricker?.name} onChange={(value)=>{
                        setAttributes({trickers: updateData(trickers,value,index,'name')})

                      }}></RichText>}
                    </span>}
                  </li>}
                  </>
                ))}
              </ul>
            </div>}
              </div>}
              { options?.duplicateColumn && selectTheme === "theme3" &&<div  data-direction="left" className="theme3Ticker container-fluid p-0">
    <div className="theme3Ticker row g-0"   data-direction="left">
        <div className="theme3Ticker col-12">
            <div className="theme3Ticker scroller-x">
                <ul  className="theme3Ticker list theme3Ticker list-row theme3Ticker align-items-center theme3Ticker gap-6 theme3Ticker-scroller-x__list_second">
                  {/*front end for code   */}
                   {
                    isShow && trickers.map((ticker,index)=><a className='tickerButton tickerButtonLink' href={ ticker?.link} target={options?.newTab? "_blank":"_self"} rel="noreferrer" key={index}><li>
                    {isShow?<h1  className="theme3Ticker mb-0 name">{ticker?.name}</h1>:<RichText onChange={(value)=>setAttributes({trickers:updateData(trickers,value,index,"name")})} tagName='h1' className="theme3Ticker mb-0 name" value={ticker?.name}></RichText>}
                </li>
                <li>
                  
                   <img className='iconImage' src={ticker?.image}></img>
                </li></a>)
                   }
                       {/*backend for code  */}
                    {
                    !isShow && trickers.map((ticker,index)=><span className='tickerButton tickerButtonLink'  key={index}><li>
                    {isShow?<h1 className="theme3Ticker mb-0 name">{ticker?.name}</h1>:<RichText onChange={(value)=>setAttributes({trickers:updateData(trickers,value,index,"name")})} tagName='h1' className="theme3Ticker mb-0 name" value={ticker?.name}></RichText>}
                </li>
                <li>
                  
                   <img className='iconImage' src={ticker?.image}></img>
                </li></span>)
                   } 

                </ul>
            </div>
        </div>
    </div>
</div>
}
              
          </div>
        </div>
      </div>
      
    </div>
    {options?.pulserAnimation&&  <div className="pulser">
		<div className="pulser__content">
			{ themeTwoLogo?.type ==="image" && <img src={themeTwoLogo?.image} alt="image" className="img-fluid" /> }

      {  themeTwoLogo?.type ==="icon" && <span 
  dangerouslySetInnerHTML={{ __html: themeTwoLogo?.logo}}
  className="img-fluid"
/>}


		</div>
	</div>}
    </div>
    </div>
  );
};

export default MarqueeText;
