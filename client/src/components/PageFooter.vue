<template>
    <div class="footer">
        <div class="m-2">
            <span class="p-3">
                <router-link to="/">Home</router-link>
            </span>

            <pre></pre>

            <span class="p-3">
                <router-link to="about">About this site</router-link>
            </span>
        </div>

        <div class="credits">

            <P>Map Icon by
                <a href="https://icons8.com/icon/43632/map">Icons8</a>
            </P>    
        
            <p class="text-right p-2">Header image by
                <a href="https://unsplash.com/photos/KpBXAOs80YI">@CHRISLAWTON</a>
            </p>

        </div>

        
    </div>
</template>

<script>

    export default {
        name: 'PageFooter'
    }

</script>

<style scoped>

</style>