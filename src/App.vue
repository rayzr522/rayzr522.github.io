<template>
  <div id="app">
    <img src="./assets/icon.png">

    <header class="title-header">
      <h1 class="title">Rayzr522</h1>
      <ul>
        <li><a href="https://github.com/Rayzr522">GitHub</a></li>
        |
        <li><a href="https://discord.io/rayzrdevofficial">Discord</a></li>
        |
        <li><a href="https://www.patreon.com/rayzr522">Patreon</a></li>
        |
        <li><a href="mailto:rayzr522@gmail.com">Email</a></li>
      </ul>
    </header>

    <h3>Who am I?</h3>
    <p>I am a freelance developer who's been programming for the last 6 years. I enjoy writing code, playing video games, and doing math.</p>
    <h3>What do I know?</h3>
    <p>I've done a little bit of everything, from JavaScript to Java, HTML to Ruby. I have experience in 12 languages, and I can learn a new one on demand in a day or so, if a project requires it.</p>

    <div class="projects">
      <h1>Projects</h1>
      <div class="project">
        <a href="https://github.com/RayzrDev/SharpBot">SharpBot</a>
        <p>SharpBot is an ever-expanding Discord selfbot written with Discord.js that has a bunch of fun and useful commands</p>
      </div>
      <div class="project">
        <a href="https://github.com/Rayzr522/odyssey-interactive">Odyssey Interactive</a>
        <p>A 2D game that recreates the scene with Scylla and Charybdis from The Odyssey in an interactive form</p>
      </div>
      <div class="project">
        <a href="https://github.com/Rayzr522/DecoHeads">DecoHeads</a>
        <p>A Bukkit plugin which adds a sleak interface for obtaining decorative player heads for all your design needs</p>
      </div>
      <div class="project">
        <a href="https://github.com/Rayzr522/conway">conway</a>
        <p>An implementation of Conway's Game of Life written in pure Node.JS, using zero external dependencies</p>
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
@import url("https://fonts.googleapis.com/css?family=Oxygen");

#app {
  font-family: "Oxygen", "Avenir", Helvetica, Arial, sans-serif;
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

  margin-bottom: 70px;
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
  margin-top: 70px;
  .project {
    border: 1px solid #9ea7b3;
    border-radius: 10px;
    display: inline-block;
    padding: 20px;
    width: 350px;
    height: 120px;
    margin: 10px 20px;

    a {
      font-size: 30px;
    }

    p {
      margin: auto;
      margin-top: 15px;
    }
  }
}
</style>
