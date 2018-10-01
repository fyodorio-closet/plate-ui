import {Component} from "@stencil/core";

@Component({
	tag: 'plate-button',
	styleUrl: 'plate-button.scss',
	shadow: true
})
export class PlateButton {
	render() {
		return (
			<button class="plate-button">
				<slot/>
			</button>
		);
	}
}
