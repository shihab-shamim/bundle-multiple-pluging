import { __ } from '@wordpress/i18n';

import { FormToggle, PanelBody, SelectControl,__experimentalNumberControl as NumberControl, Flex  } from '@wordpress/components';
import { themeSwitch, updateData } from '../../../../utils/functions';
import {   ItemsPanel,  Label } from '../../../../../../../bpl-tools/Components';
import TickerSetting from '../Panel/TickerSetting';




const General = ({ attributes, setAttributes,device }) => {
  const { options,selectTheme} = attributes;


  return (
   <>
   <PanelBody className='bPlPanelBody' title={__('Themes', 'b-blocks')} initialOpen={false}>
  <Flex align='center'>
    <Label className="mt0"  >Select A Theme</Label>
  <SelectControl

value={ selectTheme } 
onChange={ ( value ) =>setAttributes(themeSwitch(value, attributes,device))
 }
options={ [
  { value: null, label: 'Select a Theme', disabled: true },
  { value: 'theme1', label: 'Theme-1' },
  { value: 'theme2', label: 'Theme-2' },
  { value: 'theme3', label: 'Theme-3' },
  
] }
/>
  </Flex>


    </PanelBody>
    <PanelBody className='bPlPanelBody' title={__('Tickers', 'b-blocks')} initialOpen={false}>


      <ItemsPanel itemLabel='Ticker' attributes={attributes} setAttributes={setAttributes} arrKey="trickers" design="sortable" ItemSettings={TickerSetting} />
      

      
   

    </PanelBody>


    <PanelBody className='bPlPanelBody' title={__('Options', 'b-blocks')} initialOpen={false} >
      <Label>Mouse Hover Animation Stop   <FormToggle
  
    
	checked={ options?.hoverStop}
	onChange={ () => setAttributes({options:updateData(options,!options?.hoverStop,"hoverStop")}) }
/> </Label>
      <Label>Fog Effect <FormToggle
  
    
	checked={  options.effect}
	onChange={ () => setAttributes({options:updateData(options,!options.effect,"effect")}) }
/> </Label>

      <Label>Pulser Effect <FormToggle
  
    
	checked={ options?.pulserAnimation }
	onChange={ () => setAttributes({options:updateData(options,!options?.pulserAnimation,"pulserAnimation")}) }
/> </Label>
<Label>Link Open New Tab  <FormToggle
  
    
	checked={ options.newTab }
	onChange={ () => setAttributes({options:updateData(options,!options?.newTab,"newTab")}) }
/> </Label>

<Label>Animation Duration(s) <NumberControl
	onChange={ e => setAttributes({options:updateData(options,e,"animationDuration")}) }
	isDragEnabled
	isShiftStepEnabled
	shiftStep={ 1 }
	step={1}
  min={1}

	value={options?.animationDuration}
/>
</Label>

<Label>Direction <SelectControl
	value={ options?.firstColumnDirection } 
	onChange={ ( value ) => { setAttributes( {options:updateData(options,value,"firstColumnDirection")} ) } }
	options={ [
		{ value: null, label: 'Select a Direction', disabled: true },
		{ value: 'right', label: 'Right' },
		{ value: 'left', label: 'Left' },
		
	] }
/></Label>

<Label> Double Column<FormToggle
  
    
	checked={ options?.duplicateColumn }
	onChange={ () => setAttributes({options:updateData(options, ! options?.duplicateColumn,"duplicateColumn")}) }
/> </Label>
{ options?.duplicateColumn && <Label>Direction <SelectControl
	value={ options?.secondeColumnDirection } 
	onChange={ ( value ) => { setAttributes( {options:updateData(options,value,"secondeColumnDirection")} ) } }
	options={ [
		{ value: null, label: 'Select a Direction', disabled: true },
		{ value: 'right', label: 'Right' },
		{ value: 'left', label: 'Left' },
		
	] }
/></Label>}




    </PanelBody>

  
     
    

   </>
  )
}

export default General;
