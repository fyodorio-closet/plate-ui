// https://material.io/design/components/buttons.html
import {Component, Prop} from '@stencil/core';
import {CssClassMap} from '../../global/interfaces';

@Component({
	tag: 'plate-button',
	styleUrl: 'plate-button.scss',
	shadow: true
})
export class PlateButton {
  @Prop()
  type: 'text' | 'outlined' | 'contained';
  @Prop()
  shape: 'rectangle' | 'rounded' | 'shaped' | 'octagon';
  @Prop()
  icon: string;
  @Prop()
  elevation: number;

  render() {
    const classMap = this.getCssClassMap();

    return (
			<button class={classMap}>
				<slot/>
			</button>
		);
	}

  private getCssClassMap(): CssClassMap {
    return {
      [this.type]: true,
      [this.shape]: true,
      [`elevation-${this.elevation}`]: true
    };
  }
}
