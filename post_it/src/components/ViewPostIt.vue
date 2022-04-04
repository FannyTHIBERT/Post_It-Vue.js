<template>
  <div class="container">
    <div class="content-card">
      <div class="card-big-shadow2 card-big-shadow">
        <div
          class="card card-just-text"
          data-background="color"
          data-color="yellow"
          data-radius="none"
        >
          <div class="content">
            <div class="numero">Post it n° {{ id }}</div>
            <h6 class="category">titre : {{ title }}</h6>
            <p class="description">texte : {{ text }}</p>
            <a
              href="javascript:history.back()"
              class="btn btn-secondary btn-sm active"
              role="button"
              aria-pressed="true"
              >Retour</a
            >
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
  </div>
</template>




<script>
import { useRoute } from "vue-router";
export default {
  name: "ViewPostIt",
  props: ["id"],
  data(){
      return{
        title: '',
        text: '',
      }
  },
  mounted() {
    const route = useRoute();
    let LocalStorPostit = JSON.parse(localStorage.getItem("postit"));
    let GetPostiId = route.params.id;
    LocalStorPostit.forEach((item) => {
      if(GetPostiId == item.id) {
        //console.log(item);
        this.title = item.title;
        this.text = item.text;
      }
    });
  },
};
</script>




<style scoped>
</style>