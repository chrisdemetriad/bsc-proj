export const Shorten = (string, limit) => {
	if (string.length < limit) return string;
	return string.substring(0, limit) + "..";
};
