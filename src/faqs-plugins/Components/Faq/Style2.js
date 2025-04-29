import { useState } from "react";
import FaqItem from "../../utils/FaqItem";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";

const Style2 = ({ faqs, setAttributes, attributes, isView }) => {
  const words = faqs?.title.split(" ");
  const { faqItems } = attributes;
  const lastWord = words.pop();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="container">
      <div className="faq-wrapper">
        <div className="faq-left">
          <h1 className="title">
            {words.join(" ")} <span className="highlight">{lastWord}</span>
          </h1>

          {isView ? (
            <p className="description">{faqs?.description}</p>
          ) : (
            <RichText
              placeholder="Enter Your Description Here......"
              value={faqs?.description}
              className="description"
              onChange={(value) => {
                setAttributes({ faqs: updateData(faqs, value, "description") });
              }}
            />
          )}
          {attributes?.options?.isShowButton &&
            (isView ? (
              <a
                href={faqs?.buttonLink}
                target={attributes?.options?.isLinkTarget ? "_blank" : "_self"}
                className="contact-btn"
                rel="noreferrer"
              >
                <span className="contact-btn-text">{faqs?.buttonText}</span>
                <span
                  className="buttonIcon"
                  dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }}
                ></span>
              </a>
            ) : (
              <span className="contact-btn">
                <RichText
                  className="contact-btn-text"
                  value={faqs?.buttonText}
                  onChange={(value) =>
                    setAttributes({
                      faqs: updateData(faqs, value, "buttonText"),
                    })
                  }
                />
                <span
                  className="buttonIcon"
                  dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }}
                ></span>
              </span>
            ))}
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

export default Style2;
