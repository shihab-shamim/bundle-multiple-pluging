import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Faq from "./Components/Faq/Faq";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-faq-blocks"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <Faq isView={true} attributes={attributes} />
      </>
    );

     blockNameEl?.removeAttribute("data-attributes");
  });
});
