import MyComponent from '../../../../slices/HeroSectionCard';

export default {
  title: 'slices/HeroSectionCard'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"button_type":"primary","button_link":{"link_type":"Web","url":"http://twitter.com"},"button_text":[{"type":"paragraph","text":"Reprehenderit elit minim nulla ex culpa enim do exercitation deserunt incididunt et occaecat deserunt pariatur ut. Nisi qui fugiat commodo. Duis laborum nisi mollit amet irure exercitation aliqua.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Breathe","spans":[]}],"description":[{"type":"paragraph","text":"In minim quis incididunt qui irure enim fugiat. Deserunt culpa qui quis aute. Consectetur quis Lorem fugiat labore in minim nisi excepteur cillum proident exercitation occaecat aliquip veniam.","spans":[]}]},"slice_type":"hero_section_card","id":"_Default"}} />
_Default.storyName = ''

export const _HeroSectionNoCta = () => <MyComponent slice={{"variation":"heroSectionNoCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Probably","spans":[]}],"description":[{"type":"paragraph","text":"Labore aliqua adipisicing consectetur Lorem. Nulla officia ipsum exercitation irure esse sunt esse exercitation veniam minim deserunt consectetur. Ea reprehenderit incididunt eu.","spans":[]}]},"slice_type":"hero_section_card","id":"_HeroSectionNoCta"}} />
_HeroSectionNoCta.storyName = ''
