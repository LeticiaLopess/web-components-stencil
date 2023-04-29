/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WjSideDrawer {
        "title": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWjSideDrawerElement extends Components.WjSideDrawer, HTMLStencilElement {
    }
    var HTMLWjSideDrawerElement: {
        prototype: HTMLWjSideDrawerElement;
        new (): HTMLWjSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wj-side-drawer": HTMLWjSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WjSideDrawer {
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wj-side-drawer": WjSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wj-side-drawer": LocalJSX.WjSideDrawer & JSXBase.HTMLAttributes<HTMLWjSideDrawerElement>;
        }
    }
}
