import crypto from "crypto";

export const randomString = (): string => crypto.randomBytes(16).toString("hex");

export const randomInt = (min = 0, max = 999): number =>
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
