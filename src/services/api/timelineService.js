import timelineData from '@/services/mockData/timeline.json';

export const getTimelineEvents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...timelineData]);
    }, 400);
  });
};

export const getTimelineEventById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = timelineData.find(e => e.Id === parseInt(id));
      if (event) {
        resolve({ ...event });
      } else {
        reject(new Error('Timeline event not found'));
      }
    }, 200);
  });
};