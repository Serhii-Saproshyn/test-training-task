import axios from "axios";

axios.defaults.baseURL = "https://646a7db97d3c1cae4ce29c5f.mockapi.io/users/";

const fetchUsers = async () => {
  return await axios.get().catch((error) => console.log(error.message));
};

export default fetchUsers;
