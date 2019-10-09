<template>
    <div class="about container">
        <img class="rectangle" src="/assets/img/shape.svg" alt="">
        <div class="description">
            <h3>ABOUT ME</h3>
            <h4>The main principles for me are speed and quality.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ipsum et lectus commodo efficitur. Donec venenatis vulputate dui, tincidunt porta velit egestas vel. </p>
            <button class="full primary">Hire me</button>
        </div>
        <img src="/assets/img/about-sketch.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    .about {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 48px;

        .rectangle {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(50%) translateY(-60%) rotate(30deg);
            width: 60px;
            height: 60px;
        }

        button {
            margin: 24px 0 48px;
        }

        img {
            width: 100%;

            @include tablet-portrait {
                width: 61%;
                display: block;
                margin-right: auto;
                margin-left: auto;
            }
        }
        @include tablet-portrait {
            margin-top: 48px;
        }

        @include tablet-portrait {
            flex-direction: row-reverse;

            .description {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 48px;
            }
        }
    }
</style>
