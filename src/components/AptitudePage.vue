<template>
    <div class="header">
      <img src="../components/Brain.png" alt="Brain icon">
      <h2 style=" font-family: Georgia, 'Times New Roman', Times, serif;">Assessment portal</h2>
    </div>
    <div class="content-wrapper">
      <div class="sidebar">
        <div class="menu-item" @click="goToDashboard"><img src="../components/Dashboard.png">Dashboard</div>
        <div class="menu-item" @click = "goToCourseAvail"><img src="../components/Books.png" alt="Course icon">Course available</div>
        <div class="menu-item"  @click = "goTomycourse"><img src="../components/Books1.png" alt="My course icon">My course</div>
        <div class="menu-item"><img src="../components/Programming.png" alt="Eligible course icon">Eligible course</div>
        <div class="menu-item"><img src="../components/Code.png" alt="Code review icon">Code review</div>
        <div class="menu-item"><img src="../components/Logout.png" alt="Logout icon">Log out</div>
      </div>
  
      <div class="main-content">
  
        <div class="course-material">
          <h3>Course Material</h3>
          <div class="topics-covered">
            <button >Topics Covered</button>
            <ul style="align-items:center">
              <li>Numbers</li>
              <li>Decimal Fraction</li>
              <li>Profit and Loss</li>
              <li>Problems on Ages</li>
              <li>Average</li>
              <li>Square Root and Cube Root</li>
              <li>Percentage</li>
              <li>Problems on H.C.F and L.C.M</li>
              <li>Simple Interest</li>
              <li>Area</li>
              <li>Odd Man Out and Series</li>
              <li>Simplification</li>
            </ul>
          </div>
        </div>
        <div class="right-column">
   
    <div class="aptitude">
      <img src="../components/Aptitude.png" alt="Aptitude icon">
      <h3>Aptitude - 1</h3>
    </div>
    <div class="assessment-details">
      <h3>Assessment Details</h3>
      <button class="book-slot-btn">Book a Slot</button>
    </div>
  </div>
      </div>
    </div>
  </template>
  

<script>
export default {
  name: 'AptitudePage',
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToCourseAvail() {

this.$router.push('/Course');
},
goTomycourse() {

this.$router.push('/mycourse');
}
  }
};
</script>
<style scoped>


.assessment-details {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.assessment-details h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

.book-slot-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
}

.book-slot-btn:hover {
  background-color: #0056b3;
}
 body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }
        .header {
            background-color: #f0f0f0;
            padding: 10px 20px;
            display: flex;
            align-items: center;
        }
        .header img {
            width: 50px;
            margin-right: 10px;
        }
        .content-wrapper {
            display: flex;
        }
        .sidebar {
    width: 250px; 
    background-color: #f0f0f0;
    padding: 20px;
    height: calc(100vh - 60px);
    border-right: 2px solid #ccc; 
        }
.content-wrapper {
    display: flex;
}
.content {
    width: 80%;
    padding: 20px;
}
.menu-item {
    padding: 15px 20px; 
    margin-bottom: 15px; 
    display: flex;
    align-items: center;
    font-size: 18px; 
    border-radius: 5px; 
    background-color: #ffffff; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; 
}

.menu-item img {
    width: 50px; 
    margin-right: 15px;
}

/* Hover effect */
.menu-item:hover {
    font-weight: bold; 
    background-color: #e0e0e0; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transform: scale(1.02);
}
h2 {
    margin-top: 0;
}
        .content-wrapper {
    display: flex;
}

.sidebar {
    width: 20%;
    background-color: #f4f4f4;
}


.sidebar {
    width: 20%;
    background-color: #f4f4f4;
}

.main-content {
    width: 80%;
    padding: 20px;
    background-color:rgba(171, 168, 180, 1);
}
.assessment-details {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width : px;
}
.courses-grid {
    display: flex;
    justify-content: flex-start; 
    gap: 20px; 
    margin-top: 20px;
}

.left-column {
  width: 60%;
}

.right-column {
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.main-content {
    width: 80%;
  padding: 20px;
  background-color: rgba(171, 168, 180, 1);
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.course-material {
    background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-height: 450px;
 
}

.course-material h3 {
  margin-top: 0;
  font-family: Arial, sans-serif;
}

.topics-covered {
  width: 100%; 
  text-align: center; 
}

.topics-covered button {
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.topics-covered ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center; 
}

.topics-covered li {
  margin-bottom: 10px;
}


.aptitude {
    background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width : 250px;
}

.aptitude img {
  width: 60px;
  margin-bottom: 10px;
}

.aptitude h3 {
  font-family: Arial, sans-serif;
  margin: 0;
}

.book-slot {
  margin-top: 20px;
  text-align: center;
}

.book-slot button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.course img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
}
</style>