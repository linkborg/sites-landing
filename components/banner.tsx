import {FC} from "hono/jsx";

export const Banner: FC<{ image: string }> = ({ image }) => (
	<div className={"w-full h-[150px]"} style={{
		backgroundImage: image !== "/placeholder.png" ? "url(" + image?.toString() + ")" : `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		// filter: "grayscale(100%)"
		zIndex: 9
	}}>
		&nbsp;
	</div>
);