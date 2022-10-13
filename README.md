# leabmodal

A customizable Modal component for React apps

> _using React Portal, the Modal is mounted on its own node as a distinct child of App body_

## Features

☑️ **useModal**

    custom hook to mount / unmount Modal container

☑️ **VARIOUS ITEMS**

    🔘 close button (img)
    🔘 Modal container illustration (img)
    🔘 title
    🔘 message line 1
    🔘 message line 2
    🔘 button 1
    🔘 button 2

☑️ **THAT YOU CAN**

    🔘 EDIT ---- (string type)
    🔘 HIDE ---- (exept required)
    🔘 DISABLE - (button type)
    🔘 STYLE --- (css files)
        ✔ separated color variables
        ✔ clear and logical items attributes

## Getting started guide

### Source [leabmodal](https://github.com/lea-bana/Modal-librairy.git)

### Install

**With npm run the following command**

    npm i leabmodal

**With yarn run the following command**

    yarn add leabmodal

### Use

**Import the plugin & its hook in your React component**

```jsx
import { Modal, useModal } from "leabmodal";
```

**Import UseNavigate hook if you need to implement redirect function**

```jsx
import { useNavigate } from "react-router-dom"; // !!! IN ROUTING CONTEXT
```

**Use the default assets to beautify your modal _(like exemple)_**

```jsx
<Modal
  x={close}
  icon={endTask}
  // or icon={validate}
/>
```
