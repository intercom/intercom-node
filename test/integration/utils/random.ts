export const randomString = () =>
    Buffer.from(Math.random().toString()).toString('base64').substring(10, 5);

export const randomInt = (min = 0, max = 999): number =>
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min);
