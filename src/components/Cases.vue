<template>
    <div class="cases container">
        <img class="triangle" src="/assets/img/triangle.svg" alt="">
        <h3>MY CASES</h3>
        <h4>In each project, I use modern and powerful solutions for the best result.</h4>
        <div class="list">
            <img src="/assets/img/oval.svg" alt="">
            <Case></Case>
        </div>
        <router-link to="/cases" class="button">
            <button class="full primary">View all</button>
        </router-link>
    </div>
</template>

<script>
    import Case from "./Case";
    export default {
        name: "Cases",
        components: {Case}
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    .cases {
        display: flex;
        flex-direction: column;
        position: relative;

        > .button {
            margin: 24px 0 48px;

            @include tablet-portrait {
                align-self: flex-end;
            }
        }

        .triangle {
            position: absolute;
            right: -50px;
            top: -50px;
        }

        .list {
            position: relative;
            margin: 0 -10px;

            > img {
                position: absolute;
                left: -27px;
                bottom: -20px;
            }

            @include tablet-portrait {
                display: flex;
            }
        }


        @include tablet-portrait {
            margin-top: 48px;

            h4 {
                width: 70%;
            }
        }

        @include tablet-landscape {
            h4 {
                width: 40%;
            }
        }
    }
</style>
