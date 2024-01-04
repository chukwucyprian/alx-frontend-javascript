import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      const [photo, user] = results;

      const { body: photoBody } = photo;
      const { firstName, lastName } = user;

      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
