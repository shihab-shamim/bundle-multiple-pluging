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

 export const themeSwitch = (theme = 'theme1', attributes) => produce(attributes, (draft) => {
  draft['selectTheme'] = theme;
  switch (theme) {
      case 'theme1':
          
        draft['styles']['width'] = {"desktop":"100%","tablet":"100%","mobile":"100%"};
        draft['styles']['height'] = {"desktop":"165px","tablet":"165px","mobile":"165px"};
        draft['styles']['ticker']["typho"] = {"fontWeight":"700","fontSize":{"desktop":18,"tablet":18,"mobile":18},"fontFamily":"sans-serif"};
        draft['layout']["ticker"]["columnGap"] = "16px";
        draft['layout']["ticker"]["rowGap"] = "15px";
        draft['styles']["ticker"]["padding"] ={"top":"10px","right":"20px","bottom":"10px","left":"20px"};
        draft['styles']["ticker"]["radius"] ={"top":"10px","right":"10px","bottom":"10px","left":"10px"};
        draft['options']["duplicateColumn"] = true;
        draft['options']["hoverStop"] = true;
        draft['options']["effect"] = true;
        draft['options']["isAnimationShowMobile"] = true;
        draft['options']["pulserAnimation"] = false;
        draft['options']["animationDuration"] = 120;
        draft['options']["firstColumnDirection"] = "right";
        draft['options']["secondeColumnDirection"] = "left";
        draft["styles"]["ticker"]["colors"]={"color": "#b6b6b8","bg": "#191a1c"};
        draft["styles"]["ticker"]["rightSideColors"]={ "color": "#b6b6b8","bg": "#170945"};
        draft["styles"]["ticker"]["padding"]={  "top": "10px","right": "20px","bottom": "10px","left": "20px"};
        draft["styles"]["ticker"]["radius"]={  "top": "10px","right": "10px","bottom": "10px","left": "10px"};
        draft["styles"]["ticker"]["gap"]="6px";
        draft["styles"]["ticker"]["icon"]["size"]="16px";
        draft["advanced"]["background"]["normal"]["color"]="#030303";
        draft["advanced"]["dimension"]["padding"]={"desktop":{"top":"10px","right":"0px","bottom":"10px","left":"0px"},"mobile":{"top":"10px","right":"0px","bottom":"10px","left":"0px"},"tablet":{"top":"10px","right":"0px","bottom":"10px","left":"0px"}};
        draft["advanced"]["dimension"]["margin"]={"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}};
        draft["advanced"]["borderShadow"]["normal"]["radius"]={"top":"0px","right":"0px","bottom":"0px","left":"0px"};



         break;
      case 'theme2':
        draft['styles']['width'] = {"desktop":"100%","tablet":"100%","mobile":"100%"};
          draft['styles']['height'] = {"desktop":"379px","tablet":"379px","mobile":"300px"}
          draft['styles']['ticker']["typho"] = {"fontWeight":"700","fontSize":{"desktop":18,"tablet":18,"mobile":18},"fontFamily":"sans-serif"};
          draft['layout']["ticker"]["gap"] = "15px";
          draft['styles']["ticker"]["padding"] ={"top":"10px","right":"20px","bottom":"10px","left":"20px"};
          draft['styles']["ticker"]["radius"] ={"top":"10px","right":"10px","bottom":"10px","left":"10px"};
          draft['layout']["ticker"]["columnGap"] = "16px";
          draft['options']["hoverStop"] = true;
        draft['options']["effect"] = false;
        draft['options']["duplicateColumn"] = true;
        draft['options']["isAnimationShowMobile"] = true;
        draft['options']["pulserAnimation"] = true;
        draft['options']["animationDuration"] = 120;
        draft['options']["firstColumnDirection"] = "right";
        draft['options']["secondeColumnDirection"] = "left";
        draft["styles"]["ticker"]["colors"]={"color": "#b6b6b8","bg": "#191a1c"};
        draft["styles"]["ticker"]["rightSideColors"]={ "color": "#b6b6b8","bg": "#170945"};
        draft["styles"]["ticker"]["padding"]={  "top": "10px","right": "20px","bottom": "10px","left": "20px"};
        draft["styles"]["ticker"]["radius"]={  "top": "10px","right": "10px","bottom": "10px","left": "10px"};
        draft["styles"]["ticker"]["gap"]="6px";
        draft["styles"]["ticker"]["icon"]["size"]="16px";
        draft["advanced"]["background"]["normal"]["color"]="#040116";
        draft["advanced"]["dimension"]["padding"]={"desktop":{"top":"10px","right":"50px","bottom":"10px","left":"50px"},"mobile":{"top":"10px","right":"20px","bottom":"10px","left":"20px"},"tablet":{"top":"10px","right":"50px","bottom":"10px","left":"50px"}};
        draft["advanced"]["dimension"]["margin"]={"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}};
        draft["advanced"]["borderShadow"]["normal"]["radius"]={"top":"0px","right":"0px","bottom":"0px","left":"0px"};






        
          break;
          case 'theme3':
            draft['styles']['width'] = {"desktop":"100%","tablet":"100%","mobile":"100%"};
            draft['styles']['height'] = {"desktop":"165px","tablet":"165px","mobile":"165px"};
            draft['layout']["ticker"]["columnGap"] = "10px";
            draft['styles']['ticker']["typho"] = {"fontWeight":"700","fontSize":{"desktop":66,"tablet":66,"mobile":30},"fontFamily":"sans-serif"};
            draft["styles"]["ticker"]["colors"]={"color": "#192534","bg": ""};
            draft['styles']["ticker"]["padding"] ={"top":"0px","right":"0px","bottom":"0px","left":"0px"};
             draft['styles']["ticker"]["radius"] ={"top":"0px","right":"0px","bottom":"0px","left":"0px"};
             draft['styles']["ticker"]["icon"]["radius"] ={"top":"0px","right":"0px","bottom":"0px","left":"0px"};
             draft['styles']["ticker"]["gap"] ="16px";
             draft['styles']["ticker"]["icon"]["image"] ={"width":"48px","height":"48px"};
            draft['options']["pulserAnimation"] = false;
            draft["advanced"]["background"]["normal"]["color"]="#FFFFFF";
            draft['options']["effect"] = false;
            draft['options']["duplicateColumn"] = false;
            draft['options']["isAnimationShowMobile"] = true;
            draft['options']["animationDuration"] = 120;
            draft["advanced"]["dimension"]["padding"]={"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}};

          break;
  }
});
