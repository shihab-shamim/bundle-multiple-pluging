import { useState } from "react";
import FaqItem from "../../utils/FaqItem";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";

const Style3 = ({ faqs, setAttributes, attributes, isView }) => {
  const { faqItems } = attributes;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-wrapper">
        <div className="faq-left">
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
                <span>{faqs?.buttonText}</span>
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
                    setAttributes({
                      faqs: updateData(faqs, value, "buttonText"),
                    })
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

          {isView ? (
            <p className="description">{faqs?.description}</p>
          ) : (
            <RichText
              placeholder="Enter Your Description Here..."
              value={faqs?.description}
              className="description"
              onChange={(value) => {
                setAttributes({ faqs: updateData(faqs, value, "description") });
              }}
            />
          )}
        </div>

        <div className="faq-right">
          {faqItems.map((item, index) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style3;
