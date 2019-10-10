<template>
    <div class="cases">
    <Header></Header>
    <CasesList></CasesList>
    </div>
</template>

<script>
    import Header from "../components/Cases/Header";
    import CasesList from "../components/Cases/Cases";
    export default {
        name: "Cases",
        components: {Header, CasesList}
    }
</script>

<style scoped>

</style>
