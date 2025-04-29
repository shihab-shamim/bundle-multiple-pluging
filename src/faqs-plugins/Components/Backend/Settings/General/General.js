import { __ } from "@wordpress/i18n";

import {
  FormToggle,
  PanelBody,
  PanelRow,
  SelectControl,
  TextControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { contentAlignment, themesOption } from "../../../../utils/options";
import { themeSwitch, updateData } from "../../../../utils/functions";
import {
  BButtonGroup,
  Device,
  ItemsPanel,
  Label,
} from "../../../../../../../bpl-tools/Components";
import FaqSetting from "../../../Faq/FaqSetting";
import FaqItems from "../../../Faq/FaqItems";

const General = ({ attributes, setAttributes, device }) => {
  const { options, faqs, styles } = attributes;
  const { selectedTheme } = options;

  const getValueByPath = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const general = getValueByPath(attributes, "faqs.faqItems.general");
  const generalTwo = getValueByPath(attributes, "faqs.faqItems.generalTwo");
  const support = getValueByPath(attributes, "faqs.faqItems.support");

  const newItem = {
    question: "New Questions?",
    answer: "New Answer.",
  };
  const handleNewItem = (type) => {
    const items = faqs?.faqItems[type];
    const updatedItem = [...items, newItem];
    setAttributes({ faqs: updateData(faqs, updatedItem, "faqItems", type) });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Themes", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Select A Style", "b-blocks")}
          labelPosition="left"
          value={selectedTheme}
          options={themesOption}
          onChange={(value) => {
            setAttributes(themeSwitch(value, attributes));
          }}
        />
      </PanelBody>

      {options?.selectedTheme === "theme1" ? (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__(`${faqs?.faqItems?.titleOne}`, "b-blocks")}
            initialOpen={false}
          >
            <TextControl
              label="Title"
              value={faqs?.faqItems?.titleOne}
              onChange={(value) => {
                setAttributes({
                  faqs: updateData(faqs, value, "faqItems", "titleOne"),
                });
              }}
            />
            {general.map((item, index) => (
              <FaqItems
                item={item}
                setAttributes={setAttributes}
                index={index}
                attributes={attributes}
                type="general"
                key={index}
              />
            ))}
            <div className="btnPrimaryContainer">
              <button
                onClick={() => handleNewItem("general")}
                className="btn-primary"
              >
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add New Item
              </button>
            </div>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__(`${faqs?.faqItems?.titleTwo}`, "b-blocks")}
            initialOpen={false}
          >
            <TextControl
              label="Title"
              value={faqs?.faqItems?.titleTwo}
              onChange={(value) => {
                setAttributes({
                  faqs: updateData(faqs, value, "faqItems", "titleTwo"),
                });
              }}
            />
            {generalTwo.map((item, index) => (
              <FaqItems
                item={item}
                setAttributes={setAttributes}
                index={index}
                attributes={attributes}
                type="generalTwo"
                key={index}
              />
            ))}
            <div className="btnPrimaryContainer">
              <button
                onClick={() => handleNewItem("generalTwo")}
                className="btn-primary"
              >
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add New Item
              </button>
            </div>
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__(`${faqs?.faqItems?.titleThree}`, "b-blocks")}
            initialOpen={false}
          >
            <TextControl
              label="Title"
              value={faqs?.faqItems?.titleThree}
              onChange={(value) => {
                setAttributes({
                  faqs: updateData(faqs, value, "faqItems", "titleThree"),
                });
              }}
            />
            {support.map((item, index) => (
              <FaqItems
                item={item}
                setAttributes={setAttributes}
                index={index}
                attributes={attributes}
                type="support"
                key={index}
              />
            ))}
            <div className="btnPrimaryContainer">
              <button
                onClick={() => handleNewItem("support")}
                className="btn-primary"
              >
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add New Item
              </button>
            </div>
          </PanelBody>
        </>
      ) : (
        <PanelBody
          className="bPlPanelBody"
          title={__(`FAQS!`, "b-blocks")}
          initialOpen={false}
        >
          <ItemsPanel
            newItem={{ question: "New Question?", answer: "New Answer." }}
            design="sortable"
            attributes={attributes}
            setAttributes={setAttributes}
            arrKey="faqItems"
            itemLabel="FAQ"
            ItemSettings={FaqSetting}
          />{" "}
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "b-blocks")}
        initialOpen={false}
      >
        <TextControl
          placeholder="Title..."
          label="Title"
          value={faqs?.title}
          onChange={(value) => {
            setAttributes({ faqs: updateData(faqs, value, "title") });
          }}
        />
        {options?.selectedTheme === "theme1" ? (
          ""
        ) : (
          <TextControl
            placeholder="Description..."
            label="Descriptions"
            value={faqs?.description}
            onChange={(value) => {
              setAttributes({ faqs: updateData(faqs, value, "description") });
            }}
          />
        )}

        <Label>
          Show Button{" "}
          <FormToggle
            checked={options?.isShowButton}
            onChange={() =>
              setAttributes({
                options: { ...options, isShowButton: !options?.isShowButton },
              })
            }
          />
        </Label>

        {options?.isShowButton && (
          <>
            {" "}
            <TextControl
              value={faqs?.buttonText}
              label="Button Text"
              onChange={(value) =>
                setAttributes({ faqs: updateData(faqs, value, "buttonText") })
              }
            />
            <TextControl
              value={faqs?.buttonLink}
              label="Button Link"
              onChange={(value) =>
                setAttributes({ faqs: updateData(faqs, value, "buttonLink") })
              }
            />
            <Label>
              Open In New Tab{" "}
              <FormToggle
                checked={options?.isLinkTarget}
                onChange={() =>
                  setAttributes({
                    options: {
                      ...options,
                      isLinkTarget: !options?.isLinkTarget,
                    },
                  })
                }
              />
            </Label>
          </>
        )}

        <PanelRow>
          <Label>Gap</Label>

          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.gap[device]}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "gap", device) })
          }
        />

        <BButtonGroup
          style={{ marginTop: "15px" }}
          label={__("Alignment", "b-blocks")}
          options={contentAlignment}
          value={options?.contentAlignment}
          onChange={(value) =>
            setAttributes({
              options: updateData(options, value, "contentAlignment"),
            })
          }
        />
      </PanelBody> 
       
     
    </>
  );
};

export default General;
