<script>
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app font-open-sans">
  <Header />
  <main>
    <slot />
  </main>
  <footer></footer>
</div>

<style>
</style>
