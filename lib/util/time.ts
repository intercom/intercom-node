import { Timestamp } from "../common/common.types";

export const dateToUnixTimestamp = (date: Date): Timestamp => Math.floor(date.getTime() / 1000);
