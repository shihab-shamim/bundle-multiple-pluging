import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MarqueeText from "../marquee/MarqueeText";


const Edit = (props) => {
  const { attributes, setAttributes, clientId ,device} = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes,device,clientId}} />

      <div {...useBlockProps()}>
        <Style device={device} attributes={attributes} id={`block-${clientId}`} isBackend={true} />

    
       <div className="mainWrapper">
       <MarqueeText attributes={attributes} setAttributes={setAttributes} />
       </div>

      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select('core/editor');
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
