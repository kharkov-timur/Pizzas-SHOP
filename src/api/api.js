import axios from 'axios';

export const pizzasAPI = {
  async getPizzas(sortBy, category) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/api/pizzas${
        category === 0
          ? `?sort=${sortBy.type}&order=${sortBy.order}`
          : `?category=${category}&sort=${sortBy.type}&order=${sortBy.order}`
      }`,
    );
  },
};
