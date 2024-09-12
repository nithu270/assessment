
<template>
    <div class="header">
    <img src="../components/Brain.png" alt="Brain icon">
    <h2 style=" font-family: Georgia, 'Times New Roman', Times, serif;">Assessment portal</h2>
</div>
<div class="content-wrapper">
    <div class="sidebar">
        <div class="menu-item" @click="goToDashboard"><img src="../components/Dashboard.png" >Dashboard</div>
        <div class="menu-item" @click = "goToCourseAvail"><img src="../components/Books.png" alt="Course icon">Course available</div>
        <div class="menu-item"><img src="../components/Books1.png" alt="My course icon">My course</div>
        <div class="menu-item"><img src="../components/Programming.png" alt="Eligible course icon">Eligible course</div>
        <div class="menu-item"><img src="../components/Code.png" alt="Code review icon">Code review</div>
        <div class="menu-item"><img src="../components/Logout.png" alt="Logout icon">Log out</div>
    </div>
    <div class="main-content">
        <h3>Ongoing Courses</h3>
        <div class="courses-grid">
            <div class="course">
              <img src="../components/Aptitude.png" alt="Aptitude 1" style="width: 200px; height: auto;">

                <p>Aptitude - 1</p>
            </div>
            <div class="course">
              <img src="../components/c.jpg" alt="Aptitude 1" style="width: 200px; height: auto;">

                <p>C programming</p>
            </div>
            <div class="course">
                <img src="../components/Java.png" alt="Java Programming">
                <p>Java Programming</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CourseAvailability',
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToCourseAvail() {

      this.$router.push('/Course');
    }
  }
};

</script>
<style>
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

.main-content {
    width: 80%;
    padding: 20px;
    background-color: #d1ced2;
}

.courses-grid {
    display: flex;
    justify-content: flex-start; 
    gap: 20px; 
    margin-top: 20px;
}

.course {
    width: 25%;
    text-align: center;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
}

.course img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
}


.content-wrapper {
    display: flex;
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

.courses-grid {
    display: flex;
    justify-content: flex-start; 
    gap: 20px; 
    margin-top: 20px;
}



.course img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
}


  
</style>