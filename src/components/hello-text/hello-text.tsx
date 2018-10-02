import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'hello-text',
  styleUrl: 'hello-text.css',
  shadow: true
})
export class HelloText {
  @State() trigger = false;
  @Prop({ context: 'i18n' }) i18n: any;
  @Prop() lng = 'en';

  @Element() el!: HTMLStencilElement;

  componentWillLoad() {
    this.i18n.changeLanguage(this.lng);
  }

  toggle() {
    this.i18n.language === 'en'
      ? this.i18n.changeLanguage(this.lng)
      : this.i18n.changeLanguage('en');

    this.el.forceUpdate()
  }

  render() {
    return <div>
            <button onClick={() => this.toggle()}>Toggle</button>
              {this.i18n.t("NUM_PHOTOS", {numPhotos: 1})}
          </div>
  }
}
