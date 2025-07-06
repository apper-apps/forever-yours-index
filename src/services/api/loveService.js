import loveData from '@/services/mockData/loveMessages.json';

export const getLoveMessages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...loveData]);
    }, 350);
  });
};

export const getLoveMessageById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = loveData.find(m => m.Id === parseInt(id));
      if (message) {
        resolve({ ...message });
      } else {
        reject(new Error('Love message not found'));
      }
    }, 200);
  });
};