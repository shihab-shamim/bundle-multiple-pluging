import { useState } from "react";
import FaqItem from "../../utils/FaqItem";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";

const Style1 = ({ faqs, setAttributes, attributes, isView }) => {
  const [leftActiveIndex, setLeftActiveIndex] = useState(null);
  const [rightActiveIndex, setRightActiveIndex] = useState(null);

  const toggleLeftFaq = (index) => {
    setLeftActiveIndex(leftActiveIndex === index ? null : index);
  };

  const toggleRightFaq = (index) => {
    setRightActiveIndex(rightActiveIndex === index ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="defaultThemeContainer">
      <div className="heading">
        {attributes?.options?.isShowButton &&
          (isView ? (
            <a
              href={faqs?.buttonLink}
              target={attributes?.options?.isLinkTarget ? "_blank" : "_self"}
              className="contact-btn"
              rel="noreferrer"
            >
              <span
                className="buttonIcon"
                dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }}
              ></span>
              <span>{faqs?.buttonText} </span>
            </a>
          ) : (
            <span className="contact-btn">
              <span
                className="buttonIcon"
                dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }}
              ></span>
              <RichText
                value={faqs?.buttonText}
                onChange={(value) =>
                  setAttributes({ faqs: updateData(faqs, value, "buttonText") })
                }
              />
            </span>
          ))}
        {isView ? (
          <h1 className="title style-3-title">{faqs?.title}</h1>
        ) : (
          <RichText
            placeholder=" title Here..."
            value={faqs?.title}
            className="title style-3-title"
            onChange={(value) => {
              setAttributes({ faqs: updateData(faqs, value, "title") });
            }}
          />
        )}
      </div>

      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left">
            <div className="custom-shadow">
              {isView ? (
                <h5 className="card-title">{faqs?.faqItems?.titleOne}</h5>
              ) : (
                <RichText
                  className="card-title"
                  value={faqs?.faqItems?.titleOne}
                  onChange={(value) => {
                    setAttributes({
                      faqs: updateData(faqs, value, "faqItems", "titleOne"),
                    });
                  }}
                ></RichText>
              )}
              {faqs?.faqItems?.general.map((item, index) => (
                <FaqItem
                  key={index}
                  isView={isView}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isActive={leftActiveIndex === index}
                  onClick={() => toggleLeftFaq(index)}
                  attributes={attributes}
                  setAttributes={setAttributes}
                  faqCategory="general"
                />
              ))}
            </div>
          </div>

          <div className="faq-right">
            <div className="custom-shadow">
              {isView ? (
                <h5 className="card-title">{faqs?.faqItems?.titleTwo}</h5>
              ) : (
                <RichText
                  className="card-title"
                  value={faqs?.faqItems?.titleTwo}
                  onChange={(value) => {
                    setAttributes({
                      faqs: updateData(faqs, value, "faqItems", "titleTwo"),
                    });
                  }}
                ></RichText>
              )}
              {faqs?.faqItems?.generalTwo.map((item, index) => (
                <FaqItem
                  isView={isView}
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isActive={activeIndex === index}
                  onClick={() => toggleFaq(index)}
                  attributes={attributes}
                  setAttributes={setAttributes}
                  faqCategory="generalTwo"
                />
              ))}
            </div>
            <div className="custom-shadow support-section">
              {isView ? (
                <h5 className="card-title">{faqs?.faqItems?.titleThree}</h5>
              ) : (
                <RichText
                  className="card-title"
                  value={faqs?.faqItems?.titleThree}
                  onChange={(value) => {
                    setAttributes({
                      faqs: updateData(faqs, value, "faqItems", "titleThree"),
                    });
                  }}
                ></RichText>
              )}
              {faqs?.faqItems?.support.map((item, index) => (
                <FaqItem
                  isView={isView}
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isActive={rightActiveIndex === index}
                  onClick={() => toggleRightFaq(index)}
                  attributes={attributes}
                  setAttributes={setAttributes}
                  faqCategory="support"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style1;
