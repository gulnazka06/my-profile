<template>
    <div class="index">
        <Header></Header>
        <Cases></Cases>
        <About></About>
        <Contacts></Contacts>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Cases from "../components/Cases";
    import About from "../components/About";
    import Contacts from "../components/Contacts";
    export default {
        name: "index",
        components: {Contacts, About, Cases, Header}
    }
</script>

<style scoped>

</style>
