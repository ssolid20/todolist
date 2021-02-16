<template>
<div>
 <input type="text" v-model="ref">
  <p ref="par"></p>
</div>
</template>

<script>
export default {
//compos API
    props:['ads']
    setup(/*props*/){
        //console.log(props.text)
        /*not reactive */
        let name = 'name';
        let age = 3;
        //
        const par = ref(null)
        //connected to p tag
        const test =()=>{
            console.log("test");
            p.value.classList
        }
        // reactive refs
        let ref = ref("mario");
        let r = () => {
            ref.name = 'test';
            age.value = 34;
        }
        let f = ref({naem:'sda', age:3})
        let g = ()=> {
            f.value.age = 13;
        }
        let search = ref('');
        let list= ref([])
        const com = computed(()=>{
            return list.value.filter((li)=>{
                li.includes(search.value)
            })
        })

        //watch watch effect , run when some value change . 
        //watch effect nedded if you want to use value that is changing. 
        // to stop watching is enough to invoke funcs
        let gg = watch(list,()=>{
            console.log('dfsfs')
        })
        let ggg = watchEffect(()=>{
            console.log('fdaf', list.value)
        })
        onMountend(()=>{
            
        })

        return{ 
            name,age,test,par,ref,r
        }
    }
}
</script>

<style>

</style>