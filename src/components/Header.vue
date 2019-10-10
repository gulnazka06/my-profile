<template>
<header>
    <div class="content">
        <h1>I'm Gulnaz</h1>
        <h2>CREATIVE FRONTED DEVELOPER</h2>
        <button @click="onGetStartedClick">Get started</button>
    </div>
</header>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            onGetStartedClick() {
                const cases = document.querySelector('.cases');
                cases.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/mixin";
    header {
        background-image: url('/assets/img/header-bg.svg');
        background-size: auto 100%;
        padding: 265px 0;
        background-repeat: no-repeat;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                font-size: 48px;
                color: var(--white-color);
                text-align: center;
                margin-top: 0;
                margin-bottom: 24px;
            }

            h2 {
                font-size: 18px;
                line-height: 25px;
                color: var(--white-color);
                text-align: center;
                opacity: .5;
                margin-top: 0;
                margin-bottom: 48px;
            }
        }

        @include tablet-portrait {
            background-position: top right;
        }

        @include desktop {
            background-size: 100%;
            background-position: bottom left;
        }
    }
</style>
