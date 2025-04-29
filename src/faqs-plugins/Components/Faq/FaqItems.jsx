import { TextareaControl, TextControl } from "@wordpress/components";
import { updateData } from "../../utils/functions";

const FaqItems = ({ item, index, setAttributes, type, attributes }) => {
  const { faqs } = attributes;
  const items = faqs?.faqItems[type];
  const handleDelete = () => {
    const updatedItems = items.filter((_, ind) => ind !== index);
    setAttributes({ faqs: updateData(faqs, updatedItems, "faqItems", type) });
  };
  const handleCopy = (index) => {
    const updatedItems = [
      ...items.slice(0, index + 1),
      item,
      ...items.slice(index + 1),
    ];

    setAttributes({ faqs: updateData(faqs, updatedItems, "faqItems", type) });
  };
  return (
    <div>
      <TextControl
        label="Question"
        value={item.question}
        onChange={(value) => {
          setAttributes({
            faqs: updateData(faqs, value, "faqItems", type, index, "question"),
          });
        }}
      />
      <TextareaControl
        label="Answer"
        value={item.answer}
        onChange={(value) => {
          setAttributes({
            faqs: updateData(faqs, value, "faqItems", type, index, "answer"),
          });
        }}
      />
      <div className="button-container">
        <button onClick={() => handleDelete()} className="btn btn-delete">
          <div className="icon-delete">
            <span className="delete-line delete-line-1"></span>
            <span className="delete-line delete-line-2"></span>
          </div>
          <span className="btn-text">Delete</span>
        </button>

        <button onClick={() => handleCopy()} className="btn btn-copy">
          <div className="icon-copy">
           <span> <svg fill="white" stroke="currentColor"  strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg></span>
          </div>
          <span className="btn-text">Copy</span>
        </button>
      </div>
    </div>
  );
};

export default FaqItems;
  