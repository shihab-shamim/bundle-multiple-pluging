import Style2 from "./Style2";
import Style3 from "./Style3";
import Style1 from "./Style1";

const Faq = ({ isView, setAttributes, attributes }) => {
  const { options, faqs } = attributes;





  return (
    <div className="wrapper">
      {options.selectedTheme === "theme1" && (
        <Style1
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          
          faqs={faqs}
        />
      )}

      {options.selectedTheme === "theme2" && (
        <Style2
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          
          faqs={faqs}
        />
      )}

      {options.selectedTheme === "theme3" && (
        <Style3
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          
          faqs={faqs}
        />
      )}
    </div>
  );
};

export default Faq;
