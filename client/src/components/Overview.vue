<template lang="html">
<section>
  <div class="intro-container">

    <div>

  <h1>SHORT HISTORY OF POP ART</h1>
  <h3>Pop Art is an art movement that emerged in the 1950s and
  flourished until the mid-1970s in America and Britain, that
  drew inspiration from popular and commercial culture. Some
  of the movement’s most identifiable artists include Andy Warhol,
   Roy Lichtenstein, and Robert Rauschenberg. Pop Art had influenced
   many areas such as the visual arts, music, film, and fashion.</h3>

 </div>

 </div>

 <div class="intro-image">
   <div>
     <img src="../assets/lichtenstein_brushstroke.jpg" width="600px">
   </div>
 </div>

<div class="content-container">
  <div>
    <p>A new generation of artists emerged in Britain and America in the mid- to late-1950s in the climate of turbulence and experementation. These artists began to look for inspiration and materials in their immediate environment. They made art that mirrored, critiqued, and, at times, incorporated everyday items, consumer goods, and mass media messaging and imagery. In reference to its intended popular appeal and its engagement with popular culture, it was called Pop art.

      Pop artists strove for straightforwardness in their work, using bold swaths of primary colors, often straight from the can or tube of paint. They adopted commercial advertising methods like silkscreening, or produced multiples, downplaying the artist’s hand and subverting the idea of originality and preciousness—in marked contrast to the highly expressive, large-scale abstract paintings of the Abstract Expressionists, whose work had dominated postwar American art. Pop artists favored realism, everyday (even mundane) imagery, and heavy doses of irony and wit.</p>
  </div>

</div>


<div class="list">

</div>

<div class="content-container">
  <div>
    <p>But many Pop artists, including Andy Warhol and Roy Lichtenstein, were very aware of the past. They sought to connect the traditions of fine art with the mass culture of television, advertising, film, and cartoons. At the same time, they challenged traditional boundaries between mediums and techniques, merging painting with photography and printmaking, combining handmade and readymade or mass-produced elements, and bringing together objects, images, and sometimes text to make new meaning.</p>
  </div>

</div>


<router-link to="/andywarhol">Next to Andy Warhol</router-link>


</section>

</template>

<script>




export default {
  name: 'Overview',
  components: {

  }
}
</script>

<style lang="css" scoped>
.intro-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-container div {
  width: 900px;
}

.intro-container h1 {
  text-align: center;
}

.intro-container h3 {
  margin: 100px;
  font-size: 40px;
  text-align: justify;
}

.intro-image {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}

.content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.content-container div {
  width: 900px;
}

.content-container p {
  font-size: 30px;
  text-align: justify;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


</style>
