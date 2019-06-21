<template>
    <div id="recommend">
        <span>recommend {{ $route.params.id }}</span>
    </div>
</template> 

<script>
    import { 
  Button, 
  Table, 
  Modal,
  Form,
  Input,
  Divider
 } from 'ant-design-vue'
    import axios from 'axios';
    import Slider from '@/components/Slider.vue'
    export default {
        name: 'Recommend',
        data(){
            return {
                
            }
        },
        components: {
            Slider
        },
        mounted(){
            /**axios.get('/').then(res=>{
                console.log(res)
            })**/
        },
        methods:{
            
        }
    }

</script>
<style>
    #recommend{
        width: 980px;
        height: 1745px;
        border: 1px solid #ddd;
        background: #fff;
        margin: 0 auto;
    }
</style>