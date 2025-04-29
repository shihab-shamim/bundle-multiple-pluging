import { getBackgroundCSS, getBoxCSS, getColorsCSS,getTypoCSS,getBorderBoxCSS, isValidCSS} from '../../../../../bpl-tools/utils/getCSS';
import generateCSS from "../../../../../bpl-tools/Advanced/generateCSS"
import { mobileBreakpoint, tabBreakpoint } from '../../../../../bpl-tools/utils/data';

const Style = ({ attributes, id,isBackend=false }) => {
	const {advanced ,styles,alignment,borderOne,themeTwoLogoRadius,themeTwoLogoBorder,themeTwoLogoColor,themeTwoLogoSize,themeTwoLogo,pulserContentStyle,pulserRadius,puslerBgColor,pulserContentStyleContent,pulserContentRadius,layout,options} = attributes;
	const {ticker}=styles;
	
	

	const mainSl = `#${id}`;
	const tricker = `${mainSl} .tricker`;
	const name = `${tricker} .name`;
	const container=`${mainSl} .container`;
	const wrapperContainer=`${mainSl} .wrapper-container`;
	const contentContainer=`${mainSl} .content-container`;
	const tickerList =`${mainSl} .ticker-list`;
	const pulserContent =`${mainSl} .pulser__content`;
	const imgFluid =`${mainSl} .img-fluid`;
	const pulser =`${mainSl} .pulser`;
	const theme3Ticker =`${mainSl} .theme3Ticker`;
	const mainWrapper =`${mainSl} .mainWrapper`;
	const  tickerButton=`${theme3Ticker} .tickerButton`;
	const  tickerButtonScroller=`${theme3Ticker} .theme3Ticker-scroller-x__list`;
	const  tickerButtonScrollerSecond=`${theme3Ticker} .theme3Ticker-scroller-x__list_second`;
	const  listRow=`${theme3Ticker} .list-row`;
	const  themeName=`${theme3Ticker} .name`;
	const  iconImage=`${theme3Ticker} .iconImage`;
	
	



	return <>
	<style dangerouslySetInnerHTML={{
		
		__html: `
		${getTypoCSS('', ticker?.typho)?.googleFontLink}
        ${getTypoCSS(name, ticker?.typho)?.styles}	
        ${getTypoCSS(themeName, ticker?.typho)?.styles}	

		
		${mainSl}{
		
		margin:0 auto;		
		}
	
		${mainWrapper}{
		display:flex;
		justify-content:${alignment};
			
		}
		
		

		.ticker-scroller-x__list:hover,${tickerButtonScroller}:hover,${tickerButtonScrollerSecond}:hover
		{
			animation-play-state:${options?.hoverStop?"paused":"running"}
		}
			${tricker}{
		${getColorsCSS(ticker?.colors)}
		padding:${getBoxCSS(ticker?.padding)};
		border-radius:${getBoxCSS(ticker?.radius)};
		gap:${ticker?.gap};

	  }
		${tickerList},${listRow}{
		display:flex;
		gap:${layout?.ticker?.rowGap} !important;
		}
		${name} a , .buttonLink{
		color:${ticker?.colors?.color}
			
           }
		${tricker} svg{
		fill:${ticker?.icon?.color};
		width:${ticker?.icon?.size};
		height:${ticker?.icon?.size};
		}
		${container}{
			
        mask: linear-gradient(90deg, transparent, #fff ${ options.effect?"20%":"0"}, #fff ${ options.effect?"80%":"100%"}, transparent);

			
			}

			
			${wrapperContainer}{
			${isValidCSS("min-height",styles?.height.desktop)}
			width:${styles?.width.desktop};
			
			
				
			}
			${contentContainer}{
			gap:${layout?.ticker?.columnGap};
			
			}    
			
			.ticker-scroller-x[data-speed=slow]
				{
					--_animation-duration:${options?.animationDuration}s;
				}
					${tickerButtonScroller}{
					  animation: theme3Ticker-scroll var(--_animation-duration,${options?.animationDuration}s) ${options?.firstColumnDirection === "left" ? "reverse" : options?.firstColumnDirection === "right" ? "forwards" : ""} linear infinite;
					}
					 ${tickerButtonScrollerSecond}{
					 animation: theme3Ticker-scroll var(--_animation-duration, ${options?.animationDuration}s) ${options?.secondeColumnDirection === "left" ? "reverse" : options?.secondeColumnDirection === "right" ? "forwards" : ""} linear infinite;

					 }
					
					 .ticker-scroller-x__list{

					 	animation:scroll var(--_animation-duration,${options?.animationDuration}s) var(--_animation-direction,forwards) linear infinite;
						

					 }
						${pulserContent}{
							width:${pulserContentStyleContent?.width.desktop};
							height:${pulserContentStyleContent?.height.desktop};
							border-radius:${getBoxCSS(pulserContentRadius)};
							${getBackgroundCSS(puslerBgColor)}
							
						}
						${pulserContent}::before{
						 ${getBorderBoxCSS(borderOne)}
						
						}
						${pulserContent}::after{
						 ${getBorderBoxCSS(borderOne)}
						
						}
						 ${imgFluid}{
							width: ${themeTwoLogoSize};
							height:  ${themeTwoLogoSize};
							border-radius:${getBoxCSS(themeTwoLogoRadius)};
							${themeTwoLogo?.type ==="image"?getBorderBoxCSS(themeTwoLogoBorder):""}
							
						}
							 ${imgFluid} svg {
								fill: ${themeTwoLogoColor};  
								width: ${themeTwoLogoSize};
								height: ${themeTwoLogoSize};
								${themeTwoLogo?.type ==="icon"?getBorderBoxCSS(themeTwoLogoBorder):""}
								border-radius:${getBoxCSS(themeTwoLogoRadius)};
							}
							
							${pulser}{
							width:${pulserContentStyle?.width.desktop};
							height:${pulserContentStyle?.height.desktop};
							background:${pulserContentStyle?.bg};
							border-radius:${getBoxCSS(pulserRadius)};
							-webkit-backdrop-filter:blur(${pulserContentStyle?.blur || "15px"});
							backdrop-filter:blur(${pulserContentStyle?.blur || "15px"});		}

							${tickerButton}{
							gap:${ticker?.gap};
							${getColorsCSS(ticker?.colors)}
		                     padding:${getBoxCSS(ticker?.padding)};
	                     	border-radius:${getBoxCSS(ticker?.radius)};
							}

							${iconImage}{
								width: ${styles?.ticker?.icon?.image?.width};
								height: ${styles?.ticker?.icon?.image?.height};
								border-radius:${getBoxCSS(ticker?.icon?.radius)};

							   }
e					   



						${tabBreakpoint} { 
							   ${wrapperContainer} { 
							   ${isValidCSS("min-height",styles?.height.tablet)}
							   width:${styles?.width.tablet};
							   } 
							   ${pulser}{
							 width:${pulserContentStyle?.width.tablet};
							height:${pulserContentStyle?.height.tablet};
							${pulserContent}{
							width:${pulserContentStyleContent?.width.tablet};
							height:${pulserContentStyleContent?.height.tablet};
							}
							   }
							  
							  }
							
							${mobileBreakpoint} {  
							   ${pulser}{
							 width:${pulserContentStyle?.width.mobile};
							height:${pulserContentStyle?.height.mobile};
							display:${options?.isAnimationShowMobile?"none":""};
							   }
							   ${pulserContent}{
								width:${pulserContentStyleContent?.width.mobile};
								height:${pulserContentStyleContent?.height.mobile};
								}
								
                            ${wrapperContainer}{ 
							${isValidCSS("min-height",styles?.height.mobile)}
							width:${styles?.width.mobile};
							} 

							}

						   
	`}} />
	<style dangerouslySetInnerHTML={{__html:`${generateCSS(id,advanced,isBackend)}`}} />
	</>
}
export default Style; 

