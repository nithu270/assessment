<template>
    <div class="header">
    <img src="../components/Brain.png" alt="Brain icon">
    <h2 style=" font-family: Georgia, 'Times New Roman', Times, serif;">Assessment portal</h2>
</div>
<div class="content-wrapper">
    <div class="sidebar">
        <div class="menu-item"><img src="../components/Dashboard.png" >Dashboard</div>
        <div class="menu-item"><img src="../components/Books.png" alt="Course icon">Course available</div>
        <div class="menu-item" @click = "goTomycourse"><img src="../components/Books1.png" alt="My course icon">My course</div>
        <div class="menu-item"><img src="../components/Programming.png" alt="Eligible course icon">Eligible course</div>
        <div class="menu-item"><img src="../components/Code.png" alt="Code review icon">Code review</div>
        <div class="menu-item"><img src="../components/Logout.png" alt="Logout icon">Log out</div>
    </div>
    <div class="main-content">
        <h1 align = "center">Your overall progress</h1>
        <div class="progress-section">
          <div class="programming">
            <h2>Programming</h2>
            <div class="progress-bars">
                <div class="progress-bar-container">
                    <div class="progress-bar"><div class="c"></div></div>
                    <div class="label"><b>C</b></div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar"><div class="java"></div></div>
                    <div class="label"><b>JAVA</b></div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar"><div class="data-structures"></div></div>
                    <div class="label"><b>DATA STRUCTURES</b></div>
                </div>
            </div>
        </div>
        <div class="soft-skills">
            <h2>Soft skills</h2>
            <div class="progress-bar-container">
                <div class="progress-bar"><div class="aptitude"></div></div>
                <div class="label"><b>APTITUDE</b></div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'DashboardPage',
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goTomycourse() {

      this.$router.push('/mycourse');
    }
  }
};
</script>
<style>
.progress-bar-container:hover .progress-bar div {
    transform: scale(1.1); 
    transition: transform 0.3s ease-in-out; 
}

.progress-bar-container:hover .label {
    font-weight: bold; 
    transition: font-weight 0.3s ease-in-out; 
}

   body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }
        h1 {
    margin-top: 0;
    margin-bottom: 50px; }

h2 {
    margin-top: 20px; 
    margin-bottom: 10px; 
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
    
        h1, h2 {
            margin-top: 0;
        }
        .progress-section {
            display: flex;
            gap: 120px; 
        }
        .programming, .soft-skills {
            flex: 0 0 auto; 

        }
        .progress-bars {
    display: flex;
    gap: 15px;
}
.progress-bar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;

}
.progress-bar {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 40px;
}
.progress-bar div {
    width: 100%;
}
.c { background-color: #000080; height: 150%;
width:20% }

.java { background-color: #8B0000; height: 60%; }
.data-structures { background-color: #DAA520; height: 70%; }
.aptitude { background-color: #006400; height: 90%; }
.label {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    font-size: 15px;
    font-family: Georgia, 'Times New Roman', Times, serif;

}
</style>