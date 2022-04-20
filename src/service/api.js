import axios from "axios";

const getUsers = () => {
  return axios.get("https://private-5b8666-testefrontendpc4.apiary-mock.com/users")
    .then(response => (
      localStorage.setItem("users", JSON.stringify(response.data[0].users))
    ))
    .catch(error => {
    console.log(error)
  })
};

export default getUsers;