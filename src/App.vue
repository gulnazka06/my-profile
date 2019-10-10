<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Contacts></Contacts>
        <Footer></Footer>
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    import Footer from "./components/Footer";
    import Contacts from "./components/Contacts";
    export default {
        name: "App",
        components: {Contacts, Footer, Nav}
    }
</script>

<style lang="scss">
    @import "./styles/main";

</style>
