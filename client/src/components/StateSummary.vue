<template>
    <div v-if="states.length > 0">
        <h3>You have visited {{ totalVisited }} {{ units }}</h3>
        <p id="all-visited-message" v-if="areAllVisited">You have visited everywhere!</p>
    </div>
</template>

<script>
    export default {
        name: 'StateSummary',
        props: {
            states: Array,
        },
        computed: {
            totalVisited() {
                let visitedCount = 0
                this.states.forEach( state => {
                    if (state.visited == true) {
                        visitedCount++
                    }
                })
                return visitedCount
            },
            areAllVisited() {
            return this.totalVisited === this.states.length
            },
            units() {
                if (this.totalVisited === 1) {
                    return 'state'
                }
                else {
                    return 'states'
                }
            }
        }
    }
</script>

<style scoped>

    #all-visited-message {
        color: brown;
        font-weight: 600;
    }

</style>