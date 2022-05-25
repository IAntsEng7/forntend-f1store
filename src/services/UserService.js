import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  // New register
  saveNewRegister(newRegister) {
    return axios.post(USER_API_BASE_URL + "/register", newRegister);
  }
}

export default new UserService();
