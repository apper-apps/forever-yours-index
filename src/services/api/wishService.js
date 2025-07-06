import wishData from '@/services/mockData/wishes.json';

let wishes = [...wishData];

export const getBirthdayWishes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...wishes]);
    }, 300);
  });
};

export const addBirthdayWish = async (wish) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newWish = { ...wish };
      wishes.unshift(newWish);
      resolve(newWish);
    }, 500);
  });
};

export const getBirthdayWishById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const wish = wishes.find(w => w.Id === parseInt(id));
      if (wish) {
        resolve({ ...wish });
      } else {
        reject(new Error('Birthday wish not found'));
      }
    }, 200);
  });
};