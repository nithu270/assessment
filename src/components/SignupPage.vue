<template>
  <div class="signup-container">
    <h1>Sign Up to Continue</h1>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="name">User Name</label>
        <input type="text" v-model="name" id="name" placeholder="Enter your full name" required />
      </div>
      <div class="form-group">
        <label for="name">Roll number</label>
        <input type="text" v-model="name" id="rollnum" placeholder="Enter your roll number" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Enter your password" required />
      </div>
      <div class="form-group">
        <label for="email">Confirm password</label>
        <input type="password" v-model="password" id="password" placeholder="confirm your password" required />
      </div>
     
     

      <button type="submit" class="signup-button">Sign Up</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    handleSignup() {
      if (!this.name || !this.email || !this.password) {
        this.errorMessage = "All fields are required.";
      } else {
        // Here, you can add the signup logic, such as making an API call.
        this.errorMessage = "";
        console.log("Signup successful with:", this.name, this.email, this.password);
        // After signup, you may want to redirect to another page, e.g., login or dashboard
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>
<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #f0f0f0;
}

.signup-container h1 {
  margin-bottom: 2rem;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000000;
  text-align: center;
}

form {
  background: rgba(171, 168, 180, 1);
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  padding: 3rem 2rem;
  border-radius: 8px;
  max-width: 30rem;
  width: 90%;
  box-sizing: border-box;
}

.form-group {
  margin-bottom: 1.5rem;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
}

.form-group label {
  display: block;
  font-size: 1.6rem;
  color: #000000;
  margin-bottom: 0.5rem;
}

.form-group input {
  background: #D9D9D9;
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  font-family: 'Inria Serif', serif;
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
}

.form-group input::placeholder {
  background: #D9D9D9;
}

.signup-button {
  background: #D9D9D9;
  color: #0d0404;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
  width: 100%;
}

.signup-button:hover {
  background: #0056b3;
}

.error {
  color: red;
  margin-top: 1rem;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
}
</style>