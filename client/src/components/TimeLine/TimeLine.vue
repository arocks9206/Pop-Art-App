<template lang="html">
<section>
<p>Just as with any other art movement, many key events took place during the development of pop art that changed the course of the movement forever. As a highly influential movement even to this day, it's important to examine these key events and understand how they helped shape fine art at the time.</p>
  <div class="image">

    <Timeline
        :timeline-items="dataTimeline1"
        :message-when-no-items="messageWhenNoItems"
        :show-day-and-month="false"
        :unique-year="true"
        order="ascd"
      />
<img class="image1" src="https://upload.wikimedia.org/wikipedia/en/d/d0/I_was_a_Rich_Man%27s_Plaything_1947.jpg" alt="">
    </div>
    <br>
    <div class="image">

      <Timeline
          :timeline-items="dataTimeline2"
          :message-when-no-items="messageWhenNoItems"
          :unique-year="true"
          :show-day-and-month="true"
          order="ascd"
        />
  <img class="image2" src="https://blog.artsper.com/wp-content/uploads/2018/01/f3908d3bd5fed6b27c9fd4c637078086-eduardo-paolozzi-south-london.jpg" alt="">
  <!-- <p>Independent Group members; Nigel Henderson, Eduardo Paolozzi, Alison and Peter Smithson</p> -->
      </div>

      <div class="image">
        <Timeline
            :timeline-items="dataTimeline3"
            :message-when-no-items="messageWhenNoItems"
            :show-day-and-month="false"
            :unique-year="true"
            order="ascd"
          />
    <img class="image3" src="https://www.contemporary-art-auction.com/wp-content/uploads/2016/11/X_FUN-HOUSE.jpg" alt="">
        </div>

        <div class="image">
          <Timeline
              :timeline-items="dataTimeline4"
              :message-when-no-items="messageWhenNoItems"
              :show-day-and-month="false"
              :unique-year="true"
              order="ascd"
            />
      <img class="image4" src="https://images.masterworksfineart.com/2018/01/29/andy-warhol-campbell-soup-cans-series-2/andy-warhol-campbells-soup-1-1024x768.jpg" alt="">
          </div>
          <br>
          <div class="image">
            <Timeline
                :timeline-items="dataTimeline5"
                :message-when-no-items="messageWhenNoItems"
                :show-day-and-month="false"
                :unique-year="true"
                order="ascd"
              />
        <img class="image5" src="https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Drowning-Girl-391x395.jpg" alt="">
            </div>
            <br>

            <div class="image">
              <Timeline
                  :timeline-items="dataTimeline6"
                  :message-when-no-items="messageWhenNoItems"
                  :show-day-and-month="false"
                  :unique-year="true"
                  order="ascd"
                />
          <img class="image5" src="https://artsartistsartwork.com/wp-content/uploads/2017/06/Andy-Warhol-standing-300x300.jpg" alt="">
          <!-- While Warhol was on the phone, Solanas took out her pistol and fired at him three times. The first two shots missed. The third hit him in the abdomen, passing through his lungs, spleen, stomach, liver and esophagus. She then shot art critic Mario Amaya, who was hit in the back part of his hip. She then aimed at Warhol’s manager, Fred Hughes, attempting to shoot him in the head, but the pistol jammed. Hughes told her to leave, and she did. Warhol was taken to Columbus-Mother Cabrini Hospital, where he underwent a five hour surgery that saved his life. -->

              </div>

</section>

</template>

<script>

import Timeline from 'timeline-vuejs'


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      dataTimeline1 : [
        {
          from: new Date(1947,3),
          showDayAndMonth: false,
          description:
            "Eduardo Paolozzi produces what is often considered to be one of the first works of true pop art, I was a Rich Man's Plaything. This collage even features the word “pop” itself, emerging from a gun."
        }],

        dataTimeline2 : [
          {
            from: new Date(1952, 5, 22),
            showDayAndMonth: false,
            description:
              "The Independent Group forms, where the first pop artists in London's art scene meet and collaborate. This group produced many of the first exhibitions to feature pop art, and included a number of artists that are considered to be founders of the movement. Among them were Richard Hamilton and Eduardo Paolozzi, two extremely influential collage artists who helped to define the movement when it was in its infancy. Art critic Lawrence Alloway was also among the members of the Independent Group, and he is credited with coining the term “pop art,” though this is disputed. Some say it was Frank Cordell who came up with the term."
          },
          {
            from: new Date(1954, 5, 22),
            showDayAndMonth: false,
            description:
              "Frank Cordell may have coined the term “pop art.”"
          },
          {
            from: new Date(1955, 2, 22),
            showDayAndMonth: false,
            description:
              "The term “pop art” and the general concept that it entails is well-established among the members of the Independent Group. It has now become a defined movement."
          }
        ],
        dataTimeline3 : [
          {
            from: new Date(1956,7),
            showDayAndMonth: false,
            description:
              "The Independent Group is now dissolved, however many of the artists continue to meet informally, and several of them feature in the exhibition This is Tomorrow. Notably, Richard Hamilton's collage Just what is it that makes today's homes so different, so appealing? is displayed, a collage that would later be considered one of the turning points of the movement and one of the earliest pieces of true pop art."
          },
          {
            from: new Date(1958,7),
            showDayAndMonth: false,
            description:
              "Lawrence Alloway writes an essay about pop art, called The Arts and the Mass Media, which helps to popularize the movement and further define it."
          },
          {
            from: new Date(1958,9),
            showDayAndMonth: false,
            description:
              "Billy Apple and others first venture to the United States and meet Andy Warhol. British and American artists collaborate and help to bolster the style's prominence on the art scene."
          },
        ],

        dataTimeline4 : [
          {
            from: new Date(1962,1),
            showDayAndMonth: false,
            description:
              "The term “pop art” is used for the first time in the U.S. by the Museum of Modern Art in New York during a symposium. Andy Warhol exhibits his Campbell's Soup Cans for the first time; this is also his first solo exhibition."
          }],

          dataTimeline5 : [
            {
              from: new Date(1963,3),
              showDayAndMonth: false,
              description:
                "Roy Lichtenstein produces one of his most famous paintings, Drowning Girl, which is an almost exact copy of a panel from the DC comic Secret Hearts."
            },
            {
              from: new Date(1964,5),
              showDayAndMonth: false,
              description:
                "The American Supermarket exhibition takes place."
            }],

            dataTimeline6 : [
              {
                from: new Date(1968,10),
                showDayAndMonth: false,
                description:
                  "Andy Warhol is shot by radical feminist Valerie Solanas and nearly dies from his wounds. The incident takes a toll on Warhol's career and both his work output and the movement in general begins to slow down."
              },
              {
                from: new Date(1975,4),
                showDayAndMonth: false,
                description:
                  "Andy Warhol publishes his book The Philosophy of Andy Warhol."
              },
              {
                from: new Date(1979,7),
                showDayAndMonth: false,
                description:
                  "Warhol helps found the New York Academy of Art."
              }],


    }
  },
}
</script>

<style lang="css" scoped>
.image{
  display: flex;
  justify-content: center;
}

.image1{
  height: 420px;
  border: solid black;
}

.image2{
  height: 230px;
  border: solid black;
  margin-top: 80px;
}

.image3{
  height: 226px;
  border: solid black;
  margin-top: 50px;
}
.image4{
  height: 215px;
  border: solid black;
  margin-top: 10px;
}
.image5{
  height: 290px;
  border: solid black;
  margin-top: 50px;
}



</style>
