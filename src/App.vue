<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    import Footer from "./components/Footer";
    export default {
        name: "App",
        components: {Footer, Nav}
    }
</script>

<style lang="scss">
    @import "./styles/main";

</style>
