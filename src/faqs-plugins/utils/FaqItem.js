import { RichText } from "@wordpress/block-editor";
import { updateData } from "./functions";

const FaqItem = ({
  question,
  answer,
  isActive,
  onClick,
  attributes,
  setAttributes,
  isView,
  index,
  faqCategory,
}) => {
  const { options, faqItems, faqs } = attributes;


  return (
    <div className={`faq-item`}>
      <div
        className={`faq-question ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {isView ? (
          <RichText.Content value={question} tagName="h3" className="question"></RichText.Content>
        ) : (
          <RichText
            placeholder="Enter Your Questions Here..."
            className="question"
            value={question}
            tagName="h3"
            onChange={(value) => {
              if (options?.selectedTheme === "theme1") {
                setAttributes({
                  faqs: {
                    ...faqs,
                    faqItems: {
                      ...faqs?.faqItems,
                      [faqCategory]: updateData(
                        faqs?.faqItems?.[faqCategory],
                        value,
                        index,
                        "question"
                      ),
                    },
                  },
                });
              } else {
                setAttributes({
                  faqItems: updateData(faqItems, value, index, "question"),
                });
              }
            }}
          />
        )}
        <button className="toggle-btn">
          <span
            className="icon"
            dangerouslySetInnerHTML={{ __html: options?.icon }}
          ></span>
        </button>
      </div>
      <div
        className={`faq-answer`}
        style={{
          maxHeight: isActive ? "400px" : "0",
          padding: isActive ? "10px 10px" : "0px 10px",
        }}
      >
        
        {isView ? (
          <RichText.Content value={answer}  tagName="p" className="faq-answer-dec"></RichText.Content>
        ) : (
          <RichText
            placeholder="Enter Your Answer Here..."
            className="faq-answer-dec"
            value={answer}
            tagName="p"
            onChange={(value) => {
              if (options?.selectedTheme === "theme1") {
                setAttributes({
                  faqs: {
                    ...faqs,
                    faqItems: {
                      ...faqs?.faqItems,
                      [faqCategory]: updateData(
                        faqs?.faqItems?.[faqCategory],
                        value,
                        index,
                        "answer"
                      ),
                    },
                  },
                });
              } else {
                setAttributes({
                  faqItems: updateData(faqItems, value, index, "answer"),
                });
              }
            }}
          />
        )}
      </div>
    </div>
  );
};
export default FaqItem;
