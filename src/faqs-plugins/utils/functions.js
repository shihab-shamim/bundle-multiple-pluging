import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};



export const themeSwitch=(theme="theme1",attributes)=>produce(attributes,(draft)=>{

  draft["options"]["selectedTheme"]=theme

  switch(theme){
    case "theme1":
      draft["styles"]["question"]["active"]={
        color: "#451CB3",
        bgType: "solid",
        bg: "#E8DFFF",
        gradient: "linear-gradient(135deg, #E8DFFF, #C8B6FF)"
      };
      draft["styles"]["section"]["padding"]={
        desktop: {
          top: "50px",
          right: "50px",
          bottom: "50px",
          left: "50px"
        },
        tablet: {
          top: "50px",
          right: "50px",
          bottom: "50px",
          left: "50px"
        },
        mobile: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      };
      draft["styles"]["section"]["bg"]={
        type: "solid",
        color: "#F8F9FA",
        gradient: "linear-gradient(135deg, rgb(34,23,23) 0%, rgb(13,13,15) 100%)"
      };
      draft["styles"]["section"]["margin"]={
        desktop: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
      draft["styles"]["section"]["radius"]={
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      };
      draft["options"]["isShowButton"]=true;
      draft["faqs"]={title: "Have Any Question",
        buttonText: "FAQ",
        description: "",
        buttonIcon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"white\" fill-rule=\"evenodd\" d=\"M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z\" clip-rule=\"evenodd\"></path></svg>",
        buttonLink: "#"}
      draft["styles"]["bg"]={type:"solid",color:"#F8F9FA",gradient: ""};
draft["styles"]["question"]["gap"]="0px";
draft["styles"]["question"]["typho"]={
  fontFamily: "Archivo",
  fontCategory: "sans-serif",
  fontWeight: 600,
  fontVariant: "600",
  isUploadFont: true,
  fontSize: {
    desktop: 16,
    tablet: 16,
    mobile: 14
  },
  fontStyle: "normal",
  textTransform: "none",
  textDecoration: "none",
  lineHeight: "1.5",
  letterSpace: "0px"
};
draft["styles"]["question"]["colors"]={color: "#192534",bgType: "solid",bg: ""}
      draft["styles"]["question"]["padding"]={
        top: "5px",
        right: "14px",
        bottom: "5px",
        left: "14px"
      };
      draft["styles"]["answer"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "400",
        isUploadFont: true,
        fontSize: {
          desktop: 16,
          tablet: 16,
          mobile: 14
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "135%",
        letterSpace: "0px"
      };
      draft["styles"]["answer"]["colors"]={
        color: "#616A72",
        bgType: "solid",
        bg: ""
      };
      draft["styles"]["answer"]["padding"]={
        top: "5px",
        right: "5px",
        bottom: "5px",
        left: "5px"
      };
      
      draft["styles"]["answer"]["radius"]={
        top: "10px",
        right: "10px",
        bottom: "10px",
        left: "10px"
      };
      draft["styles"]['gap']={
        desktop: "50px",
        tablet: "40px",
        mobile: "30px"
      };
      
    draft["styles"]["title"]["color"]="#192534";
    draft["styles"]["button"]["colors"]={color: "#FFFFFF",bgType: "solid",bg: "#6328FF"};
    draft["styles"]["button"]["padding"]={top:"4px",right:"8px",bottom:"4px",left:"8px"};
    draft["styles"]["button"]["radius"]={top:"4px",right:"4px",bottom:"4px",left:"4px"};
    draft["styles"]["button"]["typho"]= {fontFamily: "Archivo",fontCategory: "sans-serif",fontWeight: 500,fontVariant: "regular",isUploadFont: true,fontSize: { desktop: 12,tablet:12, mobile: 12},fontStyle: "normal",textTransform: "none", textDecoration: "none", lineHeight: "135%", letterSpace: "0px" };
    draft["faqs"]["faqItems"]={
      titleOne: "General FAQ",
      titleTwo: "General FAQ",
      titleThree: "Support",
    
      general: [
        {
          question: "Does BTCPayServer cost extra?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Does my Voltage Lightning Node connect to BTC Server automatically?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Can I accept payments on chain?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "What is BTC Pay Server?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "How to did handle my data",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "How doesit generate responses",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        }
      ],
    
      generalTwo: [
        {
          question: "Does my Voltage Lightning Node connect to BTC Server?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Can I accept payments on chain?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "What is BTC Pay Server?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        }
      ],
    
      support: [
        {
          question: "Does my Voltage Lightning Node connect to BTC Server?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Can I accept payments on chain?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "What is BTC Pay Server?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        }
      ]
    };
    draft["styles"]["padding"]={
      desktop: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      },
      tablet: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      mobile: {
        top: "5px",
        right: "5px",
        bottom: "5px",
        left: "5px"
      }
    };

    break;

    case "theme2":
      draft["styles"]["section"]["padding"]={
        desktop: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        tablet: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        mobile: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      };
      draft["styles"]["section"]["bg"]={
        type: "solid",
        color: "",
        gradient: ""
      };
      draft["styles"]["section"]["margin"]={
        desktop: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
      draft["styles"]["section"]["radius"]={
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      };
      draft["faqItems"]=[
        {
          question: "Does BTCPayServer cost extra?",
          answer: "No, BTCPayServer is completely free and open-source software."
        },
        {
          question: "Does my Voltage Lightning Node connect to BTC Server automatically?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Can I accept payments on chain?",
          answer: "Yes, you can accept both on-chain and Lightning payments through the platform."
        }
      ];
      draft["options"]["isShowButton"]=true
      draft["styles"]["bg"]={type:"solid",color:"#000000",gradient: "linear-gradient(135deg,rgb(34,23,23) 0%,rgb(13,13,15) 100%)"};
      draft["styles"]["title"]["color"]="rgba(252, 252, 253, 1)";
      draft["styles"]["button"]["colors"]={color: "#000000",bgType: "solid",bg: "#c5fb00"}
      draft["styles"]["title"]["color"]="rgba(252, 252, 253, 1)"
      draft["styles"]["description"]["color"]="rgba(252, 252, 253, 0.7)";
      draft["width"]={
        desktop: "1350px",
        tablet: "768px",
        mobile: "500px"
      }
    
      draft["faqs"]={title: "Frequently asked Questions",
        buttonText: "Contact Us Now",
        description: "Discover clarity and insights as we unravel answers to your questions",
        buttonIcon: "<svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z' clipRule='evenodd'/><path fillRule='evenodd' d='M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z' clipRule='evenodd'/></svg>",
        buttonLink: "#"}
      draft["styles"]["button"]["padding"]={top: '10px',right: '20px', bottom: '10px',left: '20px'};
      draft["styles"]["button"]["radius"]= { top: '8px',right: '8px',bottom: '8px',left: '8px'};
      draft["styles"]["button"]["typho"]= {fontFamily: "Archivo",fontCategory: "sans-serif",fontWeight: 600,fontVariant: "regular",isUploadFont: true,fontSize: { desktop: 18,tablet:15, mobile: 13},fontStyle: "normal",textTransform: "none", textDecoration: "none", lineHeight: "1.35", letterSpace: "0px" };
      draft["styles"]["title"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 700,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 48,
          tablet: 32,
          mobile: 25
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      };
      draft["styles"]["description"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 17,
          tablet: 13,
          mobile: 14
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }
      draft["styles"]["question"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "400",
        isUploadFont: true,
        fontSize: {
          desktop: 18,
          tablet: 16,
          mobile: 14
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "135%",
        letterSpace: "0px"
      };
      draft["styles"]["question"]["colors"]={color: "#fcecfd",bgType: "solid",bg: "#0D0E10"}
      draft["styles"]["question"]["padding"]={
        top: "5px",
        right: "14px",
        bottom: "5px",
        left: "14px"
      };
draft["styles"]["question"]["gap"]="5px";
    draft["options"]["icon"]="<svg  stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z\"></path></svg>"

    draft["styles"]["answer"]["typho"]={
      fontFamily: "Archivo",
      fontCategory: "sans-serif",
      fontWeight: 400,
      fontVariant: "400",
      isUploadFont: true,
      fontSize: {
        desktop: 16,
        tablet: 16,
        mobile: 14
      },
      fontStyle: "normal",
      textTransform: "none",
      textDecoration: "none",
      lineHeight: "135%",
      letterSpace: "0px"
    };
    draft["styles"]["answer"]["colors"]={
      color: "#888",
      bgType: "solid",
      bg: "#0D0E10"
    };
    draft["styles"]["answer"]["padding"]={
      top: "5px",
      right: "5px",
      bottom: "5px",
      left: "5px"
    };
    
    draft["styles"]["answer"]["radius"]={
      top: "10px",
      right: "10px",
      bottom: "10px",
      left: "10px"
    };
    draft["options"]["contentAlignment"]="center";
    draft["styles"]["question"]["active"]={
      color: "#",
      bgType: "",
      bg: "#",
      gradient: ""
    };
    draft["styles"]['gap']={
      desktop: "120px",
      tablet: "40px",
      mobile: "30px"
    };
    draft["styles"]["padding"]={
      desktop: {
        top: "100px",
        right: "50px",
        bottom: "100px",
        left: "50px"
      },
      tablet: {
        top: "80px",
        right: "60px",
        bottom: "80px",
        left: "60px"
      },
      mobile: {
        top: "5px",
        right: "5px",
        bottom: "5px",
        left: "5px"
      }
    };

    
    
    


    break;
     
    case "theme3":
      draft["styles"]["section"]["padding"]={
        desktop: {
          top: "50px",
          right: "50px",
          bottom: "50px",
          left: "50px"
        },
        tablet: {
          top: "50px",
          right: "50px",
          bottom: "50px",
          left: "50px"
        },
        mobile: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      };
      draft["styles"]["section"]["bg"]={
        type: "solid",
        color: "#F8F9FA",
        gradient: "linear-gradient(135deg, rgb(34,23,23) 0%, rgb(13,13,15) 100%)"
      };
      draft["styles"]["section"]["margin"]={
        desktop: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
      draft["styles"]["section"]["radius"]={
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      };
      draft["options"]["isShowButton"]=true;
      draft["styles"]["bg"]={type:"solid",color:"#F8F9FA",gradient: "linear-gradient(to right, #ffffff, #007bff)"};
      draft["styles"]["title"]["color"]="#192534";
      draft["styles"]["description"]["color"]="#616A72";
      draft["styles"]["title"]["color"]="#192534";
      draft["styles"]["width"]={
        desktop: "1350px",
        tablet: "768px",
        mobile: "500px"
      }
    
     
      draft["styles"]["title"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 700,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 48,
          tablet: 32,
          mobile: 25
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }
      draft["styles"]["description"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 17,
          tablet: 13,
          mobile: 14
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }


      draft["styles"]["button"]["colors"]={color: "#E8DFFF",bgType: "solid",bg: "#451CB3"};
      draft["styles"]["button"]["padding"]={top: '4px',right: '8px', bottom: '4px',left: '8px'};
      draft["styles"]["button"]["radius"]= { top: '0px',right: '0px',bottom: '0px',left: '0px'};
      draft["styles"]["button"]["typho"]= {fontFamily: "Archivo",fontCategory: "sans-serif",fontWeight: 600,fontVariant: "regular",isUploadFont: true,fontSize: { desktop: 14,tablet:14, mobile: 14},fontStyle: "normal",textTransform: "none", textDecoration: "none", lineHeight: "1.35", letterSpace: "0px" };

      draft["faqs"]={title: "General FAQ",
        buttonText: "Support",
        description: "We’re building a company that recognizes how, when, and where our Paddlers do their best work.",
        buttonIcon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z\" opacity=\".99\"></path><path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413\" opacity=\".5\"></path></svg>",
        buttonLink: "#"}
        draft["styles"]["question"]["typho"]={
          fontFamily: "Archivo",
          fontCategory: "sans-serif",
          fontWeight: 400,
          fontVariant: "400",
          isUploadFont: true,
          fontSize: {
            desktop: 18,
            tablet: 16,
            mobile: 14
          },
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: "135%",
          letterSpace: "0px"
        };
        draft["styles"]["question"]["colors"]={color: "#192534",bgType: "solid",bg: "#ffffff"}
        draft["styles"]["question"]["padding"]={
          top: "5px",
          right: "14px",
          bottom: "5px",
          left: "14px"
        };

        draft["styles"]["question"]["gap"]="5px";
       draft["options"]["icon"]="<svg  stroke-width=\"0\" viewBox=\"0 0 512 512\" height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z\"></path></svg>";
       draft["styles"]["answer"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "400",
        isUploadFont: true,
        fontSize: {
          desktop: 16,
          tablet: 16,
          mobile: 14
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "135%",
        letterSpace: "0px"
      };
      draft["styles"]["answer"]["colors"]={
        color: "#253544",
        bgType: "solid",
        bg: "#FFFFFF"
      };
      draft["styles"]["answer"]["padding"]={
        top: "5px",
        right: "5px",
        bottom: "5px",
        left: "5px"
      };
      draft["styles"]["answer"]["radius"]={
        top: "10px",
        right: "10px",
        bottom: "10px",
        left: "10px"
      };
      draft["options"]["contentAlignment"]="center";
      draft["styles"]["question"]["active"]={
        color: "#451CB3",
        bgType: "solid",
        bg: "#E8DFFF",
        gradient: "linear-gradient(135deg, #E8DFFF, #C8B6FF)"
      };
      draft["styles"]['gap']={
        desktop: "120px",
        tablet: "40px",
        mobile: "30px"
      };
       draft["styles"]["padding"]={
        desktop: {
          top: "100px",
          right: "50px",
          bottom: "100px",
          left: "50px"
        },
        tablet: {
          top: "80px",
          right: "60px",
          bottom: "80px",
          left: "60px"
        },
        mobile: {
          top: "5px",
          right: "5px",
          bottom: "5px",
          left: "5px"
        }
      };
      draft["faqItems"]=[
        {
          question: "Does BTCPayServer cost extra?",
          answer: "No, BTCPayServer is completely free and open-source software."
        },
        {
          question: "Does my Voltage Lightning Node connect to BTC Server automatically?",
          answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically."
        },
        {
          question: "Can I accept payments on chain?",
          answer: "Yes, you can accept both on-chain and Lightning payments through the platform."
        }
      ];
  
      

    break;


  }
})