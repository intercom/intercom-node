import { Companies } from "../../src/api/resources/companies/client/Client";
import { Contacts } from "../../src/api/resources/contacts/client/Client";
import { Conversations } from "../../src/api/resources/conversations/client/Client";
import { Collections } from "../../src/api/resources/helpCenters/resources/collections/client/Client";
import { Notes } from "../../src/api/resources/notes/client/Client";
import { createClient } from "./utils/createClient";
import { randomString } from "./utils/random";

type TestClient = Collections | Companies | Contacts | Conversations | Notes;

describe("Pagination", () => {
    const client = createClient();

    interface TestCase {
        name: string;
        client: TestClient;
        limit: number;
        perPage: number;
        greaterThan: number;
        setup?: () => Promise<any>;
        additionalParams?: Record<string, any>;
    }

    const testCases: TestCase[] = [
        {
            name: "helpCenters collections",
            client: client.helpCenters.collections,
            limit: 2,
            perPage: 1,
            greaterThan: 1,
        },
        {
            name: "companies",
            client: client.companies,
            limit: 10,
            perPage: 1,
            greaterThan: 0,
        },
        {
            name: "contacts",
            client: client.contacts,
            limit: 100,
            perPage: 50,
            greaterThan: 0,
        },
        {
            name: "conversations",
            client: client.conversations,
            limit: 2,
            perPage: 1,
            greaterThan: 1,
        },
        {
            name: "notes",
            client: client.notes,
            limit: 2,
            perPage: 1,
            greaterThan: 1,
            async setup() {
                const contact = await client.contacts.create({
                    email: `${randomString()}@test.com`,
                });

                await client.notes.create({
                    contact_id: contact.id!,
                    body: "one",
                });

                await client.notes.create({
                    contact_id: contact.id!,
                    body: "two",
                });

                return { contact_id: contact.id };
            },
        },
    ];

    async function testIterator({
        client,
        limit,
        params,
    }: {
        client: TestClient;
        limit: number;
        params: Record<string, any>;
    }) {
        const iterator = await client.list(params as any);
        expect(iterator).toBeDefined();

        let count = 0;
        for await (const item of iterator) {
            expect(item).toBeDefined();
            expect(item.id).toBeDefined();
            count++;

            if (count >= limit) {
                break;
            }
        }
        return count;
    }

    async function testPager({
        client,
        limit,
        params,
    }: {
        client: TestClient;
        limit: number;
        params: Record<string, any>;
    }) {
        const pager = await client.list(params as any);
        expect(pager).toBeDefined();

        let count = pager.data.length;
        while (pager.hasNextPage()) {
            await pager.getNextPage();
            count += pager.data.length;

            if (count >= limit) {
                break;
            }
        }
        return count;
    }

    testCases.forEach(({ name, client, limit, perPage, greaterThan, setup, additionalParams }) => {
        it(name, async () => {
            let params: Record<string, any> = { per_page: perPage };
            if (setup) {
                const setupParams = await setup();
                params = { ...params, ...setupParams };
            }
            if (additionalParams) {
                params = { ...params, ...additionalParams };
            }

            const iteratorCount = await testIterator({ client, limit, params: { ...params } });
            const pagerCount = await testPager({ client, limit, params: { ...params } });
            expect(iteratorCount).toBeGreaterThan(greaterThan);
            expect(pagerCount).toBeGreaterThan(greaterThan);

            // Confirm iterator and pager return same count.
            expect(pagerCount).toEqual(iteratorCount);
        });
    });
});
