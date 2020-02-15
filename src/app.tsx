import React from "react";
import * as ReactDOM from "react-dom";
import Button from "./lib/button";
import GoldenLayout from "golden-layout";
import LayoutComponent from './layout'

export default function(props: any) {
  return <React.Fragment></React.Fragment>
}

var myLayout = new GoldenLayout({
  content: [
    {
      type: "row",
      content: [
        {
          type: "react-component",
          component: "test-component",
          props: { label: "A" }
        },
        {
          type: "column",
          content: [
            {
              type: "react-component",
              component: "test-component",
              props: { label: "B" }
            },
            {
              type: "react-component",
              component: "test-component",
              props: { label: "C" }
            }
          ]
        }
      ]
    }
  ]
});
// //Open the element with 'someId' in a new window
// myLayout.root.getItemsById("someId")[0].popout();

// //Add another component to the layout
// myLayout.root.contentItems[0].addChild({
//   type: "react-component",
//   component: "testComponent",
//   props: { label: "X" }
// });

myLayout.registerComponent( 'test-component', LayoutComponent );

//Once all components are registered, call
myLayout.init();
