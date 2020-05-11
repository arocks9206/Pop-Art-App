<template lang="html">
<section>

  <div class="intro-container">
    <div>
      <overview-header title="POP ART 101"/>
      <h3>
        Pop Art is an art movement that emerged in the 1950s and
        flourished until the mid-1970s in America and Britain, that
        drew inspiration from popular and commercial culture. Some
        of the movement’s most identifiable artists include Andy Warhol,
        Roy Lichtenstein, and Robert Rauschenberg. Pop Art had influenced
        many areas such as the visual arts, music, film, and fashion.
      </h3>
    </div>
  </div>

<div class="intro-image">
  <div class="container">
    <img src="../assets/in the car_roy licht.jpg" alt="Avatar" class="image" style="width:100%">
      <div class="middle">
        <div class="text">
          <h1>“In The Car”</h1>
          <h3>Roy Lichtenstein</h3>
          <h5>1963</h5>
          <h6>Oil and magna on canvas</h6>
          <p>This painting is one of a series from the early 1960s in which Lichtenstein deals with the theme of romance. He would paint his works on a monumental scale, much enlarged from his original source material of comic-strip illustrations. This work is based on an image from the comic Girls' Romances.</p>
        </div>
      </div>
  </div>
</div>

<div class="content-container-one">
  <div>
    <h4>A new generation of artists emerged in Britain and America in the mid- to late-1950s in the climate of turbulence and experementation. These artists began to look for inspiration and materials in their immediate environment. They made art that mirrored, critiqued, and, at times, incorporated everyday items, consumer goods, and mass media messaging and imagery. In reference to its intended popular appeal and its engagement with popular culture, it was called Pop art.

    Pop artists strove for straightforwardness in their work, using bold swaths of primary colors, often straight from the can or tube of paint. They adopted commercial advertising methods like silkscreening, or produced multiples, downplaying the artist’s hand and subverting the idea of originality and preciousness—in marked contrast to the highly expressive, large-scale abstract paintings of the Abstract Expressionists, whose work had dominated postwar American art. Pop artists favored realism, everyday (even mundane) imagery, and heavy doses of irony and wit.</h4>
  </div>

</div>


<div class="list">

</div>

<div class="image-two">
  <div class="container">
    <img src="../assets/andy-micket.jpg" alt="Avatar" class="image" style="width:100%">
      <div class="middle">
        <div class="text">
          <h1>“Quadrant Mickey Mouse”</h1>
          <h3>Andy Warhol</h3>
          <h5>1981</h5>
          <h6>Synthetic polymer and silkscreen inks on canvas</h6>
          <p>This image of the Disney character Mickey Mouse belongs to a portfolio of ten screenprints called 'Myths' published in 1981. The series is based on characters from American Popular culture which have become icons, defining different generations.</p>
        </div>
      </div>
  </div>
</div>

<div class="content-container-two">
  <div>
    <h4>But many Pop artists, including Andy Warhol and Roy Lichtenstein, were very aware of the past. They sought to connect the traditions of fine art with the mass culture of television, advertising, film, and cartoons. At the same time, they challenged traditional boundaries between mediums and techniques, merging painting with photography and printmaking, combining handmade and readymade or mass-produced elements, and bringing together objects, images, and sometimes text to make new meaning.</h4>
  </div>

</div>

<div class="image-three">
  <div class="container">
    <img src="../assets/warhol_chelsea_girls.jpg" alt="Avatar" class="image" style="width:100%">
      <div class="middle">
        <div class="text">
          <h1> “Film Still from Chelsea Girl”</h1>
          <h3>Andy Warhol</h3>
          <h5>1967</h5>
          <p>Lacking a formal narrative, Warhol's art house classic follows various residents of the Chelsea Hotel in 1966 New York City,presented in a split screen with a single audio track in conjunction with one side of screen.</p>
        </div>
      </div>
  </div>
</div>


<router-link to="/timeline"><button>Next To Lesson 1: Timeline</button></router-link>



</section>

</template>

<script>
import OverviewHeader from "./headers/OverviewHeader.vue";

export default {
  name: 'Overview',
  components: {
    "overview-header": OverviewHeader
  }
}
</script>

<style lang="css" scoped>

section {
  background-image: url('../assets/background_1.jpg');
  background-size: cover;
  background-attachment: scroll;
}

.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.intro-container div {
  width: 900px;
}

.intro-container h3 {
  margin: 100px;
  font-size: 30px;
  text-align: justify;
  border-style: solid;
  background-color: #F0CD13;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}

.intro-image {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}

img {
  border-style: solid;
}

.image-two {
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
}

img {
  border-style: solid;
}

.image-three {
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
}

img {
  border-style: solid;
}

.content-container-one {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.content-container-one div {
  width: 900px;
}

.content-container-one h4 {
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #1998CB;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}

.content-container-two {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.content-container-two div {
  width: 900px;
}

.content-container-two h4 {
  font-size: 25px;
  text-align: justify;
  border-style: solid;
  background-color: #F2A28D;
  opacity: 95%;
  margin-bottom: 20px;
  padding: 5px;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* hover effect css */
.container {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Century Gothic;
  margin-bottom: 20px;
  padding: 5px;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background: black;
  color: white;
  font-size: 20px;
  padding: 16px 32px;
  width: 500px;
}

</style>
