import giftData from '@/services/mockData/gifts.json';

export const getGiftBoxes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...giftData]);
    }, 300);
  });
};

export const getGiftBoxById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gift = giftData.find(g => g.Id === parseInt(id));
      if (gift) {
        resolve({ ...gift });
      } else {
        reject(new Error('Gift box not found'));
      }
    }, 200);
  });
};