<template>
    <div class="case">
        <div class="content">
            <div>
                <h4>xPider Project</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ipsum et lectus commodo efficitur. </p>
            </div>
            <button>View project</button>
        </div>
        <div class="overlay">
            <img src="/assets/img/example-project.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Case"
    }
</script>

<style lang="scss" scoped>
    @import "../styles/mixin";

    .case {
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        min-height: 404px;
        transition: .3s ease-in-out;
        background: linear-gradient(306.93deg, #E84951 0%, #798DF6 100%);
        margin: 10px;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 16px;
            height: 404px;

            h4, p {
                color: var(--white-color);
            }

            button {
                margin-bottom: 16px;
            }
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #01081F;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .3s ease-in-out;
        }

        &:hover {
            transform: translateY(-1rem);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

            .overlay {
                opacity: 0;
                visibility: hidden;
            }
        }

        @include tablet-landscape {
            width: 33.3333%;
        }

        @include desktop {
            width: 25%;
        }
    }
</style>
