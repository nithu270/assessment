<template>
  <div class="frame-38">
    <div class="login-1">
      <div class="frame-27">
        <div class="login-to-assessment-platform">
          Login to assessment platform<br />
        </div>
        <div class="container">
          <div class="container-1">
            <div class="username">
              Username:<br />
            </div>
            <input
              v-model="username"
              type="text"
              class="input-field"
              placeholder="Enter your username"
            />
            <div class="password">
              Password:
            </div>
            <input
              v-model="password"
              type="password"
              class="input-field"
              placeholder="Enter your password"
            />
          </div>
          <div class="image-1"></div>
        </div>
        <div class="frame-9" @click="goToDashboard">
          <div class="frame-10">
            <span class="login">
              Login<br />
            </span>
          </div>
        </div>
      
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrameComponent",
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    goToDashboard() {
      if (this.username && this.password) {
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = 'Please enter both username and password.';
      }
    },
  },
};
</script>
<style scoped>
.frame-38 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100%;
  box-sizing: border-box;
}

.login-1 {
  box-shadow: 0rem 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem; 
  box-sizing: border-box;
  max-width: 80rem;
  width: 100%;
}

.frame-27 {
  background: rgba(171, 168, 180, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  width: 70%;
  box-sizing: border-box;
}

.login-to-assessment-platform {
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Inria Serif';
  font-weight: 700;
  font-size: 2.5rem;
  color: #000000;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}

.container-1 {
  display: flex;
  flex-direction: column;
  width: 60%;
  box-sizing: border-box;
}

.username, .password {
  margin-bottom: 1rem;
  font-family: 'Inria Serif';
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;
}

.input-field {
  background: #D9D9D9;
  width: 100%;
  height: 50%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-family: 'Inria Serif';
  border: none;
  box-sizing: border-box;
}

.input-field::placeholder {
  color: #888;
}

.image-1 {
  background: url('/src/components/Image1.png') 50% / cover no-repeat;
  width: 35%;
  height: 15rem;
}

.frame-9 {
  background: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;
}

.login {
  font-family: 'Inria Serif';
  font-weight: 700;
  font-size: 2rem;
  color: #000000;
}
.login:hover {
  background: #0056b3;
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-family: 'Inria Serif';
  font-weight: 700;
  font-size: 1.5rem;
}
</style>

  