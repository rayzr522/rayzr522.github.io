<template>
  <div id="app">
    <img src="./assets/icon.png">

    <header class="title-header">
      <h1 class="title">RayzrDev</h1>
      <ul>
        <li><a href="https://discord.io/rayzrdevofficial">Discord</a></li>
        |
        <li><a href="mailto:rayzr522@gmail.com">Email</a></li>
      </ul>
    </header>

    <h3>Who am I?</h3>
    <p>I am a freelance developer who's been programming for the last 6 years.</p>
    <h3>What do I know?</h3>
    <p>I've done a little bit of everything, from JavaScript to Java, HTML to Ruby. I have experience in 12 languages, and I can learn a new one on demand in a day or so, if a project requires it.</p>

    <div class="projects">
      <div class="project">
        <a href="https://github.com/RayzrDev/SharpBot">SharpBot</a>
        <p>SharpBot is an ever-expanding Discord selfbot written with Discord.js that has a bunch of fun and useful commands</p>
      </div>
      <div class="project">
        <a href="https://github.com/Rayzr522/odyssey-interactive">Odyssey Interactive</a>
        <p>A 2D game that recreates the scene with Scylla and Charybdis from The Odyssey in an interactive form</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

p {
  margin: auto 10%;
}

.title-header {
  h1 {
    font-size: 60px;
    margin-bottom: 0px;
  }

  margin-bottom: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  // color: #42b983;
  color: #f44813;
}

.projects {
  margin-top: 50px;
  .project {
    border: 1px solid #4a5869;
    border-radius: 10px;
    display: inline-block;
    padding: 20px;
    width: 350px;
    margin: 10px 20px;

    a {
      font-size: 30px;
    }

    p {
      margin-top: 15px;
    }
  }
}
</style>
