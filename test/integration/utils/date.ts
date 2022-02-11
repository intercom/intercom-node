export const dateToUnixTimestamp = (date: Date): number =>
    Math.floor(date.getTime() / 1000);
