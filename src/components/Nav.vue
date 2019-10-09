<template>
    <nav>
        <img src="/assets/img/logo.svg" alt="">
        <ul>
            <li><a href="">Me</a></li>
            <li><a href="">Cases</a></li>
            <li><a href="">Contacts</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 34px 16px 105px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        img {
            width: 60px;
            height: 40px;
            margin-right: 10px;
        }

        ul {
            display: flex;
            padding-left: 0;

            li {
                list-style: none;
                padding-right: 15px;

                &:last-child {
                    padding-right: 0;
                }

                a {
                    text-decoration: none;
                    font-size: 16px;
                    color: var(--white-color);
                    opacity: .5;
                }
            }
        }

        @include tablet-portrait {
            justify-content: center;

            ul {
                margin-left: 16px;
            }
        }
    }

</style>
