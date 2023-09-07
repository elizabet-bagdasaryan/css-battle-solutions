import Acid from "../assets/acid-rain.png";
import Carrom from "../assets/carrom.png";
import Cloaked from "../assets/cloaked-spirits.png";
import Eye from "../assets/eye-sauron.png";
import Fork from "../assets/fork.png";
import Leafy from "../assets/leafy-trail.png";
import Missing from "../assets/missing-slice.png";
import Push from "../assets/push-button.png";
import Simple from "../assets/simp-square.png";
import Tesseract from "../assets/tesseract.png";
import Ups from "../assets/ups-downs.png";
import Wiggly from "../assets/wiggly-moustache.png";
import {
	GlobalStyles,
	Wrapper,
	WrapperText,
	WrapperImage,
	WrapperHeader,
	ImageContainer,
	Overlay,
} from "../styles.ts";

function Pilot() {
	return (
		<div>
			<GlobalStyles>
				<Wrapper>
					<WrapperText>Battle #1 - Pilot Battle</WrapperText>
					<div>
						<ImageContainer>
							<WrapperImage src={Simple} />
							<div>
								<Overlay>
									<WrapperHeader> Click to see the solution</WrapperHeader>
								</Overlay>
							</div>
						</ImageContainer>
					</div>
					<div>
						<ImageContainer>
							<WrapperImage src={Carrom} />
							<div>
								<Overlay>
									<WrapperHeader> Click to see the solution</WrapperHeader>
								</Overlay>
							</div>
						</ImageContainer>
					</div>

					<img src={Push} />
					<img src={Ups} />
					<img src={Acid} />
					<img src={Missing} />
					<img src={Leafy} />
					<img src={Fork} />
					<img src={Tesseract} />
					<img src={Cloaked} />
					<img src={Eye} />
					<img src={Wiggly} />
				</Wrapper>
			</GlobalStyles>
		</div>
	);
}

export default Pilot;
