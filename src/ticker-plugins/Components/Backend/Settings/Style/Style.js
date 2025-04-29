import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  FormToggle,
  PanelRow,
  SelectControl
} from "@wordpress/components";
import { Background, BoxControl, ColorControl, ColorsControl, Device, IconLibrary, Label, MediaArea, Typography  } from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";




const Style = ({ attributes, setAttributes,device }) => {
  const {selectTheme,borderOne,themeTwoLogo,themeTwoLogoRadius,themeTwoLogoBorder,themeTwoLogoColor,themeTwoLogoSize,pulserContentStyle,pulserRadius,puslerBgColor,pulserContentStyleContent,pulserContentRadius,styles,options,layout} = attributes;

  const {ticker}=styles;

 







  return (
    <>
  <PanelBody className='bPlPanelBody' title={__('Container/Wrapper', 'b-blocks')} initialOpen={false}>

  <PanelRow><Label>Width</Label>  <Device></Device> </PanelRow>
  <UnitControl
  onChange={ value => {
    
    setAttributes({styles:updateData(styles,value,"width",device)})
  }}
 
  value={styles?.width[device]}
  
 />
 
 
  

  <PanelRow><Label > Height </Label> <Device></Device></PanelRow>
       <UnitControl
  onChange={ value => {
    
    setAttributes({styles:updateData(styles,value,"height",device)})

  }}
 
  value={styles?.height[device]}
  
 />
 
 


    
    {
      options?.duplicateColumn && selectTheme ==="theme3" && <Label>Column Gap <div className='asdfghj'><UnitControl units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]} min={0} value={layout?.ticker?.columnGap} onChange={(value)=>{
        setAttributes({layout: updateData(layout,value,"ticker","columnGap")});
      }}></UnitControl></div></Label>
    }
    {
      selectTheme ==="theme2" && <Label>Column Gap <div className='asdfghj'><UnitControl units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]} min={0} value={layout?.ticker?.columnGap} onChange={(value)=>{
        setAttributes({layout: updateData(layout,value,"ticker","columnGap")});
      }}></UnitControl></div></Label>
    }
    {
      selectTheme ==="theme1" && <Label>Column Gap <div className='asdfghj'><UnitControl units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]} min={0} value={layout?.ticker?.columnGap} onChange={(value)=>{
        setAttributes({layout: updateData(layout,value,"ticker","columnGap")});
      }}></UnitControl></div></Label>
    }

