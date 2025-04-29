import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { generalStyleTabs, toolTipPresets } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";

import BlockPreview from "./Panel/BlockPreview";
import { themeSwitch } from "../../../utils/functions";

const Settings = ({ attributes, setAttributes, device }) => {
  const { alignment, options } = attributes;

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-b-blocks-test-purpose"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />

        <BlockPreview
          options={toolTipPresets}
          value={options?.selectedTheme}
          onChange={(value) => {
            setAttributes(themeSwitch(value, attributes));
          }}
        ></BlockPreview>
      </BlockControls>
    </>
  );
};
export default Settings;
