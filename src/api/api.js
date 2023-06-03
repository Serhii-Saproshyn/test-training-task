import axios from "axios";

const BASE_URL = "https://646a7db97d3c1cae4ce29c5f.mockapi.io/users/";

export const fetchUsers = async (page, limit = 6) => {
  return await axios.get(BASE_URL, {
    params: {
      page,
      limit,
    },
  });
};

export const putFollowers = async (id, followers) => {
  try {
    const response = await axios.put(`${BASE_URL}${id}`, {
      followers: followers,
    });
    console.log("Профиль успешно обновлен:", response.data);
  } catch (error) {
    console.error("Ошибка при обновлении профиля:", error.message);
  }
};
