import Baby from "../assets/baby.png";
import Wrench from "../assets/wrench.png";
import Ticket from "../assets/stripes.png";

function Transition() {
	return (
		<div className="w">
			<p>Battle #8 - Transition</p>
			<img src={Baby} />
			<img src={Wrench} />
			<img src={Ticket} />
		</div>
	);
}

export default Transition;
