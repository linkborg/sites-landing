import type { FC } from 'hono/jsx'

export const Canvas: FC = ({ children }) => (
	<div className="canvas">{children}</div>
);