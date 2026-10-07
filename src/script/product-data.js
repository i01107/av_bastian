const catalogue = [
  { id: 'wireless-microphone-system-z-ws422-as', name: 'Wireless Microphone System Z-WS422-AS', brand: 'TOA', category: 'Microphone', badge: 'Professional', image: 'https://toa.co.id/document/18398-z-ws422-as_thumbnail-thumbnail.jpg' },
  { id: 'chime-microphone-zm-380c-as', name: 'Chime Microphone ZM-380C-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/5548-ec-380-chime-microphone-thumbnail.jpg' },
  { id: 'wireless-microphone-system-z-ws430-as', name: 'Wireless Microphone System Z-WS430-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/18408-z-ws430-as_thumbnail-thumbnail.jpg' },
  { id: 'gooseneck-microphone-zm-380-as', name: 'Gooseneck Microphone ZM-380-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/4509-em-380-gooseneck-microphone-thumbnail.jpg' },
  { id: 'multichannel-power-amplifier-da-1000f-as', name: 'Multichannel Power Amplifier DA-1000F-AS', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/18206-da-1000f-as_thumbnail(01)-thumbnail.jpg' },
  { id: 'wall-mount-voice-evacuation-system-z-fv2148w-as', name: 'Wall-Mount Voice Evacuation System Z-FV2148W-AS', brand: 'TOA', category: 'Amplifier', badge: 'Popular', image: 'https://toa.co.id/document/18342-z-fv2148w-as_thumbnail-thumbnail.jpg' },
  { id: 'digital-mixer-amplifier-za-3248d-as-1', name: 'Digital Mixer Amplifier ZA-3248D-AS 1', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15094-za-3248d-as-1-new-front--thumbnail.jpg' },
  { id: 'power-sequencer-z-pd1835-as-1', name: 'Power Sequencer Z-PD1835-AS 1', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15134-z-pd1835-as-power-sequencer-thumbnail.jpg' },
  { id: 'dual-channel-power-amplifier-da-1250d-as', name: 'Dual-Channel Power Amplifier DA-1250D-AS', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15878-da-1250d-as_thumbnail-thumbnail.jpg' },
  { id: 'dsp-system-dp-sp3', name: 'DSP System DP-SP3', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/en/401-dp-sp3-digital-speaker-processor-thumbnail.jpg' },
  { id: 'line-array-speaker-z-7b-hx-2m', name: 'Line Array Speaker Z-7B-HX-2M', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/17610-z-7b-hx-2m_thumbnail-thumbnail.jpg' },
  { id: 'line-array-speaker-z-7b-hx-as', name: 'Line Array Speaker Z-7B-HX-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/15296-z-7b-hx-as-_front-thumbnail.jpg' },
  { id: 'speaker-system-zs-f05bt-as', name: 'Speaker System ZS-F05BT-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18676-zs-f05bt-as_thumbnail-thumbnail.jpg' },
  { id: 'speaker-system-zs-f08bt-as', name: 'Speaker System ZS-F08BT-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18666-zs-f08bt-as_thumbnail-thumbnail.jpg' },
  { id: 'paging-horn-speaker-zh-625sm', name: 'Paging Horn Speaker ZH-625SM', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18820-zh-625sm_new-thumbnail-thumbnail.jpg' },
  { id: 'subwoofer-system-z-120bfb', name: 'Subwoofer System Z-120BFB', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/en/570-fb-120b-subwoofer-system-thumbnail.jpg' },
  { id: 'subwoofer-z-fb152b-as', name: 'Subwoofer Z-FB152B-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/15350-z-fb152b-as_thumbnail-thumbnail.jpg' },
  { id: 'coaxial-array-speaker-system-zs-hs1500bt', name: 'Coaxial Array Speaker System ZS-HS1500BT', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18866-zs-hs1500bt_thumbnail-thumbnail.jpg' },
  { id: 'mx-st90b-sound-tower', name: 'MX-ST90B Sound Tower', brand: 'Samsung', category: 'Speaker', badge: '', image: '' },
  { id: 'qmc-55-inch-uhd-display', name: 'QMC 55-inch UHD Display', brand: 'Samsung', category: 'Monitor', badge: 'Professional', image: '' },
  { id: 'qb13r-small-signage', name: 'QB13R Small Signage', brand: 'Samsung', category: 'Monitor', badge: '', image: '' },
  { id: 'rally-bar', name: 'Rally Bar', brand: 'Logitech', category: 'Cam', badge: 'Popular', image: '' },
  { id: 'meetup-2', name: 'MeetUp 2', brand: 'Logitech', category: 'Cam', badge: 'New', image: '' },
  { id: '55ul3j-e-digital-signage', name: '55UL3J-E Digital Signage', brand: 'LG', category: 'Monitor', badge: 'Professional', image: '' },
  { id: '86uh5j-h-uhd-signage', name: '86UH5J-H UHD Signage', brand: 'LG', category: 'Monitor', badge: '', image: '' },
];

const categoryCopy = {
  Microphone: { headline: 'Clear communication starts here.', description: 'Explore microphone solutions for professional audio systems, selected for their role in reliable voice capture and communication.' },
  Amplifier: { headline: 'The power behind the system.', description: 'Explore system components for professional audio installations. Ask our team to help confirm compatibility and configuration for your project.' },
  Speaker: { headline: 'Sound designed for the space.', description: 'Explore loudspeaker options for professional audio applications. Our team can help match the product to your room and system requirements.' },
  Monitor: { headline: 'Make every message visible.', description: 'Explore commercial display options for signage and shared spaces. Ask our team about the right format for your installation.' },
  Cam: { headline: 'Bring the room into focus.', description: 'Explore video collaboration products for meeting spaces. Our team can help confirm the right setup for your room.' },
};

const products = catalogue.map((product) => {
  const copy = categoryCopy[product.category] || { headline: 'The right tools for your space.', description: 'Explore this product for your audio-video project. Contact our team for product information and system guidance.' };
  return {
    ...product,
    headline: copy.headline,
    description: copy.description,
    gallery: product.image ? [{ src: product.image, alt: product.name }] : [],
    highlights: ['Product guidance from our team', 'System compatibility support', 'Commercial project assistance'],
  };
});
