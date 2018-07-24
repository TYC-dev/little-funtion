<template>
    <div class="show-switch-box">
       <cswitch style="top: 50px;left: 40px"
          v-model="switch1"></cswitch>
        {{switch1}}
    </div>
</template>

<script>
import Cswitch from './Cswitch/CSwitch'
export default {
    name: 'showcswitch',
    components: {
        Cswitch
    },
    data() {
        return {
            switch1: true
        }
    }
}
</script>
