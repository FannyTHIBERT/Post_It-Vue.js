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
            <h1 class="supprime">Post it supprimé</h1>
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
  name: "DeletePostIt",
  props: ["id"],
  data() {
    return {
      item: [],
    };
  },
  mounted() {
    if (window.confirm("Supprimer le post it ?")) {
      const route = useRoute();
      let LocalStorPostit = JSON.parse(localStorage.getItem("postit"));
      let GetPostId = route.params.id;
      LocalStorPostit.forEach((item) => {
        if (GetPostId == item.id) {
          console.log(item);
          console.log(LocalStorPostit);
          LocalStorPostit.splice(LocalStorPostit.indexOf(item), 1);
          localStorage.setItem("postit", JSON.stringify(LocalStorPostit));
        }
      });
    } else {
      return (window.location.href = "/");
    }
  },
};
</script>

<style scoped>
.supprime {
  text-align: center;
  color: #772510;
}
</style>