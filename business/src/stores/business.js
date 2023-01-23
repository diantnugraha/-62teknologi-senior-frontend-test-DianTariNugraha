import axios from "../config/config";
import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurants", {
  state: () => ({
    dataRestaurants: [],
    detailRestaurants: [],
    reviewRestaurants: [],
  }),
  actions: {
    async fetchRestaurants() {
      try {
        const { data } = await axios.get("search?location=NYC");

        this.dataRestaurants = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDetailRestaurant(id) {
      try {
        const { data } = await axios.get(`${id}`);

        this.detailRestaurants = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchReviewRestaurant(id) {
      try {
        const { data } = await axios.get(`${id}/reviews`);

        this.reviewRestaurants = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSearchRestaurant(name) {
      try {
        const { data } = await axios.get(`search?location=NYC&term=${name}`);
        this.dataRestaurants = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchFilterRestaurant(filter) {
      try {
        const { data } = await axios.get(`search?location=NYC&term=${filter}`);
        this.dataRestaurants = data;
      } catch (error) {
        console.log(error);
      }
    },

    // async fetchTodosSearch(title) {
    //   try {
    //     const { data } = await axios.get(
    //       `http://localhost:3000/todos?title_like=${title}`
    //     );
    //     console.log(data);
    //     this.dataTodos = data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async fetchTodosFilter(filter) {
    //   try {
    //     const { data } = await axios.get(
    //       `http://localhost:3000/todos?is_complete_like=${filter}`
    //     );
    //     console.log(data);
    //     this.dataTodos = data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async deleteTodos(id) {
    //   try {
    //     const { data } = await axios.delete(
    //       `http://localhost:3000/todos/${id}`
    //     );
    //     this.fetchTodos();
    //     this.router.push("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async fetchdetailTodos(id) {
    //   try {
    //     const { data } = await axios.get(`http://localhost:3000/todos/${id}`);
    //     console.log(data);
    //     this.detailTodos = data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // async updateTodo(id, title, description, created_at, is_complete) {
    //   try {
    //     await axios.put(`http://localhost:3000/todos/${id}`, {
    //       title,
    //       description,
    //       created_at,
    //       is_complete,
    //     });
    //     this.router.push("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async addTodo(title, description, created_at, is_complete) {
    //   try {
    //     await axios.post(`http://localhost:3000/todos`, {
    //       title,
    //       description,
    //       created_at,
    //       is_complete,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
