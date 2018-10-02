/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface HelloText {
      'lng': string;
    }
  }


    interface HTMLHelloTextElement extends StencilComponents.HelloText, HTMLStencilElement {}

    var HTMLHelloTextElement: {
      prototype: HTMLHelloTextElement;
      new (): HTMLHelloTextElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'hello-text': JSXElements.HelloTextAttributes;
    }
  }

  namespace JSXElements {

    export interface HelloTextAttributes extends HTMLAttributes {
      'lng'?: string;
    }
  }

  interface HTMLElementTagNameMap {
    'hello-text': HTMLHelloTextElement
  }

  interface ElementTagNameMap {
    'hello-text': HTMLHelloTextElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;