// https://material.io/design/components/buttons.html
import {Component, Prop} from "@stencil/core";

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
  @Prop()
  color: 'primary' | 'accent';

  render() {
		return (
			<button class="plate-button">
				<slot/>
			</button>
		);
	}
}
