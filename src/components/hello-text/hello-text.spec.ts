import { TestWindow } from '@stencil/core/testing';
import { HelloText } from './hello-text';

describe('my-component', () => {
  it('should build', () => {
    expect(new HelloText()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLHelloTextElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [HelloText],
        html: '<my-component></my-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });
  });
});
