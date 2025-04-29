import { TextControl } from "@wordpress/components";
import { updateData } from "../../utils/functions";
const FaqSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { faqItems } = attributes;
  const item = faqItems[index];

  return (
    <div>
      <TextControl
        label="Question"
        value={item.question}
        onChange={(value) =>
          setAttributes({
            faqItems: updateData(faqItems, value, index, "question"),
          })
        }
      />
      <TextControl
        label="Answer"
        value={item.answer}
        onChange={(value) =>
          setAttributes({
            faqItems: updateData(faqItems, value, index, "answer"),
          })
        }
      />
    </div>
  );
};

export default FaqSetting;
