import type {FC} from "hono/jsx";

export const SiteHeader: FC<{ logo: string; name: string; description: string }> = ({
	                                                                             logo,
	                                                                             name,
	                                                                             description,
                                                                             }) => (
	<div className="text-center mb-8 -mt-16">
		<div className="w-36 h-36 mx-auto flex items-center justify-center">
			<img
				src={logo}
				alt="Avatar"
				className="rounded-full border-2 border-black p-1 w-32 h-32 bg-black"
			/>
		</div>
		<h1 className="text-2xl font-bold mt-4 text-white">{name}</h1>
		<p className="text-gray-400">{description}</p>
	</div>
);