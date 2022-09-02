import MyComponent from '../../../../slices/HeroSectionCard';

export default {
  title: 'slices/HeroSectionCard'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_type":"primary","button_link":{"link_type":"Web","url":"http://twitter.com"},"button_text":"Click here"}],"primary":{"title":[{"type":"heading1","text":"Period","spans":[]}],"description":[{"type":"paragraph","text":"Mollit dolore exercitation minim pariatur do dolore proident. Labore velit ullamco non veniam culpa nisi dolore eu velit occaecat mollit ut consequat consequat. Cupidatat do eiusmod ad nostrud sunt aute do pariatur velit.","spans":[]}],"background_image":{"dimensions":{"width":1152,"height":458},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"}},"slice_type":"hero_section_card","id":"_Default"}} />
_Default.storyName = ''

export const _HeroSectionNoCta = () => <MyComponent slice={{"variation":"heroSectionNoCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Motor","spans":[]}],"description":[{"type":"paragraph","text":"Aute qui magna nisi velit sunt id. Eiusmod sit commodo elit nulla esse eiusmod reprehenderit.","spans":[]}],"background_image":{"dimensions":{"width":1152,"height":458},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"}},"slice_type":"hero_section_card","id":"_HeroSectionNoCta"}} />
_HeroSectionNoCta.storyName = ''
