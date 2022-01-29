<template>

  <div class="header_container_sub">

    <div id="header_wrapper_sub">

      <h2 id="header_sub"><p>{{ name }}</p></h2>

    </div>

  </div>

</template>

<script>

export default {
  name: 'headerContainerSub',
  props: {
    name: String
  }
}

</script>

<style scoped>

.header_container_sub {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-top:             3rem;
}

@media (min-width: 60rem) {
  .header_container_sub {
    margin-top:            2rem;
  }
}

#header_wrapper_sub {
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  #header_wrapper_sub {
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}


#header_sub {
  display:                grid;
  grid-template-columns:  1fr;
  min-height:             2rem;
  align-self:             center;
  justify-self:           center;
  font-size:              1.5rem;
  font-weight:            500;
  color:                  #666;
  text-align: center;
}

@media (min-width: 60rem) {

  #header_sub {
    display:                grid;
    grid-template-columns:  1fr;
    min-height:             3rem;
    align-self:             center;
    justify-self:           center;
    font-size:              2rem;
  }
}


#header_sub > p {
  align-self:             center;
  justify-self:           center;
}

@media (min-width: 60rem) {

  #header_sub > p {
    align-self:             center;
    justify-self:           left;
  }
}

</style>
