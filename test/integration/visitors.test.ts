// import { logWithBreaks } from './utils/config';
// import { Client } from 'intercom-client';

// // TIP: get client_matches > user_id field from ping request here: https://app.intercom.io/client/test/ecahpwf5

// const visitorForDelete = {
//     visitorId: '6202ae4c4caf6a35860f843c', // those has to be updated every time before running QA script
//     userId: '0a5c7c01-db82-4794-96ef-ab26c855a88f', // those has to be updated every time before running QA script
// };

// const visitorForConvertingToContact = {
//     visitorId: '6202ae94928cb83fbca343f1', // those has to be updated every time before running QA script
// };

// const testVisitors = async (client: Client) => {
//     const actions = actionsWithData(
//         client,
//         data(
//             visitorForDelete.visitorId,
//             visitorForDelete.userId,
//             visitorForConvertingToContact.visitorId
//         )
//     );

//     for (const action of actions) {
//         try {
//             const response = await action.promise;
//             logWithBreaks(response, action.name);
//         } catch (e) {
//             logWithBreaks(e, action.name);
//             throw e;
//         }
//     }
// };

// const data = (
//     idForDelete: string,
//     userIdForDelete: string,
//     idForConvertingToContact: string
// ) => ({
//     findById: { id: idForDelete },
//     findByUserId: { userId: userIdForDelete },
//     update: {
//         userId: userIdForDelete,
//         name: 'Winston Smith',
//         custom_attributes: {},
//     },
//     delete: {
//         id: idForDelete,
//     },
//     mergeToContact: {
//         visitor: {
//             id: idForConvertingToContact,
//         },
//         user: {
//             email: 'mcboxford@intercom-test.com',
//         },
//         type: 'user',
//     },
// });

// const actionsWithData = (client: Client, data: any) => [
//     { promise: client.visitors.find(data.findById), name: 'find by id' },
//     {
//         promise: client.visitors.find(data.findByUserId),
//         name: 'find by user id',
//     },
//     { promise: client.visitors.update(data.update), name: 'update' },
//     { promise: client.visitors.delete(data.delete), name: 'delete' },
//     {
//         promise: client.visitors.mergeToContact(data.mergeToContact),
//         name: 'merge to contaact',
//     },
// ];

// (async () => {
//     const token =

//     const client = new Client({ tokenAuth: { token } });

//     try {
//         await testVisitors(client);
//     } catch (e) {
//         console.dir(e, { depth: null });
//         return;
//     }
// })();
