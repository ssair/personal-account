<template>

  <div class="item">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <div id="content_container">

          <div id="content_wrapper">

              <transition name="content_name_move" appear>
                <div  id="content_name">

                  <div class="content_last_name">
                    {{ this.$store.getters.allBeers.brand }}
                  </div>

                  <div class="content_last_name">
                    {{ this.$store.getters.allBeers.name }}
                  </div>

                  <div class="content_last_name">
                    {{ this.$store.getters.allBeers.style }}
                  </div>

                </div>
              </transition>

          </div>

        </div>

      </div>

    </transition>

  </div>

</template>

<script>

export default {
  name: 'Item',
  computed: {
    id: function () {
      return this.$route.params.id
    },
  }
}

</script>

<style scoped>

.item {
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
}

#container {
  width:                  100%;
  max-width:              100%;
}

#content_container {
  width:                  100vw;
  max-width:              100vw;
  min-height:             100vh;
}

#content_wrapper {
  padding-left:           2rem;
  padding-right:          2rem;
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     495px minmax(150px, auto);
  place-content:          center;
  place-items:            center;
}

.empty-for-large {
  display: none;
}

@media (min-width: 960px) {
  #content {
    grid-template-columns:  1fr;
    grid-template-rows:     auto;
    justify-content:        center;
    align-content:          center;
  }

  .empty-for-large {
    display: block;
    min-width: 100%;
  }
}

#content_name {
  display:                grid;
  grid-template-columns:  100vw;
  grid-template-rows:     50px 40px 30px;
  padding-top:            2rem;
  place-items:            center;
  justify-items: center;
  grid-gap:               2rem;
}

.content_last_name {
  font-size: 40px;
  align-self: center;
  font-weight:            400;
  color:                  #666;
}

@media (min-width: 960px) {
  #content_name {
    grid-template-rows:     50px 50px 50px;
    padding-top: 2rem;
    place-items: flex-start;
  }

  .content_last_name {
    font-size: 50px;
  }
}

.content_photo_move-enter-active {
  transition: all 1s ease-out;
}

.content_photo_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.content_photo_move-enter-from,
.content_photo_move-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.content_name_move-enter-active {
  transition: all 1s ease-out;
}

.content_name_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.content_name_move-enter-from,
.content_name_move-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

</style>
