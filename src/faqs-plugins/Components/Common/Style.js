import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles, alignment, options } = attributes;

  const mainSl = `#${id}`;
  const wrapperSl = `${mainSl} .wrapper`;
  const containerSl = `${wrapperSl} .container`;
  const faqWrapperSl = `${containerSl} .faq-wrapper`;

  const faqAnswerSl = `${containerSl} .faq-answer`;
  const faqQuestionSl = `${containerSl} .faq-question`;
  const toggleBtnSl = `${faqQuestionSl} .toggle-btn`;
  const iconSl = `${toggleBtnSl} .icon`;
  const questionSl = `${containerSl} .question`;
  const activeSl = `${containerSl} .active`;
  const faqLeftSl = `${faqWrapperSl} .faq-left`;
  const faqTitle = `${wrapperSl} .title`;
  const faqhighlighteSl = `${faqLeftSl} .highlight`;
  const faqDescriptionSl = `${faqLeftSl} .description`;

  const faqContactButtonrSl = `${wrapperSl} .contact-btn`;

  const defaultThemeContainerSl = `${wrapperSl} .defaultThemeContainer`;
  const supportSectionrSl = `${wrapperSl} .support-section`;
  const customShadowSl = `${containerSl} .custom-shadow`;
  const cardTitleSl = `${customShadowSl} .card-title`;

  const getActiveColorsCSS = (colors) => {
    if (colors?.bgType === "solid") {
      const color = `color: ${styles?.question?.active?.color} !important;`;
      const background = ` background-color: ${styles?.question?.active?.bg} !important; `;

      return `${color} ${background}`;
    }
    if (colors?.bgType === "gradient") {
      const color = `color: ${styles?.question?.active?.color} !important;`;
      const background = ` background: ${styles?.question?.active?.gradient} !important; `;

      return `${color} ${background}`;
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `

				${getTypoCSS("", styles?.question?.typho)?.googleFontLink}
				${getTypoCSS("", styles?.title?.typho)?.googleFontLink}
				${getTypoCSS("", styles?.description?.typho)?.googleFontLink}
				${getTypoCSS("", styles?.button?.typho)?.googleFontLink}
				${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
		
		
				${getTypoCSS(questionSl, styles?.question?.typho)?.styles}
				${getTypoCSS(faqContactButtonrSl, styles?.button?.typho)?.styles}
				${getTypoCSS(faqTitle, styles?.title?.typho)?.styles}
				${getTypoCSS(faqhighlighteSl, styles?.title?.typho)?.styles}
				${getTypoCSS(faqDescriptionSl, styles?.description?.typho)?.styles}
				${getTypoCSS(cardTitleSl, styles?.card?.title?.typo)?.styles}

				${faqContactButtonrSl} svg{
				fill:${styles?.button?.colors?.color};
				}
				
				${cardTitleSl}{
				    color:${styles?.card?.title?.color};
				}
				
				${customShadowSl}{
			
				background-color:${styles?.card?.bg};
				padding:${getBoxCSS(styles?.card?.padding)};
				border-radius:${getBoxCSS(styles?.card?.radius)};
				box-shadow:${getMultiShadowCSS(styles?.card?.shadow)}!important;
				}

				${faqWrapperSl}{
				grid-template-columns:${
          options?.selectedTheme === "theme1"
            ? "1fr 1fr"
            : " minmax(200px, 500px) auto"
        };
				gap:${styles?.gap?.desktop};

				}
				${activeSl}{
				${getActiveColorsCSS(styles?.question?.active)}

				}
				
				${faqDescriptionSl}{
				color:${styles?.description?.color};
				}
				
				${faqTitle}{
				color:${styles?.title?.color}
				}

				${faqQuestionSl}{
			${getColorsCSS(styles?.question?.colors)}
			padding:${getBoxCSS(styles?.question?.padding)};
			margin-bottom:${styles?.question?.gap};
			margin-top:${styles?.question?.gap};
			
			
				}
			${faqAnswerSl}{
				${getColorsCSS(styles?.answer?.colors)}
		
				border-radius:${getBoxCSS(styles?.answer?.radius)};
				
				.faq-answer-dec{
				padding:${getBoxCSS(styles?.answer?.padding)};
				
			}
			
			}
			${faqContactButtonrSl}{
				${getColorsCSS(styles?.button?.colors)}
				padding:${getBoxCSS(styles?.button?.padding)};
				border-radius:${getBoxCSS(styles?.button?.radius)};
			}
			${iconSl} svg {
			fill:${styles?.question?.colors?.color};
			
			}
		
				${wrapperSl}{
					justify-content: ${alignment};
					${getBackgroundCSS(styles?.section?.bg)}
					padding:${getBoxCSS(styles?.section?.padding?.desktop)};
					margin:${getBoxCSS(styles?.section?.margin?.desktop)};
				    border-radius:${getBoxCSS(styles?.section?.radius)};


		
				
				}
				${faqhighlighteSl} {
				${getBackgroundCSS(styles?.title?.highlightColor)}
				
					
				}
					
				
				${containerSl}{
				${options?.selectedTheme === "theme1" ? "" : getBackgroundCSS(styles?.bg)}
				padding:${
          options?.selectedTheme === "theme1"
            ? ""
            : getBoxCSS(styles?.padding.desktop)
        } ;
				margin:${
          options?.selectedTheme === "theme1"
            ? ""
            : getBoxCSS(styles?.margin.desktop)
        } ;
				max-width:${options?.selectedTheme === "theme1" ? "" : styles?.width?.desktop};
				border-radius:${
          options?.selectedTheme === "theme1" ? "" : getBoxCSS(styles?.radius)
        };
				justify-content: ${
          options?.selectedTheme === "theme1" ? "" : options?.contentAlignment
        };

				
		
				}
				${supportSectionrSl}{
				margin-top:${styles?.gap?.desktop};
				}

				${defaultThemeContainerSl}{
				${getBackgroundCSS(styles?.bg)}
				padding:${getBoxCSS(styles?.padding.desktop)} ;
				margin:${getBoxCSS(styles?.margin.desktop)} ;
				max-width:${styles?.width?.desktop};
				border-radius:${getBoxCSS(styles?.radius)};
				justify-content: ${options?.contentAlignment};


				}
		
		
				${tabBreakpoint}{
					${wrapperSl}{
						
						padding:${getBoxCSS(styles?.section?.padding?.tablet)};
						margin:${getBoxCSS(styles?.section?.margin?.tablet)};

					
					}

					margin-top:${styles?.gap?.tablet};

					${containerSl}{
				padding:${getBoxCSS(styles?.padding.tablet)};
				margin:${getBoxCSS(styles?.margin.tablet)} ;
				max-width:${styles?.width?.tablet};
		
		
					}
					${defaultThemeContainerSl}{
					padding:${getBoxCSS(styles?.padding.tablet)} ;
					}
					${faqWrapperSl}{
				grid-template-columns:${options?.selectedTheme === "theme1" ? "1fr" : " 1fr"};

				gap:${styles?.gap?.tablet};
				}
				
				
				}
		
				
					
				
				
				

				${mobileBreakpoint}{
					${wrapperSl}{
						margin:${getBoxCSS(styles?.section?.margin?.mobile)};
						
					padding:${getBoxCSS(styles?.section?.padding?.mobile)};
				
				}

					${defaultThemeContainerSl}{
						padding:${getBoxCSS(styles?.padding.mobile)} ;
						}
					${faqWrapperSl}{
						gap:${styles?.gap?.mobile};
				grid-template-columns:${options?.selectedTheme === "theme1" ? "1fr" : " 1fr"};
				${supportSectionrSl}{
					margin-top:${styles?.gap?.mobile};
					}

					}
					${containerSl}{
					padding:${getBoxCSS(styles?.padding.mobile)};
				margin:${getBoxCSS(styles?.margin.mobile)} ;
				max-width:${styles?.width?.mobile};
				
					}
				
				}

				
		
		
			`,
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
			${getTypoCSS("", styles?.answer?.typho)?.googleFontLink}
			${getTypoCSS(faqAnswerSl, styles?.answer?.typho)?.styles}
		
			`,
        }}
      />
    </>
  );
};
export default Style; 


