
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import Advanced from "../../../../../../bpl-tools/Advanced"
import { BplBlockPreview } from '../../../../../../bpl-tools/Components';
import theme from "../../../theme.json"
import { updateData } from '../../../utils/functions';

const Settings = ({ attributes, setAttributes,device,clientId}) => {
	const { alignment,advanced } = attributes;

	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-b-blocks-test-purpose' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General device={device} attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style device={device} attributes={attributes} setAttributes={setAttributes} />}

						{'advanced' === tab.name && <Advanced advanced={advanced} onChange={val=>setAttributes({advanced:val})} isPremium={true}  />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} 
			/>
			<BplBlockPreview blocks={theme} value={attributes?.selectTheme} onChange={(value)=>{setAttributes({selectTheme:updateData(attributes,value,"selectTheme")})}} clientId={clientId} />


		</BlockControls>
	</>;
};
export default Settings;