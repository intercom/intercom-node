#!/usr/bin/env -S npm run tsn -T

// INTERCOM_TEST_1_BEARER_TOKEN=*** pnpm tsn -T examples/demo.ts

import Intercom from 'intercom';

const intercom = new Intercom();
const demoId = Math.floor(Math.random() * 10000);

async function main() {
  // Check account info
  const me = await intercom.me.retrieve({ 'Intercom-Version': '2.10' });
  console.log(`Requesting as ${me?.name} (${me?.email})\n`);

  // Check contacts
  let contacts = await intercom.contacts.list({ 'Intercom-Version': '2.10' });
  console.log(`Contact count: ${contacts.data?.length}`);
  console.log(`${contacts.data?.map((contact) => `\t${contact.email}`).join('\n')}\n`);

  // Add contact
  const newEmail = `alex${demoId}@stainlessapi.com`;
  console.log(`Adding new contact ${newEmail}`);
  const createdContact = await intercom.contacts.create({
    name: 'Alex',
    email: newEmail,
    'Intercom-Version': '2.10',
  });
  console.log(`Created contact with ID ${createdContact.id}`);
}

main().catch((err) => {
  console.error(err);
});
