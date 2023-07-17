<template>
    <div class="container">
        <div class="card" v-for="item in  data" :key="item.id">
            <span class="icon">{{ item.icon }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
}
</script>