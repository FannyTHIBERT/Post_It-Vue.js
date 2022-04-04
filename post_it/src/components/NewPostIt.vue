<template>

    <div class="container">  
        <div class="content-card">
            <div class="card-big-shadow2 card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                    <div class="content">
                        <form @submit.stop.prevent='onSubmit' action="/">
                        <div class="form-group">
                            <input type="title" v-model='title' class="form-control" id="title" aria-describedby="title" maxlength='15' placeholder="titre">
                        </div>
                        <div class="form-group">
                            <textarea type="text" v-model='text' class="form-control" id="text" placeholder="texte"></textarea>
                        </div>
                        <button type="submit" id='buttonNew' class="btn btn-secondary btn-sm">Enregistrer</button>
                        
                        </form>
                    </div>
                </div> <!-- end card -->
            </div>
        </div>
    </div>

</template>




<script>
import { ref } from 'vue';

export default {
        setup(){ 
            let title = ref('');
            let text = ref('');
            let id='';
            
            const onSubmit = function(){
                let postit = {
                id: Math.floor(Math.random() * 100),
                title: this.title, 
                text: this.text
                };
                let LocalStorPostit = JSON.parse(localStorage.getItem('postit'));
                //console.log(LocalStorPostit);
                    if(LocalStorPostit){
                        LocalStorPostit.push(postit);
                        localStorage.setItem('postit', JSON.stringify(LocalStorPostit));
                    }else{
                        LocalStorPostit = [];
                        LocalStorPostit.push(postit);
                        localStorage.setItem('postit', JSON.stringify(LocalStorPostit));
                    }
                title.value = "";
                text.value = ""; 
                                  
            }
            return {
                id,
                title,
                text,
                onSubmit,
            }
            
        },
}
</script>




<style scoped>

</style>

<!--data() {
    return {
      title: "",
      text: ""
    }
  },
    methods:{
        onSubmit() {
            if(this.title && this.text){
              localStorage.setItem('title', this.title),
              localStorage.setItem('text', this.text)
            }
        }
    }-->

   mounted(){ 
            
                this.$router.push('/')  
                     
        }