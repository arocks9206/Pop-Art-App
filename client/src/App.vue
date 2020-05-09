<template>

  <section class="scroll-markers">
    <div class="">
      <Timeline
          :timeline-items="dataTimeline"
          :message-when-no-items="messageWhenNoItems"
          :unique-year="true"
          :show-day-and-month="true"
          order="desc"
        />
      </div>
    <div class="scroll-container">
      <Example-start
        v-if="currentlyShowing === 'first'"
        title="Scroll Markers Example"
        description="This is an example demonstrating the use of scrollmarkers as triggers for scroll positions."
      ></Example-start>

      <div v-if="currentlyShowing === 'second'" class="scroll-section">
        <div class="container">
        <img class="mainimg" src="https://images.unsplash.com/photo-1519731506190-f37737f13a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="working at home">
          <div class="middle">
          <p class="text">Doggo in Snow</p>
        </div>
        </div>
      </div>




      <div v-if="currentlyShowing === 'third'" class="scroll-section">
        <Albums></Albums>
      </div>


      <div v-if="currentlyShowing === 'fourth'" class="scroll-section">
        <p>
          Hey
        </p>
      </div>


      <p v-if="currentlyShowing === 'fifth'" class="scroll-section">
        hope you had fun
      </p>

      <div v-if="currentlyShowing === 'sixth'" class="scroll-section">
        <p>The End!</p>
        <img src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
      </div>

      <div class="debug-toggle">
        <input type="checkbox" v-model="debug">
        Toggle debug mode
      </div>

    </div>
    <div class="markers">
      <scroll-view>
        <template slot-scope="visible">
          <scroll-marker
            v-for="m in markers"
            :key="m"
            :visible="visible[m]"
            :name="m"
            :spacing="700"
            :debug="debug"
            @isVisible="markerVisible"
            @isNotVisible="markerNotVisible"
          ></scroll-marker>
        </template>
      </scroll-view>
    </div>
  </section>
</template>

<script>

import Films from '@/components/Films/Films.vue'
import FilmsList from '@/components/Films/FilmsList.vue'
import Artists from '@/components/Artists/Artists.vue'
import ArtistsList from '@/components/Artists/ArtistsList.vue'
import Albums from '@/components/Albums/Albums.vue'
import AlbumsList from '@/components/Albums/AlbumsList.vue'
import { $scrollview } from 'vue-scrollview'
import Timeline from 'timeline-vuejs'






export default {
  name: 'App',
  components: {
    FilmsList,
    Films,
    Artists,
    ArtistsList,
    Albums,
    AlbumsList,
    Timeline,
  },
  props: {
    visible: {
        default: () => false
    }
  },
  data() {
      return {
        markers: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
        debug: false,
        currentlyShowing: 'first',
        messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2020, 5, 22),
        title: "Lockdown",
        showDayAndMonth: true,
        description:
          "testings but as much as we want here"
      },
      {
        from: new Date(2018, 7, 15),
        title: "Can have it just showing months",
        description:
          "Jan starts at month 0"
      },
      {
        from: new Date(2010, 11),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2018, 7, 19),
        title: "dates",
        showDayAndMonth: true,
        description:
          "We can sort by ascending or descending dates"
      },
      {
        from: new Date(2010, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      }
    ]
  }
    },
    methods: {
      markerVisible(name) {
        this.currentlyShowing = name
      },
      markerNotVisible(name) {
        const scrollDirection = $scrollview.getScrollDirection()
        if (name === 'first' && scrollDirection === 'UP') this.currentlyShowing = name
      }
    },

}


</script>

<style scoped>
/* code for the scroll */
.scroll-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-section {
  max-width: 600px;
  text-align: center;
}

.markers {
  width: 100%;
  padding-bottom: 300px;
}

.debug-toggle {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

/* code below for the picture transition */
.container {
  position: relative;
  width: 50%;
}

.mainimg {
  opacity: 1;
  display: block;
  transition: 1s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 75%;
  height: 80;
}

.container:hover .album {
  opacity: 0.1;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  color: black;

  background: lightgrey;
  font-size: 17px;
  padding: 1px;
}
</style>
