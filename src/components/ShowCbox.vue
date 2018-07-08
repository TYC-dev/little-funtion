<template>
    <div>
        <p v-for="i in 100">{{i}}</p>
    </div>
</template>

<script>
   import Cbox from './Cbox/Cbox'
   import Cheader from './Cheader/Cheader'
   
   export default {
       name: 'showcbox',
       components: {
           Cbox,
           Cheader
       }
   }
</script>
