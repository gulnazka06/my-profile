<template>
    <div class="cases container">
        <img class="rectangle" src="/assets/img/shape.svg" alt="">
        <div class="list">
            <div class="case">
                <h3>HTML + CSS</h3>
                <h4>xPider – project about something.</h4>
                <div class="photo">
                    <img class="shape" src="/assets/img/oval.svg" alt="">
                    <img class="img" src="/assets/img/project.png" alt="">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ipsum et lectus commodo efficitur. Donec venenatis vulputate dui, tincidunt porta velit egestas vel. Proin posuere bibendum erat ac ultricies. Nulla nibh urna, vehicula sit amet pulvinar a, rhoncus eget enim. Nam sollicitudin odio faucibus nibh semper condimentum. </p>
                <button class="full primary">View live</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cases"
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/mixin";

    .cases {
        display: flex;
        flex-direction: column;
        position: relative;

        .rectangle {
            position: absolute;
            right: -40px;
            top: -50px;

            @include tablet-landscape {
                right: -20px;
            }
        }

        .list {
            position: relative;
            margin: 0 -10px;
        }

        .case {
            position: relative;
            border-radius: 6px;
            margin: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            > button {

                @include tablet-portrait {
                    align-self: flex-start;
                }
            }

            .photo {

                .img {
                    position: relative;
                    width: 100%;
                }

                .shape {
                    position: absolute;
                    left: -42px;
                    bottom: -14px;
                    display: none;

                    @include tablet-portrait {
                        display: block;
                    }
                }
            }

            @include tablet-portrait {
                padding-left: 50%;
                position: relative;

                > .photo {
                    position: absolute;
                    width: calc(50% - 16px);
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                }
            }

            @include tablet-landscape {
                padding-left: 62%;
            }
        }
    }
</style>
