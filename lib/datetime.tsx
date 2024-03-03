import moment from "moment";

const DATE_FORMAT = "MMMM Do YYYY, h:mm:ss a";

export const formatDateString = (date: string) => {
	return moment(date).format(DATE_FORMAT);
};
