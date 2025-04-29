
import {TextControl} from "@wordpress/components"
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { IconLibrary, InlineDetailMediaUpload } from "../../../../../../../bpl-tools/Components";
import { __ } from '@wordpress/i18n';

const TickerSetting = (props) => {
    const {attributes,setAttributes,index}=props;
    const {trickers} =attributes
    const item = trickers[index];

    return (
        <div>
            <TextControl
	label="Name"
	value={item?.name}
	onChange={ e =>{
     setAttributes({trickers: updateData(trickers,e,index,'name')})
  }}
	type="text"
/>
<small>If empty, hide it</small>
<TextControl
	label="Link"
	value={item?.link}
	onChange={ e =>{
     setAttributes({trickers: updateData(trickers,e,index,'link')})
  }}
	type="text"
/>


            {
  attributes?.selectTheme ==="theme3" ?<InlineDetailMediaUpload value={{url:item?.image}}  onChange={(value)=>{
    setAttributes({trickers: updateData(trickers,value?.url,index,'image')})

    
  }} label={__("Image Upload","b-blocks")} placeholder={__("Enter Your Image URL","b-blocks")} />:<IconLibrary label="Icon" value={item?.icon} onChange={(value)=>{
    setAttributes({trickers: updateData(trickers,value,index,'icon')})
  
  }} />
}
        </div>
    );
};

export default TickerSetting;