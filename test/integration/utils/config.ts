const apiToken = process.env.API_TOKEN;

if (!apiToken) {
    throw new Error('API_TOKEN is required in env to run integration tests!');
}

export const token = apiToken;
