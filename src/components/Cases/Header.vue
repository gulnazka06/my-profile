<template>
    <header>
        <img src="/assets/img/dots.svg" alt="">
        <div class="content container">
            <h1>My Cases.</h1>
            <h2>MODERN AND POWERFUL PROJECTS
                <br>MADE BY ME</h2>
            <button @click="onLookClick" :class="{ primary: isPrimaryButton }">Look at the latest work</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isPrimaryButton: false,
            }
        },
        methods: {
            onLookClick() {
                const caseElement = document.querySelector('.case');
                caseElement.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        },
        mounted() {
            this.isPrimaryButton = window.innerWidth > 767
            window.onresize = () => {
                this.isPrimaryButton = window.innerWidth > 767
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/mixin";

    header {
        background-position: 0 -100px;

        .content {
            align-items: flex-start;

            @include tablet-landscape {
                padding: 0 87px;
            }

            @include desktop {
                padding: 0;
            }

            h2 {
                text-align: left;
            }
        }

        @include tablet-portrait() {
            background-image: url("/assets/img/bg-ipad.svg");
            background-position: top right;
            background-size: auto auto;
            position: relative;
        }

        > img {
            display: none;

            @include tablet-portrait {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
            }
        }

        .content {
            h1 {
                color: var(--white-color);
                font-size: 72px;
                line-height: 98px;
                font-weight: normal;

                @include tablet-portrait {
                    color: var(--text-color);
                }
            }

            h2 {
                color: var(--white-color);
                opacity: .5;

                @include tablet-portrait {
                    color: var(--text-color);
                }
            }

            button {
                padding: 10px 30px;
            }
        }
    }

</style>
