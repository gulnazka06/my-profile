<template>
    <footer class="container">
        <div class="foot">
            <img class="logo" src="/assets/img/logo-ipad.svg" alt="">
            <div class="socials">
                <a href="https://github.com/gulnazka06" target="_blank" rel="noopener">
                    <img src="/assets/img/git.svg" alt="">
                </a>
                <a href=""><img src="/assets/img/be.svg" alt=""></a>
                <a href="https://instagram.com/luminous_06" target="_blank" rel="noopener">
                    <img src="/assets/img/ig.svg" alt="">
                </a>
            </div>
        </div>
        <div class="copyright"><b>Gulnaz Khamatnurova</b>.2019.</div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 133px;

        .socials {
            display: flex;
            justify-content: space-between;

            a {
                margin: 0 8px;
            }
        }

        .copyright:last-child {
            font-size: 10px;
            line-height: 11px;
            color: var(--text-color);
            opacity: .5;
            margin: 59px 0 49px;
        }

        .foot {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;

            .logo {
                display: none;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                @include tablet-portrait {
                    display: block;
                    align-self: flex-start;
                }
            }
        }

        @include tablet-portrait {

            .copyright {
                display: flex;
                align-self: flex-start;
            }
        }
    }
</style>
