const apiToken = process.env.API_TOKEN;

if (!apiToken) {
    throw new Error('API_TOKEN is required in env to run integration tests!');
}

export const token = apiToken;

export const adminId = '318887';
export const contactId = '618d3ff1daf39156d7c017b3';
export const userId = 'f4ca124298';
export const companyId = '6197d0070d0f186b6ff0db28';
export const conversationId = '8179903837';
export const teamId = '971209';
export const segmentId = '5887658cc813e66156622510';
export const dataAttributeId = '8774749';
export const parentId = '3173119';
