import * as React from 'react';
import * as ReactDOM from "react-dom";

// import GoldenLayout from "golden-layout";
// import LayoutComponent from './layout'
import App from './app';
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);

// var myLayout = new GoldenLayout({
//   content: [
//     {
//       type: "row",
//       content: [
//         {
//           type: "react-component",
//           component: "test-component",
//           props: { label: "A" }
//         },
//         {
//           type: "column",
//           content: [
//             {
//               type: "react-component",
//               component: "test-component",
//               props: { label: "B" }
//             },
//             {
//               type: "react-component",
//               component: "test-component",
//               props: { label: "C" }
//             }
//           ]
//         }
//       ]
//     }
//   ]
// });
// // //Open the element with 'someId' in a new window
// // myLayout.root.getItemsById("someId")[0].popout();

// // //Add another component to the layout
// // myLayout.root.contentItems[0].addChild({
// //   type: "react-component",
// //   component: "testComponent",
// //   props: { label: "X" }
// // });

// myLayout.registerComponent( 'test-component', LayoutComponent );

// //Once all components are registered, call
// myLayout.init();
