import type {FC} from "hono/jsx";

export const LinkBlock: FC<{ linkData: LinkData }> = ({ linkData }) => {
	const faviconUrl = `https://www.google.com/s2/favicons?domain=${linkData.longurl}`;
	
	return (
		<div key={linkData.slug} className="rounded-lg m-4 link">
			<a
				href={`/${linkData.slug}`}
				className="block rounded-lg border border-gray-100 p-4 text-white hover:bg-gray-600 transition-colors duration-300 "
			>
				<div className="flex items-center">
					<img src={faviconUrl} alt="favicon" className="mr-2" />
					{linkData.title}
					<i className="fas fa-share-alt ml-auto"></i>
				</div>
			</a>
		</div>
	);
};
