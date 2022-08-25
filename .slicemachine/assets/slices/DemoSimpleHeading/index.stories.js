import MyComponent from '../../../../slices/DemoSimpleHeading';

export default {
  title: 'slices/DemoSimpleHeading'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading3","text":"Instrument","spans":[]}]},"slice_type":"demo_simple_heading","id":"_Default"}} />
_Default.storyName = ''

export const _Withdescription = () => <MyComponent slice={{"variation":"withdescription","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading3","text":"Except","spans":[]}],"description":[{"type":"paragraph","text":"Id laborum officia laboris.","spans":[]}]},"slice_type":"demo_simple_heading","id":"_Withdescription"}} />
_Withdescription.storyName = ''
