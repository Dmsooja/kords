import MyComponent from '../../../../slices/HeroSectionCard';

export default {
  title: 'slices/HeroSectionCard'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_type":"primary","button_link":{"link_type":"Web","url":"http://twitter.com"},"button_text":"Click here"}],"primary":{"title":[{"type":"heading1","text":"Outer","spans":[]}],"description":[{"type":"paragraph","text":"Ut cillum adipisicing id ex deserunt laborum non eu sint. Et nisi id cillum culpa minim nulla consequat deserunt aliqua consectetur.","spans":[]}],"background_image":{"dimensions":{"width":1152,"height":458},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43","medium":{"dimensions":{"width":576,"height":229},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"}}},"slice_type":"hero_section_card","id":"_Default"}} />
_Default.storyName = ''

export const _HeroSectionNoCta = () => <MyComponent slice={{"variation":"heroSectionNoCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Hidden","spans":[]}],"description":[{"type":"paragraph","text":"Veniam ex excepteur proident do adipisicing amet amet enim eu dolor labore. Sint consectetur non duis occaecat aliqua exercitation minim adipisicing. Excepteur in sunt ullamco aute.","spans":[]}],"background_image":{"dimensions":{"width":1152,"height":458},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04"}},"slice_type":"hero_section_card","id":"_HeroSectionNoCta"}} />
_HeroSectionNoCta.storyName = ''

export const _WithAnchor = () => <MyComponent slice={{"variation":"withAnchor","version":"sktwi1xtmkfgx8626","items":[{"button_type":"primary","target_anchor":"deep","button_text":"mainly"}],"primary":{"title":[{"type":"heading1","text":"Courage","spans":[]}],"description":[{"type":"paragraph","text":"Ad id eiusmod enim mollit Lorem proident esse dolor nisi occaecat anim ex.","spans":[]}],"background_image":{"dimensions":{"width":1152,"height":458},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118","medium":{"dimensions":{"width":576,"height":229},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"}}},"slice_type":"hero_section_card","id":"_WithAnchor"}} />
_WithAnchor.storyName = ''
