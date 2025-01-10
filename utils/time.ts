import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export const getRelativeTimePass = (time: string) => dayjs(time).fromNow();
