
  

  

<span  align="center">

  

![NPM](https://img.shields.io/npm/l/react-search-box?style=for-the-badge) <a  href="https://codesandbox.io/s/react-material-ui-searchbar-ito9di?file=/src/App.tsx"  target="_blank">![Edit on Codesandbox](https://img.shields.io/badge/demo-Edit%20on%20Codesandbox-2385f7?style=for-the-badge&logo=codesandbox)</a>

  

  

</span>

  

  

### Installation

  

  
# npm
```sh
npm i react-material-ui-searchbar --save
```
# yarn
```sh
yarn add react-material-ui-searchbar
```

  

  

### Usage

  

  

```js

import React from 'react';
import SearchComponent from "react-material-ui-searchbar";

export default function App() {
  return (
    <div className="App">
      <SearchComponent />
    </div>
  );
}

```

  

  

## Props

  

  
  
  

| **Name** | **Type** | **Default** | **Description** |
|----------------|---------------------------------------------------|-------------|-------------------------------------------|
| placeholder | string | Search | Placeholder in search bar |
| onChangeHandle | ( value : string ) => void | | Returns the text change in the search bar |
| initialValue | string | "" | Initial Value in the search bar |
| svgFontSize | 'inherit' \| 'medium' \| 'large' \| 'small' | 'small' | Search SVG icon font size |
| sx | [SxProps](https://mui.com/system/the-sx-prop/) | {} | Sx Props for customizing Search Bar |
| inputLabelProps| [InputFieldProps](https://mui.com/material-ui/api/text-field/#props) | {} | Sx Props for customizing Input Field |

  

  

## Built With

  

  

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

  

- [Material UI](https://mui.com/material-ui/getting-started/overview/) - Component Library for Material UI

  

  

## License

  

  

MIT Licensed. Copyright (c) Vishal Ramanand Sharma 2022.