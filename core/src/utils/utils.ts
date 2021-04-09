const portalContainer: { current: null | HTMLElement } = { current: null };

export const getPortalContainer = (): HTMLElement => {
	if (portalContainer.current === null) {
		const element = document.createElement("div");
		document.body.append(element);
		portalContainer.current = element;
	}
	return portalContainer.current;
};
