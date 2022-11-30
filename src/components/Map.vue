<template>
  <section class="map" id="map">
    <h2 class="visually-hidden">Где нас найти</h2>
    <yandex-map :zoom="13" :controls="['zoomControl']" :behaviors="['drag']" :coords="[59.90199441880941,30.407343334671012]">
      <ymap-marker 
      marker-id="123" 
      :coords="[59.90199441880941,30.407343334671012]"
      :icon="markerIcon"
    />
    </yandex-map>
  </section>
</template>

<script>
  export default {
    name: 'Map',
    data() {
      return {
        markerIcon: {
          layout: 'default#image',
          imageHref: this.setMapIcon(),
          imageSize: [50, 50],
          imageOffset: [-25, -25],
        }
      }
    },
    methods: {
      setMapIcon() {
        return require('@/assets/images/map-placeholder.svg');
      }
    }
  }
</script>

<style scoped lang="scss">
  .ymap-container {
    width: 100%;
    height: 500px;

    @include m-b-tablet-lg-down {
      height: 400px;
    }

    @include m-b-mobile-lg-down {
      height: 300px;
    }
  }
</style>