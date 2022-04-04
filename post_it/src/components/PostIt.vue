<template>

    <section>

  <div class="container bootstrap snippets bootdeys">
    <a
      href="NewPostIt"
      class="btn btn-secondary btn-lg active"
      role="button"
      aria-pressed="true"
      >New post it</a
    >
    <div class="container">  
    <div class="content-card">
      <div v-for="item in items" :key="item.id">
        <div class="col-md-4 col-sm-6 content-card">
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="yellow"
              data-radius="none"
            >
              <div class="content">
                <h6 class="category">{{ item.title }}</h6>
                <router-link
                  :to="{ name: 'ViewPostIt', params: { id: item.id } }"
                  ><button
                    id="butt"
                    class="btn btn-secondary btn-sm active"
                    role="button"
                    aria-pressed="true"
                  >
                    Voir
                  </button></router-link
                >
                <router-link
                  :to="{ name: 'DeletePostIt', params: { id: item.id } }"
                  ><button
                    id="butt"
                    class="btn btn-danger btn-sm active"
                    role="button"
                    aria-pressed="true"
                  >
                    Supprimer
                  </button></router-link>
                <!--<button
                    @click='DeletePostit'
                    id="butt"
                    class="btn btn-danger btn-sm active"
                    role="button"
                    aria-pressed="true"
                  >
                    Supprimer
                  </button>-->
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
    </div>
  </div>
  </div>
    </section>
</template>




<script>
export default {
  name: "PostIt",
  props: {
    index: Number,
    keys: String,
    PostIt: {
      id: String,
      title: String,
      text: String,
    },
  },
  setup() {
    let LocalStorPostit = JSON.parse(localStorage.getItem("postit"));
    return {
      items: LocalStorPostit,
    };
  },
};
</script>




<style scoped>
div{
    height: 200px;
    width:auto;
    padding-left: 10px;
    margin-bottom: 30px;
    display: inline-block;
}
section{
    text-align:center;
}
</style>



     