import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MarqueeText from './Components/marquee/MarqueeText';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-ticker-plugins');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		
 
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

				<MarqueeText isShow={true} attributes={attributes}></MarqueeText>
				
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});