<template>
  <div class="home">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <div id="content_container">

          <div id="content_wrapper">

            <header-container-sub name="Личный кабинет"></header-container-sub>

            <div id="content">

              <transition name="content_photo_move" appear>
                <div id="content_photo">

                  <img :src = first_item.avatar class="content_item_photo" alt="Ваше фото">

                </div>
              </transition>

              <div class="empty-for-large"></div>

              <transition name="content_name_move" appear>
                <div  id="content_name">

                  <div class="content_last_name">
                    {{ first_item.last_name }} {{ first_item.first_name }}
                  </div>

                </div>
              </transition>

              <div></div>

            </div>

            <header-container-sub name="Рекомендованный сорт пива"></header-container-sub>


            <router-link :to="{ name: 'Item', params: { id: beer.id}}"
                         id="beer" tag="div">

              {{ beer.brand }}

            </router-link>


          </div>

        </div>

      </div>

    </transition>

  </div>
</template>

<script>

import headerContainerSub from '../components/headerContainerSub.vue'

export default {
  name: 'Home',

  components: { headerContainerSub  },

  computed: {
    first_item: function () {
      return this.$store.getters.allItems
    },
    beer: function () {
      return this.$store.getters.allBeers
    }
  },
  async mounted() {
    this.$store.dispatch('fetchItems', 'fetchBeers')
  }
}

</script>

<style>

.home {
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
  margin-top: 3rem;
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
  padding-left:           4rem;
  padding-right:          4rem;
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     495px minmax(150px, auto);
  place-items:            center;
}

.empty-for-large {
  display: none;
}

@media (min-width: 960px) {
  #content {
    grid-template-columns:  330px .5fr 450px 1fr;
    grid-template-rows:     495px;
    justify-content:        center;
    align-content:          flex-end;
  }

  .empty-for-large {
    display: block;
    min-width: 100%;
  }
}

#content_photo {
  display:                grid;
  grid-template-columns:  330px;
  grid-template-rows:     495px;
  width:                  330px;
  height:                 495px;
  max-height:             495px;
  background:             none;
  place-items:            center;
  overflow:               hidden;
  border-radius:          9px;
}

#content_photo > img {
  width:                  100%;
  height:                 100%;
  object-fit:             contain;
  overflow:               hidden;
  border-radius:          9px;
}

#content_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     40px;
  padding-top:            2rem;
  place-items:            center;
}

.content_last_name {
  font-size:              40px;
  align-self:             center;
  font-weight:            400;
  color:                  #666;
}

@media (min-width: 960px) {
  #content_name {
    grid-template-rows:     50px;
    padding-top:            2rem;
    place-items:            flex-end;
  }
  .content_last_name {
    font-size: 50px;
  }
}

#beer {
  display:                grid;
  grid-template-rows:     40px;
  grid-template-columns:  1fr;
  padding-top:            1rem;
  padding-left:           0;
  place-items:            center;
  font-size:              20px;
  color:                  #666;
}

#beer:hover {
  color:                  #999;
}

@media (min-width: 960px) {
  #beer {
    display:                grid;
    grid-template-rows:     50px;
    grid-template-columns:  1fr;
    padding-top:            2rem;
    padding-left:           1rem;
    place-items:            flex-start;
    font-size:              30px;
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
