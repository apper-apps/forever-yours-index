import photoData from '@/services/mockData/photos.json';

export const getPhotos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...photoData]);
    }, 300);
  });
};

export const getPhotoById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const photo = photoData.find(p => p.Id === parseInt(id));
      if (photo) {
        resolve({ ...photo });
      } else {
        reject(new Error('Photo not found'));
      }
    }, 200);
  });
};