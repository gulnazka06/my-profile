<template>
    <nav :class="{ 'cases': $route.name == 'Cases' }">
        <img src="/assets/img/logo.svg" alt="">
        <ul>
            <li>
                <router-link exact-active-class="active" to="/">Me</router-link>
            </li>
            <li>
                <router-link exact-active-class="active" to="/cases">Cases</router-link>
            </li>
            <li>
                <a role="button" @click="onContactsClick">Contacts</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        methods: {
            onContactsClick() {
                const contacts = document.querySelector('.contacts');
                contacts.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
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
        z-index: 9;

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
                    transition: .3s;

                    &.active {
                        opacity: 1;
                        font-weight: bolder;
                    }

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        @include tablet-portrait {
            justify-content: center;

            &.cases {
                justify-content: space-between;
            }

            ul {
                margin-left: 16px;
            }
        }

        @include desktop() {
            &.cases {
                justify-content: center;

                ul li {

                    a {
                        color: var(--text-color);
                    }
                }
            }
        }

    }
</style>
