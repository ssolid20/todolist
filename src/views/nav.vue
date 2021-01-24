<template>
    <div class="navbar-fixed">
        <nav class="blue center ">
            <div class="flow-text">
            Things to do {{this.$store.state.count}}
            </div>
        </nav>
    </div>
</template>

<script>
import db from  '@/firebase'
export default {
    data(){
        return{
            listOfTodos:[],
        }
    },
    created(){
          db.collection('todolist').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                let smoothie = doc.data()
                smoothie.id = doc.id
                this.listOfTodos.push(smoothie)
                })
            })
            let ref = db.collection('collectofcalclus');
    this.$store.commit('test3',this.listOfTodos.length+1)

            ref.onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                            if(change.type == 'added'){
                            let doc = change.doc
                            this.listOfTodos.push({
                            id: doc.id,
                            content: doc.data().content,
                            title: doc.data().title,
                            })
                            }
                    })
                    })
    this.$store.commit('test3',this.listOfTodos.length+1)

    },
    beforeUpdate(){
        this.count=  this.listOfTodos.length
    },
    computed:{
        test(){
            return this.listOfTodos.length
        }
    },
    methods:{

    }
}
</script>