<Label>Row Gap <div className='asdfghjafsdfs'><UnitControl units={[{ value: 'px', label: 'px' }]} min={0} value={layout?.ticker?.rowGap} onChange={(value)=>{
  setAttributes({layout: updateData(layout,value,"ticker","rowGap")})
}}></UnitControl></div></Label>


    </PanelBody>
  
  
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Ticker", "b-blocks")}
        initialOpen={false}
      >
       {selectTheme =="theme1" && <ColorsControl
          value={ticker?.colors}
          onChange={(val) => {
            setAttributes({styles:updateData(styles,val,"ticker","colors")})
          }}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />}
       {selectTheme =="theme3" && <ColorsControl
          value={ticker?.colors}
          onChange={(val) => {
            setAttributes({styles:updateData(styles,val,"ticker","colors")})
          }}
          defaults={{ color: "black", bg: "#B1C5A4" }}
        />}
        {
          selectTheme == "theme2" && <ColorControl onChange={(value)=>{
            setAttributes({styles:updateData(styles,value,"ticker","colors","color")})
          }} value={ticker?.colors?.color} label={__("Color", "b-blocks")} />
        }
        {
          selectTheme == "theme2" && <ColorControl onChange={(value)=>{
            setAttributes({styles:updateData(styles,value,"ticker","colors","bg")})
          }} value={ticker?.colors?.bg} label={__("Background Color Left", "b-blocks")} />
        }
        {
          selectTheme == "theme2" && <ColorControl onChange={(value)=>{
            setAttributes({styles:updateData(styles,value,"ticker","rightSideColors","bg")})
          }} value={styles?.ticker?.rightSideColors?.bg} label={__("Background Color Right", "b-blocks")} />
        }
        <Typography value={ticker?.typho} onChange={(value)=>{
          setAttributes({styles: updateData(styles,value,"ticker","typho") })
        }} />
          <BoxControl label="Padding" values={ticker?.padding} onChange={(value)=>{
          setAttributes({ styles:updateData(styles,value,"ticker","padding")})
        }} ></BoxControl>
          <BoxControl className="mt8" label="Radius" values={ticker?.radius} onChange={(value)=>{
          setAttributes({ styles: updateData(styles,value,"ticker","radius") })
        }} ></BoxControl>
       
        <UnitControl
	onChange={ value => setAttributes({styles:updateData(styles,value,"ticker","gap")})}
	onUnitChange={ () => 'console.log("new unit")' }
	label="Gap"
  units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]}

	value={ ticker?.gap } />

       {
        selectTheme ==="theme3" ?<>
        <UnitControl
        onChange={ value => setAttributes({styles: updateData(styles,value,"ticker","icon","image","width")})}
        onUnitChange={ () => 'console.log("new unit") '}
        label="Image Width"
        units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]}
      
        value={ ticker?.icon?.image?.width } />
        <UnitControl
        onChange={ value => setAttributes({styles: updateData(styles,value,"ticker","icon","image","height")})}
        onUnitChange={ () => 'console.log("new unit")' }
        label="Image Height"
        units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]}
      
        value={ ticker?.icon?.image?.height} />
        </>:<> <ColorControl label="Icon Color" value={ticker?.icon?.color} onChange={value=>{
          setAttributes({ styles: updateData(styles,value,"ticker","icon","color") })
        }} /><UnitControl
        onChange={ value => setAttributes({styles: updateData(styles,value,"ticker","icon","size")})}
        onUnitChange={ () => ""}
        label="Icon Size"
        units={[{ value: 'px', label: 'px' },{ value: 'em', label: 'EM' },{ value: 'rem', label: 'REM' }]}
      
        value={ ticker?.icon?.size } /></>
       }

       {
        selectTheme === "theme3" && <BoxControl values={styles?.ticker?.icon?.radius} onChange={(value)=>{
          setAttributes({styles: updateData(styles,value,"ticker","icon","radius") })
        }} label={__("Image Radius","b-blocks")} />
       }
      

        

      


      </PanelBody>

      {  options?.pulserAnimation  && <PanelBody  className="bPlPanelBody"
        title={__("Pulse Animation", "b-blocks")}
        initialOpen={false}>
          <Label>Hide Animation Mobile  <FormToggle
  
    
	checked={ options?.isAnimationShowMobile}
	onChange={ () => setAttributes({options:updateData(options,!options?.isAnimationShowMobile,"isAnimationShowMobile")}) }
/> </Label>
       
         <PanelRow>
         <Label>{__("Width","b-blocks")} </Label>
          <Device></Device>
         </PanelRow>

          <UnitControl value={pulserContentStyle?.width[device]} onChange={(value)=>{
            setAttributes({pulserContentStyle: updateData(pulserContentStyle,value,"width",device) })
          }} units={[{ value: 'px', label: 'px' }]}   />
          <PanelRow>
         <Label>{__("Height","b-blocks")} </Label>
          <Device></Device>
         </PanelRow>
          <UnitControl value={pulserContentStyle?.height[device]} onChange={(value)=>{
            setAttributes({pulserContentStyle: updateData(pulserContentStyle,value,"height",device) })
          }} units={[{ value: 'px', label: 'px' }]}    />

          <ColorControl value={pulserContentStyle?.bg} onChange={(value)=>{
            setAttributes({pulserContentStyle: updateData(pulserContentStyle,value,"bg") })
          }}  label={__("Background Color","b-blocks")} />

        <BoxControl className="mt8" label="Radius" values={pulserRadius} onChange={(value)=>{
          setAttributes({ pulserRadius: value })
        }} ></BoxControl>

        <Label>Blur<UnitControl value={pulserContentStyle?.blur || "15px"} onChange={(value)=>{
            setAttributes({pulserContentStyle: updateData(pulserContentStyle,value,"blur") })
          }} units={[{ value: 'px', label: 'px' }]}    /> </Label>


   {/* <Flex justify="center" align="center"><Label> Icon Type: </Label><BtnGroup style={{justifyContent:"center"}} label="" options={[{ label: "IMAGE", value: "image" },
    { label: "ICON", value: "icon" }]} 
    value={themeTwoLogo?.type}
    onChange={(value)=>{[device]
    
        setAttributes({themeTwoLogo: updateData(themeTwoLogo,value,"type") })
      
    }}

    /></Flex> */}
    <SelectControl options={[{ label: "IMAGE", value: "image" },
    { label: "ICON", value: "icon" }]} label={__("Symbol  Type","b-blocks")} value={themeTwoLogo?.type}
    onChange={(value)=>{[device]
    
        setAttributes({themeTwoLogo: updateData(themeTwoLogo,value,"type") })
      
    }}  />
     { themeTwoLogo?.type ==="image" &&  <MediaArea default={themeTwoLogo?.image} value={themeTwoLogo?.image} label={__("Image","b-blocks")} onChange={(value)=>{
      const val = value.url
      setAttributes({themeTwoLogo: updateData(themeTwoLogo,val,"image") })
      
    }} />}
    { themeTwoLogo?.type ==="icon" && <IconLibrary label={__("Icon","b-blocks")} value={themeTwoLogo?.logo} onChange={(value)=>{
  setAttributes({themeTwoLogo: updateData(themeTwoLogo,value,"logo") })
}}  />}
{themeTwoLogo?.type ==="icon" && <ColorControl label={__("Icon Color","b-block")} value={themeTwoLogoColor} onChange={(value)=>{
  setAttributes({themeTwoLogoColor: updateData(themeTwoLogoColor,value) })
}} />


}
{ themeTwoLogo?.type ==="icon" &&  <UnitControl  units={[{ value: 'px', label: 'px' }]} value={themeTwoLogoSize} label={__("Icon Size")} onChange={(value)=>{
  setAttributes({themeTwoLogoSize: updateData(themeTwoLogoSize,value) })
}} />}
 {  themeTwoLogo?.type ==="icon" &&  <BorderBoxControl

colors={[
  { color: '#72aee6', name: 'Blue 20' },
  { color: '#3582c4', name: 'Blue 40' },
  { color: '#e65054', name: 'Red 40' },
  { color: '#8a2424', name: 'Red 70' },
  { color: '#f2d675', name: 'Yellow 10' },
  { color: '#bd8600', name: 'Yellow 40' }
]}
label="Icon Border"
value={themeTwoLogoBorder}
onChange={(value) => setAttributes({ themeTwoLogoBorder: updateData(themeTwoLogoBorder,value) })}
/>}


{ themeTwoLogo?.type ==="icon" && <BoxControl label={__("Icon Radius","b-blocks")} values={themeTwoLogoRadius} onChange={(value)=>{
      setAttributes({themeTwoLogoRadius: updateData(themeTwoLogoRadius,value) })
    }} />}
    { themeTwoLogo?.type ==="image" &&  <UnitControl  units={[{ value: 'px', label: 'px' }]}  value={themeTwoLogoSize} label={__("Image Size")} onChange={(value)=>{
  setAttributes({themeTwoLogoSize: updateData(themeTwoLogoSize,value) })
}} />}
 {  themeTwoLogo?.type ==="image" &&  <BorderBoxControl

colors={[
  { color: '#72aee6', name: 'Blue 20' },
  { color: '#3582c4', name: 'Blue 40' },
  { color: '#e65054', name: 'Red 40' },
  { color: '#8a2424', name: 'Red 70' },
  { color: '#f2d675', name: 'Yellow 10' },
  { color: '#bd8600', name: 'Yellow 40' }
]}
label="Image Border"
value={themeTwoLogoBorder}
onChange={(value) => setAttributes({ themeTwoLogoBorder: updateData(themeTwoLogoBorder,value) })}
/>}

  { themeTwoLogo?.type ==="image" && <BoxControl label={__("Image Radius","b-blocks")} values={themeTwoLogoRadius} onChange={(value)=>{
      setAttributes({themeTwoLogoRadius: updateData(themeTwoLogoRadius,value) })
    }} />}








<Background  value={puslerBgColor} onChange={(value)=>{
  setAttributes({ puslerBgColor: value })
}}  label={__(` ${themeTwoLogo?.type ==="image"?"Image":"Icon"} Background Color`,"b-blocks")} />

      <PanelRow>
         <Label>{__("Symbol Container Width","b-blocks")} </Label>
          <Device></Device>
         </PanelRow>
  
    <UnitControl value={pulserContentStyleContent?.width[device]} onChange={(value)=>{
            setAttributes({pulserContentStyleContent: updateData(pulserContentStyleContent,value,"width",device) })
          }} units={[{ value: 'px', label: 'px' }]}    />
            <PanelRow>
         <Label>{__(" Symbol Container Height","b-blocks")} </Label>
          <Device></Device>
         </PanelRow>

     <UnitControl value={pulserContentStyleContent?.height[device]} onChange={(value)=>{
            setAttributes({pulserContentStyleContent: updateData(pulserContentStyleContent,value,"height",device) })
          }} units={[{ value: 'px', label: 'px' }]}   />


        

<BoxControl className="mt8" label={__("Symbol Container Radius","b-blocks")} values={pulserContentRadius} onChange={(value)=>{
          setAttributes({ pulserContentRadius: value })
        }} ></BoxControl>



   







<BorderBoxControl

    colors={[
      { color: '#72aee6', name: 'Blue 20' },
      { color: '#3582c4', name: 'Blue 40' },
      { color: '#e65054', name: 'Red 40' },
      { color: '#8a2424', name: 'Red 70' },
      { color: '#f2d675', name: 'Yellow 10' },
      { color: '#bd8600', name: 'Yellow 40' }
    ]}
    label="Animation Border"
    value={borderOne}
    onChange={(value) => setAttributes({ borderOne: updateData(borderOne,value) })}
/>




      </PanelBody>}
      
    </>
  );
};

export default Style;
