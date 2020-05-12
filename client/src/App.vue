<template lang="html">
  <section>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="./assets/pop-101-logo.png" width="70" height="70">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
      <li class="nav-item active"><a class="nav-link" href="/timeline">Timeline</a></li>
      <li class="nav-item active"><a class="nav-link" href="/artists/warhol">Andy Warhol</a></li>
      <li class="nav-item active"><a class="nav-link" href="/artists/lichtenstein">Roy Lichtenstein</a></li>
      <li class="nav-item active"><a class="nav-link" href="/artists/keyartists">Other Key Artists</a></li>
      <li class="nav-item active"><a class="nav-link" href="/quiz/5eba684ccc42943fc1fdd1f7">Pop Quiz</a></li>
      <li class="nav-item active"><a class="nav-link" href="/favourites">Favourites</a></li>
    </ul>
  </nav>

    <router-view></router-view>

  </section>
</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'App'
}
</script>

<style lang="css" scoped>

</style>
