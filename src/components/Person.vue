<template>
    <div>
        <h2>我是person.vue</h2>
        <p>
                personId: {{$route.params.personId}}
        </p>
    </div>
</template>
<script>
    export default {
        name: 'Person',
        created: function(){
            router.go(-1)
        }
    }
</script>