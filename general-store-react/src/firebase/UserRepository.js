// import {db} from "./";

// export async function getUser(uid) {
//     const userRef = db.ref(`users/${uid}`);
//     const userSnapshot = await userRef.once("value");
//     return userSnapshot.val();
// }

// export function addUser(user) {
//     const userRef = db.ref(`users/${user.uid}`);
//     return userRef.set(user);
// }
