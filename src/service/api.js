import axios from "axios";

const getUsers = () => {
  return axios.get("https://private-5b8666-testefrontendpc4.apiary-mock.com/users")
    .then(response => {
      !localStorage.getItem('users') ? localStorage.setItem('users', JSON.stringify(response.data[0].users)) : null; 
    })
    .catch(error => {
    console.log(error)
  })
};

export default getUsers;