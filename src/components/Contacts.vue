<template>
    <div class="contacts container">
        <img src="/assets/img/group.svg" alt="">
        <div class="content">
            <h3>CONTACTS</h3>
            <h2>Contact with me.</h2>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="E-mail">
            <textarea placeholder="Describe your great idea"></textarea>
            <button>Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    .contacts {
        position: relative;
        height: 714px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            width: 100%;

            h2, h3 {
                text-align: center;
            }

            h2 {
                font-size: 32px;
                line-height: 46px;
                color: var(--white-color);
            }

            h3 {
                color: var(--white-color);
            }

            input, textarea {
                border-radius: 6px;
                margin-bottom: 16px;
                border: none;
            }

            input {
                padding: 11px 16px;
            }

            textarea {
                height: 135px;
                padding: 11px 16px;
            }

            @include tablet-portrait {
                max-width: 560px;
                width: 100%;
                align-items: center;

                input, textarea {
                    width: 100%;
                }
            }
        }
    }
</style>
