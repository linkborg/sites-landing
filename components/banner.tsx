import {FC} from "hono/jsx";

export const Banner: FC<{ image: string }> = ({ image }) => (
	<div className="banner">
		<img src={image} alt="Banner" className="w-full h-full object-cover" />
	</div>
);