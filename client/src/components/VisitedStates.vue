<template>
    <div v-for="state in visitedStates" v-bind:key="state.name">
        <h2>{{ state.name }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'VisitedStates',
        data() {
            return {
                visitedStates: []
            }
        },
        mounted() {
            this.fetchAllVisitedStates()
        },
        methods: {
            fetchAllVisitedStates() {
                this.$stateService.getAllVisitedStates().then(states => {
                    this.visitedStates = states
                })
                .catch(err => {
                    alert('Sorry, unable to fetch visited states')
                    console.log(err)
                })
            }
        }
    }
</script>

<style>

</style>